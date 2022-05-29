import { Link } from "react-router-dom"
import "./info.css";
import React from "react";

function Info3() {
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
        <h2 className="subtitle">충전속도에 따른 분류</h2>
          <div className="info3-1">
            <div className="left-cont3-1">
              <dl>
                <dt>급속 충전기</dt>
                <dd>완전방전상태에서 80%충전까지 30분이 소요됨</dd>
                <dd>주로 고속도로 휴게소, 공공기관 등 외부장소에 설치 됨</dd>
                <dd>충전기는 고용량의 전력을 공급하여야 하므로 50kW급이 주로 설치됨</dd>
                <dd>사용요금은 100km 당 2,700원 정도임</dd>
              </dl>
            </div>
            <div className="right-cont3-1">
              <dl>
                <dt>완속 충전기(개인용완속충전기 기준) </dt>
                <dd>완전방전에서 완전충전까지 4~5시간이 소요됨</dd>
                <dd>주로 주택이나 아파트에 설치됨</dd>
                <dd>배터리 용량은 약 6~7kW 전력용량을 가진 충전기가 주로 설치됨</dd>
                <dd>전기요금은 100km당, 1,100원 정도임</dd>
              </dl>
            </div>
          </div>
          <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>급속 충전기</th>
              <th>완속 충전기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>공급용량</td>
              <td>50kW</td>
              <td>3~7kW</td>
            </tr>
            <tr>
              <td>충전시간</td>
              <td>15~30분</td>
              <td>4~5시간</td>
            </tr>
          </tbody>
        </table>
        <h2 className="subtitle">설치유형에 따른 분류</h2>
        <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>벽부형 충전기</th>
            <th>스탠드형 충전기</th>
            <th>이동형 충전기</th>
          </tr>
			  </thead>
			  <tbody>
          <tr>
            <td>용량</td>
            <td>3~7kW</td>
            <td>3~7kW</td>
            <td>3kW(Max)</td>
          </tr>
          <tr>
            <td>충전시간</td>
            <td>4~6시간</td>
            <td>4~6시간</td>
            <td>6~9시간</td>
          </tr>
          <tr>
            <td>특징</td>
            <td colspan="2">
              <dl>
                <dd>- 분전함, 기초패드 설치</dd>
                <dd>- U형볼라드, 차량스토퍼, 차선도색(설치 또는 미설치)</dd>
                <dd>- 충전기 위치가 외부에 설치되어 눈, 비에 노출될 경우만 케노피 설치</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dd>- 220V 콘센트에 간단한 식별장치 부착하여 충전</dd>
                <dd>- 태그가 부착된 다른 건물에서도 충전 가능</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td>사진</td>
            <td><img alt="벽부형 충전기 이미지" src="/infoimg/charge1.jpg" width="100px"/></td>
            <td><img alt="벽부형 충전기 이미지" src="/infoimg/charge2.jpg" width="150px"/></td>
            <td><img alt="벽부형 충전기 이미지" src="/infoimg/charge3.jpg" width="120px"/>
            <img alt="벽부형 충전기 이미지" src="/infoimg/charge4.jpg" width="120px"/></td>
          </tr>
        </tbody>
        </table>
        <h2 className="subtitle">전기차 차종별 충전방식</h2>
        <table>
          <thead>
          <tr>
            <th rowspan="2">구분</th>
            <th rowspan="2">차종</th>
            <th colspan="2">충전방식</th>
          </tr>
          <tr>
            <td>급속</td>
            <td>완속</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan='2'>현대기아차</td>
            <td>블루온, 레이, 쏘울, 아이오닉</td>
            <td>DC차데모(10pin)</td>
            <td rowspan='2'>AC 단상(5pin)</td>
          </tr>
          <tr>
            <td>아이오닉, 코나, 니로, 쏘울</td>
            <td>DC콤보 7핀(급속)</td>
          </tr>
          <tr>
            <td rowspan='2'>르노삼성</td>
            <td>ZOE</td> 
            <td>DC콤보(7pin)</td>
            <td>AC 단상(5pin)</td>
          </tr>
          <tr>
            <td>SM3 ZE</td>
            <td>AC3상(7pin)</td>
            <td>AC 단상(7pin)</td>
          </tr>
          
          <tr>
            <td>한국GM</td>
            <td>스파크, 볼트</td>
            <td>DC콤보(7pin)</td>
            <td>AC 단상(5pin)</td>
          </tr>
          <tr>
            <td>BMW</td>
            <td>i3</td>
            <td>DC콤보(7pin)</td>
            <td>AC 단상(5pin)</td>
          </tr>
          <tr>
            <td>닛산</td>
            <td>Leaf</td>
            <td>DC차데모(10pin)</td>
            <td>AC 단상(5pin)</td>
          </tr>
        </tbody>
        </table>
        <h2 className="subtitle">내연기관차 유류비와 전기차 충전요금 비교</h2>
        <table>
        <thead>
            <tr>
                <th rowspan="3">구분</th>
                <th rowspan="3">휘발유차<br/>(아반떼1.6)</th>
                <th rowspan="3">경유차<br/>(아반떼1.6)</th>
                <th colspan="3">전기차(아이오닉)</th>					
            </tr>
            <tr>
              <td rowspan="2">완 속<br/>(개인용)</td>
              <td colspan="2">급 속</td>
            </tr>
            <tr>
              <td>인하 전<br/>('16년)</td>
              <td >인하 후<br/>('21년)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>연비</td>
                <td>13.1km/L</td>
                <td>17.7km/L</td>
                <td>6.3km/kWh</td>
                <td>6.3km/kWh</td>
                <td>6.3km/kWh</td>
            </tr>
            <tr>
              <td>연료비</td>
                <td>1,499.65원/L</td>
                <td>1,292.58원/L</td>
                <td>200원/kWh</td>
                <td>313.1원/kWh</td>
                <td>292.9원/kWh</td>
            </tr>
            <tr>
              <td>100km당 연료비</td>
                <td>11,448원</td>
                <td>7,302원</td>
                <td>3,175원</td>
                <td>4,970원</td>
                <td>4,650원</td>
            </tr>
            <tr>
                <td>연간 연료비*</td>
                <td>157만원</td>
                <td>100만원</td>
                <td>44만원</td>
                <td>68만원</td>
                <td>63.8만원</td>
            </tr>
            </tbody>
        </table>
        <p>※ 유류비는 '17.1.6 전국 평균가격 적용</p>
        <p>* 연간 13,724km 주행 기준('14, 교통안전공단 승용차 평균주행거리 적용)</p>
        </div>
      </div>
    </div>
  )
}

export default Info3