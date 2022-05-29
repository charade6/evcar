import { useState } from "react"
import evcarData from "../asset/evcarData.json"

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
  const tabLength = Object.keys(tabList)
  const [fltArr, setFltArr] = useState([])
  // const [fltVal, setFltVal] = useState([])

  // console.log(fltVal)
  if (!fltArr.length) {
    console.log("데이터없음")
  } else {
    console.log(fltArr)
  }
  // console.log(evcarData.carList.filter((e) => e.efficiency === fltArr[0].el))
  console.log(
    fltArr.map((e) => {
      return evcarData.carList.filter((el) => el.maker === e.value)
    })
  )
  const b = []
  console.log(
    b.concat(
      ...fltArr.map((e) => {
        return evcarData.carList.filter((el) => {
          switch (e.category) {
            case "maker":
              return el.maker === e.value
            case "vehicleScale":
              return el.vehicleScale === e.value
            case "vehicleType":
              return el.vehicleType === e.value
            case "efficiency":
              return e.value <= el.efficiency && el.efficiency < e.value + 1
            case "subsidy":
              return (
                parseInt(e.value.slice(-3)) - 100 < el.subsidy &&
                el.subsidy <= parseInt(e.value.slice(-3))
              )
            default:
              break
          }
        })
      })
    )
  )

  return (
    <div className="sub-page">
      <div className="banner ban2" />
      <div className="main-content">
        <div className="cont-inner">
          <h2>Search</h2>
          <div className="search_cont">
            <div className="cont_detailsearch">
              {tabLength.map((category, index) => {
                let tab
                let catName
                switch (index) {
                  case 0:
                    tab = tabList.maker
                    catName = "제조사"
                    break
                  case 1:
                    tab = tabList.vehicleScale
                    catName = "차급"
                    break
                  case 2:
                    tab = tabList.vehicleType
                    catName = "외형"
                    break
                  case 3:
                    tab = tabList.efficiency
                    catName = "전비"
                    break
                  case 4:
                    tab = tabList.subsidy
                    catName = "보조금"
                    break
                  default:
                    break
                }

                return (
                  <dl className="row" key={index}>
                    <dt>{catName}</dt>
                    <dd>
                      <ul className="itembox">
                        {tab.map((value, i) => {
                          return (
                            <li key={i}>
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  if (e.currentTarget.checked) {
                                    setFltArr(
                                      fltArr.concat({ category, value })
                                    )
                                  } else {
                                    setFltArr(
                                      fltArr.filter(
                                        (item) => item.value !== value
                                      )
                                    )
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
              })}
            </div>

            <div className="cont_carList">
              <ul>
                {!fltArr.length ? (
                  <div>업음</div>
                ) : (
                  evcarData.carList
                    .filter((e) => {
                      switch (fltArr[0].category) {
                        case "maker":
                          return e.maker === fltArr[0].value
                        case "vehicleScale":
                          return e.vehicleScale === fltArr[0].value
                        case "vehicleType":
                          return e.vehicleType === fltArr[0].value
                        case "efficiency":
                          return (
                            fltArr[0].value <= e.efficiency &&
                            e.efficiency < fltArr[0].value + 1
                          )
                        case "subsidy":
                          return (
                            parseInt(fltArr[0].value.slice(-3)) - 100 <
                              e.subsidy &&
                            e.subsidy <= parseInt(fltArr[0].value.slice(-3))
                          )
                        default:
                          break
                      }
                    })
                    .map((list, index) => {
                      return (
                        <li className="items" key={index}>
                          <div className="item-box">
                            <img src={list.img} alt={list.name} />

                            <div className="item-detail">
                              <p>
                                {list.maker}
                                &nbsp;&nbsp;
                                {list.name}
                              </p>
                              <div className="spec">
                                <span>
                                  {list.vehicleScale}/{list.vehicleType}
                                </span>
                                <span>{list.people}인승</span>
                                <span>최고속도 {list.distance}km/h</span>
                                <span>
                                  (상온) {list.mile_roomtmp}km (저온)
                                  {list.mile_coldtmp}km
                                </span>
                                <span>복합전비 {list.efficiency}</span>
                                <span>
                                  {list.battery_type}({list.capacity}kWh)
                                </span>
                                <br />
                                <span>제조사번호 {list.tel}</span>
                              </div>
                            </div>
                            <p>
                              보조금
                              <br />
                              {list.subsidy} 만원
                            </p>
                          </div>
                        </li>
                      )
                    })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
