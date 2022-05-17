import { useState, useEffect, useCallback } from "react"

const { kakao } = window

function MapContainer(props) {
  const [filter, setFilter] = useState("")
  const list = props.props

  // console.log(
  //   list.filter((list) => list.addr.indexOf("종로") !== -1)
  //   // list.filter((list) => list.addr.indexOf(filter) !== -1).map((i) => i.lat)
  // )
  // console.log(list.map((p) => p.lat))

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

    // 충전소 위치 마킹
    let markers = list.map(function (position) {
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.lng),
      })
      kakao.maps.event.addListener(marker, "click", function () {
        let infowindow = new kakao.maps.InfoWindow({
          content:
            "<div style='padding:5px'>주소 : " + position.addr + "</div>",
          removable: true,
        })
        infowindow.open(map, marker)
      })
      return marker
    })

    clusterer.addMarkers(markers)

    // 클러스터 클릭시 맵 확대
    kakao.maps.event.addListener(clusterer, "clusterclick", function (cluster) {
      let level = map.getLevel() - 1
      map.setLevel(level, { anchor: cluster.getCenter() })
    })

    // 내위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        let latitude = pos.coords.latitude
        let longitude = pos.coords.longitude
        let accuracy = pos.coords.accuracy
        let level = map.getLevel()
        let locPosition = new kakao.maps.LatLng(latitude, longitude)
        // 위치정확도가 낮을경우 맵레벨 증가
        if (accuracy > 80) {
          map.setLevel(
            (level += Math.round(Math.log(accuracy / 50) / Math.LN2))
          )
        }
        // 현재위치 마커
        let marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        })
        marker.setMap(map)
        map.setCenter(locPosition)
      })
    }

    // 줌 컨트롤
    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)

    // 로드뷰
    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW)
  }, [list])

  return (
    <div>
      <div style={{ position: "absolute", zIndex: "2" }}>
        <input placeholder="지역명을 입력" />
        <button>검색</button>
      </div>
      <div id="Map"></div>
    </div>
  )
}

export default MapContainer
