import { useState } from "react"
import "../style/info.css"
import Info1 from "../component/Info1"
import Info2 from "../component/Info2"
import Info3 from "../component/Info3"
import Info4 from "../component/Info4"

function Info() {
  const tab = {
    0: <Info1 />,
    1: <Info2 />,
    2: <Info3 />,
    3: <Info4 />,
  }
  const tabName = [
    "전기차 개요",
    "보급 목적",
    "전기차 충전 정보",
    "보조금 지원",
  ]
  const [activeTab, setActiveTab] = useState(0)

  console.log(activeTab)

  return (
    <div className="sub-page">
      <div className="banner ban1" />
      <div className="main-content infoBox">
        <div className="tab-menu">
          <h2>전기차 소개 및 지원</h2>
          <ul>
            {tabName.map((value, index) => {
              return (
                <li key={index} onClick={() => setActiveTab(index)}>
                  {value}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="cont-inner info">{tab[activeTab]}</div>
      </div>
    </div>
  )
}

export default Info
