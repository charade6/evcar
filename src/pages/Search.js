import { useState } from "react"
import SearchValue from "../component/SearchValue"

function Search() {
  const [fltArr, setFltArr] = useState([])

  const rowList = [
    {
      rowName: "제조사",
      rowItem: [
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
    },
    {
      rowName: "차급",
      rowItem: ["경형", "소형", "준중형", "중형", "준대형"],
    },
    {
      rowName: "외형",
      rowItem: ["해치백", "SUV", "세단"],
    },
    {
      rowName: "전비",
      rowItem: [3, 4, 5, 6, 7],
    },
    {
      rowName: "보조금",
      rowItem: ["~ 300", "301 ~ 400", "401 ~ 500", "501 ~ 600", "601 ~ 700"],
    },
  ]

  const detailSearch = rowList.map((e, index) => (
    <dl className="row" key={index}>
      <dt>{e.rowName}</dt>
      <dd>
        <ul className="itembox">
          {e.rowItem.map((item) => {
            return (
              <li key={item}>
                <input
                  type="checkbox"
                  onChange={(el) => {
                    el.currentTarget.checked
                      ? setFltArr(
                          fltArr.concat({
                            category: e.rowName,
                            value: item,
                          })
                        )
                      : setFltArr(fltArr.filter((l) => l.value !== item))
                  }}
                ></input>
                <span>{item}</span>
              </li>
            )
          })}
        </ul>
      </dd>
    </dl>
  ))

  return (
    <div className="sub-page">
      <div className="banner ban2" />
      <div className="main-content">
        <div className="cont-inner">
          <h1>전기차 검색</h1>
          <div className="search_cont">
            <div className="cont_detailsearch">{detailSearch}</div>

            <div className="cont_carList">
              <SearchValue search={fltArr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
