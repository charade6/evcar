import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import KakaoMap from "../component/KakaoMap"
import loadingImg from "../assets/loading.gif"

function CSMap() {
  const [api, setApi] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy"
  const URL = `${PROXY}/B552584/EvCharger/getChargerInfo?serviceKey=gIgWSDzCeTDpTHNna3UfLVrfBmHbLPDu8IRh%2FvJuoHy5Sp1OFCc9r6uWHIqcEpCF8pWmul9zZMDQLafiKcrx3Q%3D%3D&pageNo=1&numOfRows=9999`

  const getApi = useCallback(async () => {
    const res = await axios({
      method: "get",
      url: URL,
    })
    setApi(res.data.items[0].item)
    setIsLoading(false)
  }, [URL])

  useEffect(() => {
    isLoading ? getApi() : console.log("init")
  }, [isLoading, getApi])

  return (
    <div className="sub-page">
      <div className="banner ban3" />
      <div className="main-content">
        <div className="cont-inner">
          <h1>충전소 찾기</h1>
          {isLoading ? (
            <div
              style={{
                height: "700px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={loadingImg}
                alt="loading..."
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          ) : (
            <KakaoMap maps={api} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CSMap
