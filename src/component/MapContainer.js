import { FaSearch } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"

const { kakao } = window

function MapContainer({ maps }) {
  const inputRef = useRef()
  const [searchList, setSearchList] = useState(maps)

  const search = () => {
    if (!inputRef.current.value) {
      setSearchList(maps)
      return
    }
    const searchValue = searchList.filter(
      (list) => list.addr.indexOf(inputRef.current.value) !== -1
    )
    if (!searchValue.length) {
      alert("검색 결과가 없습니다.")
      return
    }
    setSearchList(searchValue)
  }

  useEffect(() => {
    // 카카오맵 컨테이너
    const container = document.getElementById("Map")
    const options = {
      center: new kakao.maps.LatLng(37.57002, 126.97962),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    let clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 8,
    })
    clusterer.clear()

    // 충전소 위치 마킹
    let markers = searchList.map(function (list) {
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

      if (cStat === "2") {
        cStat = "충전 가능"
      } else {
        cStat = "충전 불가"
      }

      const contents =
        "<div style='padding:5px; width:100%; font-size:14px'>" +
        "<b style='font-size:16px'>" +
        list.statNm +
        "</b><br><p>주소 : " +
        list.addr +
        "<br>충전기타입 : " +
        cType +
        "<br>충전기상태 : " +
        cStat +
        "<br>이용시간 : " +
        list.useTime +
        "<br>기관연락처 : " +
        list.busiCall +
        "</p></div>"

      let infowindow = new kakao.maps.InfoWindow({
        content: contents,
      })
      kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(map, marker)
      })
      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close()
      })
      return marker
    })

    clusterer.addMarkers(markers)

    if (inputRef.current.value) {
      let bounds = new kakao.maps.LatLngBounds()
      let center = searchList.map(
        (position) => new kakao.maps.LatLng(position.lat, position.lng)
      )
      for (let i = 0; i < center.length; i++) {
        bounds.extend(center[i])
      }
      map.setBounds(bounds)
    }

    // 클러스터 클릭시 맵 확대
    kakao.maps.event.addListener(clusterer, "clusterclick", function (cluster) {
      let level = map.getLevel() - 1
      map.setLevel(level, { anchor: cluster.getCenter() })
    })

    // 내위치 불러오기
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (pos) {
    //     let latitude = pos.coords.latitude
    //     let longitude = pos.coords.longitude
    //     let accuracy = pos.coords.accuracy
    //     let level = map.getLevel()
    //     let locPosition = new kakao.maps.LatLng(latitude, longitude)
    //     // 위치정확도가 낮을경우 맵레벨 증가
    //     if (accuracy > 80) {
    //       map.setLevel(
    //         (level += Math.round(Math.log(accuracy / 50) / Math.LN2))
    //       )
    //     }
    //     // 현재위치 마커
    //     let marker = new kakao.maps.Marker({
    //       map: map,
    //       position: locPosition,
    //     })
    //     marker.setMap(map)
    //     map.setCenter(locPosition)
    //   })
    // }

    // 줌 컨트롤
    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)
  }, [searchList])

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
      <div id="Map"></div>
    </div>
  )
}

export default MapContainer
