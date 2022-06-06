import { FaSearch } from "react-icons/fa"
import { useState, useEffect, useRef, useCallback } from "react"
import icon_marker from "../assets/icon_marker.png"

const { kakao } = window

function KakaoMap(prop) {
  const api = useRef()
  api.current = prop.maps
  const inputRef = useRef()
  const container = useRef()
  const clusterer = useRef()
  const [kakaoMap, setKakaoMap] = useState(null)
  const [searchValue, setSearchValue] = useState(api.current)

  useEffect(() => {
    // 카카오맵 컨테이너
    const options = {
      center: new kakao.maps.LatLng(37.57002, 126.97962),
      level: 3,
    }
    const map = new kakao.maps.Map(container.current, options)
    setKakaoMap(map)

    clusterer.current = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 9,
    })

    // 줌 컨트롤
    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)
  }, [])

  const addMarker = useCallback(() => {
    // 충전소 위치 마킹
    const markers = searchValue.map((list) => {
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(list.lat, list.lng),
      })
      let cType = list.chgerType
      let cStat = list.stat

      switch (cType) {
        case "01":
          cType = "DC차데모"
          break
        case "02":
          cType = "AC완속"
          break
        case "03":
          cType = "DC차데모 + AC3상"
          break
        case "04":
          cType = "DC콤보"
          break
        case "05":
          cType = "DC차데모 + DC콤보"
          break
        case "06":
          cType = "DC차데모 + AC3상 + DC콤보"
          break
        case "07":
          cType = "AC3상"
          break
        default:
          break
      }

      cStat === "2"
        ? (cStat = "<span style='color:#4caf50'>충전 가능</span>")
        : (cStat = "<span style='color:#f00'>충전 불가</span>")

      const contents = `<div style='padding:5px; width:100%; font-size:14px'>
        <b style='font-size:16px'>${list.statNm}</b><br>
        <p>주소 : ${list.addr}</p>
        <p>충전기타입 : ${cType}</p>
        <p>충전기상태 : ${cStat}</p>        
        <p>이용시간 : ${list.useTime}</p>        
        <p>기관연락처 : ${list.busiCall}</p></div>`

      let infowindow = new kakao.maps.InfoWindow({
        content: contents,
      })
      kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(kakaoMap, marker)
      })
      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close()
      })
      return marker
    })
    clusterer.current.addMarkers(markers)
  }, [kakaoMap, searchValue])

  useEffect(() => {
    if (kakaoMap === null) {
      return
    }
    clusterer.current.clear()
    addMarker()

    // 클러스터 클릭시 맵 확대
    kakao.maps.event.addListener(
      clusterer.current,
      "clusterclick",
      function (cluster) {
        let level = kakaoMap.getLevel() - 1
        kakaoMap.setLevel(level, { anchor: cluster.getCenter() })
      }
    )

    // 검색위치 맵이동
    if (inputRef.current.value) {
      let bounds = new kakao.maps.LatLngBounds()
      let center = searchValue.map(
        (position) => new kakao.maps.LatLng(position.lat, position.lng)
      )
      for (let i = 0; i < center.length; i++) {
        bounds.extend(center[i])
      }
      kakaoMap.setBounds(bounds)
    }
  }, [kakaoMap, searchValue, addMarker])

  const search = () => {
    if (!inputRef.current.value) {
      if (searchValue === api.current) {
        return
      }
      alert("전체 목록을 불러옵니다.\n조금만 기다려주세요")
      setSearchValue(api.current)
      return
    }
    let flt = api.current.filter((list) =>
      list.addr.includes(inputRef.current.value)
    )
    !flt.length ? searchValue(flt) : alert("검색 결과가 없습니다.")
  }

  const findCurrentLocation = useCallback(() => {
    // 내위치 불러오기
    if (navigator.geolocation) {
      const imgSrc = icon_marker,
        imgSize = new kakao.maps.Size(42, 42)

      navigator.geolocation.getCurrentPosition(function (pos) {
        let latitude = pos.coords.latitude
        let longitude = pos.coords.longitude
        let accuracy = pos.coords.accuracy
        let level = kakaoMap.getLevel()
        let locPosition = new kakao.maps.LatLng(latitude, longitude)

        let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize)
        // 위치정확도가 낮을경우 맵레벨 증가
        if (accuracy > 80) {
          kakaoMap.setLevel(
            (level += Math.round(Math.log(accuracy / 50) / Math.LN2))
          )
        }
        // 현재위치 마커
        let marker = new kakao.maps.Marker({
          map: kakaoMap,
          position: locPosition,
          image: markerImg,
        })

        marker.setMap(kakaoMap)
        kakaoMap.setCenter(locPosition)
      })
    }
  }, [kakaoMap])

  return (
    <div className="map_cont">
      <div className="sch_cont">
        <input
          ref={inputRef}
          type="text"
          placeholder="지역명을 입력"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              search()
            }
          }}
        />
        <button onClick={search}>
          <FaSearch size="20" />
        </button>
      </div>
      <div className="btn_cont">
        <button onClick={findCurrentLocation} />
      </div>
      <div id="container" ref={container}></div>
    </div>
  )
}

export default KakaoMap
