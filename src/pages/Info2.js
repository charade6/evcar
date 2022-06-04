import "../style/info.css"
import info2Img1 from "../assets/infoimg/info2img1.jpg"
import info2Img2 from "../assets/infoimg/info2img2.jpg"
import info2Img3 from "../assets/infoimg/info2img3.jpg"
import info2Img4 from "../assets/infoimg/info2img4.jpg"
import info2Img5 from "../assets/infoimg/info2img5.jpg"
import info2Img6 from "../assets/infoimg/info2img6.jpg"
import info2Img7 from "../assets/infoimg/info2img7.jpg"
import { Link } from "react-router-dom"
import React, { useState } from "react"

export default function Info2() {
  const [activeIndex, setActiveIndex] = useState(0)

  const tabContArr = [
    {
      tabTitle: (
        <button className="tab1" onClick={() => tabClickHandler(0)}>
          환경적 측면
        </button>
      ),
      tabCont: (
        <div>
          <h2 className="subtitle">자동차로 인한 대기오염 해결</h2>
          <ul className="info2-1">
            <li>
              수도권에서 발생하는 미세먼지의 30%이상이 경유차 등 자동차에서
              배출되는 오염물질로서, 자동차로 인한 대기오염이 심각해지고
              있습니다.
            </li>
            <li>
              또한, 아파트 주변도로, 지하주차장 등 국민 생활에 밀접한 곳에서
              발생하는 자동차 배출가스는 인체 위해도가 매우 높아 '12년에
              국제암연구소에서 1군 발암물질로 지정하기도 하였습니다.
            </li>
            <li>
              내연기관차를 친환경차인 전기차로 대체해나갈 경우 자동차로 인한
              대기오염 문제를 획기적으로 해결할 수 있습니다.
            </li>
            <li>
              자동차에서 배출되는 유해물질은 일산화탄소(CO), 탄화수소(HC),
              질소산화물(NOx), 미세먼지(PM)등이 있습니다.
            </li>
          </ul>
          <img className="img2-1" src={info2Img1} alt="img" />
          <h2 className="subtitle">자동차로 인한 기후변화</h2>
          <ul className="info2-1">
            <li>
              전기차 사용량이 증가하면 내연기관차로 인해 발생되는 대기오염물질,
              온실가스 등 배출량이 감소되며 전기차 1대 보급으로 연간 CO2 2톤을
              감축하는 효과를 가져옵니다.
            </li>
          </ul>
          <img className="img2-2" src={info2Img2} alt="img3" />
          <img className="img2-3" src={info2Img3} alt="img4" />
        </div>
      ),
    },
    {
      tabTitle: (
        <button className="tab2" onClick={() => tabClickHandler(1)}>
          경제적 측면
        </button>
      ),
      tabCont: (
        <div>
          <h2 className="subtitle">전기차 연료비(개인용완속충전기 기준)</h2>
          <ul className="info2-1">
            <li>
              시간대별 전기차 평균 충전요금은 경부하 66원/kWh, 중간부하
              108원/kWh, 최대부하 153원/kWh 입니다.
            </li>
            <li>
              아이오닉(연비 6.3km/kWh) 기준으로 100km당 2,759원 비용이
              발생합니다.
            </li>
          </ul>
          <img className="img2-1" src={info2Img4} alt="img" />
          <h2 className="subtitle">
            전기차 운행 시 연료비 절감효과(개인용완송충전기 기준)
          </h2>
          <img className="img2-1" src={info2Img5} alt="img" />
        </div>
      ),
    },
    {
      tabTitle: (
        <button className="tab3" onClick={() => tabClickHandler(2)}>
          산업적 측면
        </button>
      ),
      tabCont: (
        <div>
          <h2 className="subtitle">전기차와 V2G</h2>
          <ul className="info2-1">
            <li>
              V2G는 Vehicle To Grid로, 자동차에서 전력망으로 전기를 이동하는
              것을 의미하는데, 즉, V2G란 전기차에 저장한 배터리를
              에너지저장장치(ESS)처럼 활용해 전력계통에 연계하는 기술을
              의미합니다.
            </li>
            <li>
              이산화탄소의 배출을 줄이면서 친환경적이고 경제성을 갖추어
              지속가능한 성장을 이어갈 수 있는 산업모델로 정착하게되고 향후
              V2G사업자와 수요관리사업자 등, V2G를 활용하여 피크절감효과뿐
              아니라 선진국과 같은 전력계통 주파수 조정, 신재생에너지 발판 등
              다양한 전력보조서비스와 부가가치를 창출할 것입니다.
            </li>
          </ul>
          <img className="img2-1" src={info2Img6} alt="img" />
          <img className="img2-1" src={info2Img7} alt="img" />
        </div>
      ),
    },
  ]

  const tabClickHandler = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="sub-page">
      <div className="banner ban1" />
      <div className="main-content infoBox">
        <div className="tab-menu">
          <h2>전기차 소개 및 지원</h2>
          <ul>
            <li>
              <Link to="/info">전기차 개요</Link>
            </li>
            <li>
              <Link to="/info2">보급 목적</Link>
            </li>
            <li>
              <Link to="/info3">전기차 충전 정보</Link>
            </li>
            <li>
              <Link to="/info4">보조금 지원</Link>
            </li>
          </ul>
        </div>
        <div className="info-cont">
          <h1>보급 목적</h1>
          <ul className="tabMenu-box">
            {tabContArr.map((section, index) => {
              return section.tabTitle
            })}
          </ul>
          <div>{tabContArr[activeIndex].tabCont}</div>
        </div>
      </div>
    </div>
  )
}
