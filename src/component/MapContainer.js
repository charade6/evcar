import { useEffect } from "react"

const { kakao } = window

const MapContainer = () => {
  useEffect(() => {
    // 카카오맵 컨테이너
    const container = document.getElementById("Map")
    const options = {
      center: new kakao.maps.LatLng(37.57002, 126.97962),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    // 내위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success)
    }
    function success(pos) {
      let latitude = pos.coords.latitude
      let longitude = pos.coords.longitude
      let moveLatLon = new kakao.maps.LatLng(latitude, longitude)
      map.setCenter(moveLatLon)
    }
    console.log(map)
    // 줌 컨트롤
    let zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)

    // 로드뷰
    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW)
  }, [])

  return <div id="Map"></div>
}

export default MapContainer
