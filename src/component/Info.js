import { Link } from "react-router-dom"
import "./info.css";

function Info() {
  return (
    <div className="sub-page">
      <div className="banner ban1" />
      <div className="main-content infoBox">
        <div className="tab-menu">
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
          <h2 className="subtitle">전기차의 작동원리</h2>
          <p>
          전기차는 고전압 배터리에서 전기에너지를 전기모터로 공급하여 구동력을 발생시키는 차량으로, 화석연료를 전혀 사용하지 않는 무공해 차량입니다.
          </p>
          <div className="cont1">
          <img className="img1" src="/infoimg/infoimg1.jpg" alt="img" />
          <ul className="info1-2">
            <li>내연기관차와 달리 엔진이 없이 배터리와 모터만으로 차량 구동</li>
            <li>엔진이 없으므로 대기오염물질과 온실가스를 배출하지 않음</li>
            <li>배터리 용량에 따라 주행가능 거리에 차이가 있음</li>
          </ul>
          </div>
          <h2 className="subtitle">전기차 내부구조</h2>
          <div className="cont2">
          <img className="img2" src="/infoimg/infoimg2.jpg" alt="img" />
          <div className="right">
          <dl className="right-cont1">
            <dt>외부 전력 공급을 통한 충전 필요</dt>
            <dt>급속충전기는 50kW급으로 완전방전상태에서 80%충전까지 30분이 소요되며, 완속충전기는 약 6~7kW급으로 완전방전에서 완전충전 까지4~5시간이 소요됨</dt>
          </dl>
          <dl className="right-cont2">
            <dt>내연기관 엔진없이 충전된 배터리에서 공급되는 전기에너지만을 동력원으로 전기모터를 구동</dt>
            <dt>회생제동 기능을 이용한 운행 중 배터리 충전으로 제동횟수가 많은 도심에서 에너지 효율성 극대화</dt>
            <dd>* 회생제동 : 브레이크 제동 시 모터가 발전기로 전환되어 역으로 배터리를 충전</dd>
          </dl>
          </div>
          </div>
          <h2 className="subtitle">전기차 주행상황별 작동방식</h2>
          <dl>
            <dt>
            <img className="img3" src="/infoimg/infoimg3.jpg" alt="img" />
            </dt>
            <dt>
            <img className="img4" src="/infoimg/infoimg4.jpg" alt="img" />
            </dt>
          </dl>
          <h2 className="subtitle">전기차 특징</h2>
          <dl className="info1-3">
            <dt>친환경적</dt>
            <dd>주행시 화석연료를 사용하지 않아 CO<sub>2</sub>나 NOx를 배출하지 않음</dd>
            <dd>엔진 소음이 적고, 진동이 적음</dd>
            <dt>경제적</dt>
            <dd>전기모터로만 구동할 경우 운행비용이 가장 저렴하고, 심야 전기를 이용할 경우 비용을 더 낮출 수 있음</dd>
            <dd>차량 수명이 상대적으로 김</dd>
            <dt>안전성</dt>
            <dd>사고 시 폭발의 위험성이 적음</dd>
            <dt>편의성</dt>
            <dd>심야 전력으로 자택에서 충전 가능</dd>
            <dd>기어를 바꿔줄 필요가 없어 운전 조작이 간편</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Info
