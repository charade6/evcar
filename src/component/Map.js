import axios from "axios"
import { useState, useEffect, useCallback } from "react"
import MapContainer from "./MapContainer"

function Map() {
  const [api, setApi] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getApi = useCallback(async () => {
    const res = await axios({
      method: "get",
      url: `/B552584/EvCharger/getChargerInfo?serviceKey=gIgWSDzCeTDpTHNna3UfLVrfBmHbLPDu8IRh%2FvJuoHy5Sp1OFCc9r6uWHIqcEpCF8pWmul9zZMDQLafiKcrx3Q%3D%3D&pageNo=1&numOfRows=9999`,
    })
    setIsLoading(false)
    setApi(res.data.items[0].item)
  }, [])

  useEffect(() => {
    if (isLoading !== false) {
      getApi()
    } else {
      console.log("로딩끝")
    }
  }, [isLoading, getApi])

  return (
    <div className="sub-page">
      <div className="banner ban3" />
      <div className="main-content">
        <div className="cont-inner">
          <h2>Map</h2>
          {isLoading ? (
            <div>
              <h2>로딩중</h2>
            </div>
          ) : (
            <MapContainer props={api} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Map
