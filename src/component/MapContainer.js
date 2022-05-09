import { useEffect } from "react"

const { kakao } = window

const MapContainer = ({ lat, lng }) => {
  let markerArr = []

  for (let i = 0; i < lat.length; i++) {
    markerArr[i] = [{ lating: new kakao.maps.LatLng(lat[i], lng[i]) }]
  }

  useEffect(() => {
    // 카카오맵 컨테이너
    const container = document.getElementById("Map")
    const options = {
      center: new kakao.maps.LatLng(37.57002, 126.97962),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    // 충전소 위치 마킹
    for (let i = 0; i < markerArr.length; i++) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: markerArr[i][0].lating,
      })
      marker.setMap(map)
    }

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
          console.log(Math.round(Math.log(accuracy / 50) / Math.LN2))
        }
        displayMarker(locPosition)
      })
    }
    function displayMarker(locPosition) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      })
      marker.setMap(map)
      map.setCenter(locPosition)
    }
    console.log(map)

    // 줌 컨트롤
    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)

    // 로드뷰
    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW)

    // 마커생성
    // let marker = new kakao.maps.Marker({
    //   positions: new kakao.maps.LatLng(latArray[i], longArray[i]),
    // })
  }, [])

  return <div id="Map"></div>
}

export default MapContainer
