import { useCallback, useEffect } from "react"
import evcarData from "../asset/evcarData.json"

function SearchValue({ search, count }) {
  const carData = evcarData.carList
  let resultList = [...carData]
  const categoryFlt = {
    maker: [],
    vehicleScale: [],
    vehicleType: [],
    efficiency: [],
    subsidy: [],
  }

  search.forEach((e) => {
    switch (e.category) {
      case "maker":
        categoryFlt.maker.push(...carData.filter((el) => el.maker === e.value))
        break
      case "vehicleScale":
        categoryFlt.vehicleScale.push(
          ...carData.filter((el) => el.vehicleScale === e.value)
        )
        break
      case "vehicleType":
        categoryFlt.vehicleType.push(
          ...carData.filter((el) => el.vehicleType === e.value)
        )
        break
      case "efficiency":
        categoryFlt.efficiency.push(
          ...carData.filter((el) =>
            el.efficiency.toString().indexOf(e.value, 0) ? false : true
          )
        )
        break
      case "subsidy":
        categoryFlt.subsidy.push(
          ...carData.filter(
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

  if (categoryFlt.maker.length) {
    resultList = resultList.filter((e) => categoryFlt.maker.includes(e))
  }
  if (categoryFlt.vehicleScale.length) {
    resultList = resultList.filter((e) => categoryFlt.vehicleScale.includes(e))
  }
  if (categoryFlt.vehicleType.length) {
    resultList = resultList.filter((e) => categoryFlt.vehicleType.includes(e))
  }
  if (categoryFlt.efficiency.length) {
    resultList = resultList.filter((e) => categoryFlt.efficiency.includes(e))
  }
  if (categoryFlt.subsidy.length) {
    resultList = resultList.filter((e) => categoryFlt.subsidy.includes(e))
  }
  const setCount = useCallback(() => {
    count(resultList.length)
  }, [count, resultList.length])

  useEffect(() => {
    setCount()
  }, [setCount])

  return (
    <ul>
      {resultList.length ? (
        resultList.map((e, index) => {
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
        })
      ) : (
        <h3 className="nodata">조건에 해당하는 전기차가 없습니다.</h3>
      )}
    </ul>
  )
}

export default SearchValue
