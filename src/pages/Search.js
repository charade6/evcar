import { useState } from "react"
import SearchValue from "../component/SearchValue"

function Search() {
  const [fltArr, setFltArr] = useState([])
  const [itemCount, setItemCount] = useState(0)

  const getCountData = (count) => {
    setItemCount(count)
  }
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

  return (
    <div className="sub-page">
      <div className="banner ban2" />
      <div className="main-content">
        <div className="cont-inner">
          <h2>전기차 검색</h2>
          <div className="search_cont">
            <div className="cont_detailsearch">{detailSearch}</div>

            <div className="cont_carList">
              <p>검색결과 : {itemCount}</p>
              <SearchValue search={fltArr} count={getCountData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
