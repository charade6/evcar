import { Link } from "react-router-dom"
import "../style/info.css"
import React from "react"
import Empdeatiltable from "../component/Tabledata"

function Info4() {
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
          <h1>보조금 지원</h1>
          <Empdeatiltable />
        </div>
      </div>
    </div>
  )
}

export default Info4
