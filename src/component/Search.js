import { useState } from "react"
import evcarData from "../asset/evcarData.json"
// import SearchValue from "./SearchValue"

function Search() {
  const tabList = {
    maker: [
      "기아",
      "대창모터스",
      "르노삼성",
      "마이브",
      "벤츠코리아",
      "볼보자동차",
      "스텔란티스코리아",
      "쌍용자동차",
      "쎄뽀모빌리티",
      "에디슨이브이",
      "테슬라",
      "폴스타오토모티브",
      "한국GM",
      "현대",
      "BMW",
    ],
    vehicleScale: ["경형", "소형", "준중형", "중형", "준대형"],
    vehicleType: ["해치백", "SUV", "세단"],
    efficiency: [3, 4, 5, 6, 7],
    subsidy: ["~ 300", "301 ~ 400", "401 ~ 500", "501 ~ 600", "601 ~ 700"],
  }

  const [fltArr, setFltArr] = useState([])

  const detailSearch = Object.keys(tabList).map((category, index) => {
    let tab
    let ctgName
    switch (index) {
      case 0:
        tab = tabList.maker
        ctgName = "제조사"
        break
      case 1:
        tab = tabList.vehicleScale
        ctgName = "차급"
        break
      case 2:
        tab = tabList.vehicleType
        ctgName = "외형"
        break
      case 3:
        tab = tabList.efficiency
        ctgName = "전비"
        break
      case 4:
        tab = tabList.subsidy
        ctgName = "보조금"
        break
      default:
        break
    }

    return (
      <dl className="row" key={index}>
        <dt>{ctgName}</dt>
        <dd>
          <ul className="itembox">
            {tab.map((value, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setFltArr(fltArr.concat({ category, value }))
                      } else {
                        setFltArr(fltArr.filter((item) => item.value !== value))
                      }
                    }}
                  />
                  <span>{value}</span>
                </li>
              )
            })}
          </ul>
        </dd>
      </dl>
    )
  })

  const categoryCnt = {
    maker: [],
    vehicleScale: [],
    vehicleType: [],
    efficiency: [],
    subsidy: [],
  }

  fltArr.forEach((e) => {
    switch (e.category) {
      case "maker":
        categoryCnt.maker.push(
          ...evcarData.carList.filter((el) => el.maker === e.value)
        )
        break
      case "vehicleScale":
        categoryCnt.vehicleScale.push(
          ...evcarData.carList.filter((el) => el.vehicleScale === e.value)
        )
        break
      case "vehicleType":
        categoryCnt.vehicleType.push(
          ...evcarData.carList.filter((el) => el.vehicleType === e.value)
        )
        break
      case "efficiency":
        categoryCnt.efficiency.push(
          ...evcarData.carList.filter((el) =>
            el.efficiency.toString().indexOf(e.value, 0) ? false : true
          )
        )
        break
      case "subsidy":
        categoryCnt.subsidy.push(
          ...evcarData.carList.filter(
            (el) =>
              el.subsidy <= e.value.slice(-3) &&
              el.subsidy > e.value.slice(-3) - 100
          )
        )
        break

      default:
        break
    }
  })
  let updateList = [...evcarData.carList]

  if (categoryCnt.maker.length) {
    updateList = updateList.filter((e) => categoryCnt.maker.includes(e))
  }
  if (categoryCnt.vehicleScale.length) {
    updateList = updateList.filter((e) => categoryCnt.vehicleScale.includes(e))
  }
  if (categoryCnt.vehicleType.length) {
    updateList = updateList.filter((e) => categoryCnt.vehicleType.includes(e))
  }
  if (categoryCnt.efficiency.length) {
    updateList = updateList.filter((e) => categoryCnt.efficiency.includes(e))
  }
  if (categoryCnt.subsidy.length) {
    updateList = updateList.filter((e) => categoryCnt.subsidy.includes(e))
  }

  return (
    <div className="sub-page">
      <div className="banner ban2" />
      <div className="main-content">
        <div className="cont-inner">
          <h2>전기차 검색</h2>
          <div className="search_cont">
            <div className="cont_detailsearch">{detailSearch}</div>

            <div className="cont_carList">
              <ul>
                {updateList.map((e, index) => {
                  return (
                    <li className="items" key={index}>
                      <div className="item-box">
                        <img src={e.img} alt={e.name} />

                        <div className="item-detail">
                          <p>
                            {e.maker}
                            &nbsp;&nbsp;
                            {e.name}
                          </p>
                          <div className="spec">
                            <span>
                              {e.vehicleScale}/{e.vehicleType}
                            </span>
                            <span>{e.people}인승</span>
                            <span>최고속도 {e.distance}km/h</span>
                            <span>
                              (상온) {e.mile_roomtmp}km (저온)
                              {e.mile_coldtmp}km
                            </span>
                            <span>복합전비 {e.efficiency}</span>
                            <span>
                              {e.battery_type}({e.capacity}kWh)
                            </span>
                            <br />
                            <span>제조사번호 {e.tel}</span>
                          </div>
                        </div>
                        <p>
                          보조금
                          <br />
                          {e.subsidy} 만원
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
