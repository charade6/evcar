import evcarData from "../assets/evcarData.json"

function SearchValue({ search }) {
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
      case "제조사":
        categoryFlt.maker.push(...carData.filter((el) => el.maker === e.value))
        break
      case "차급":
        categoryFlt.vehicleScale.push(
          ...carData.filter((el) => el.vehicleScale === e.value)
        )
        break
      case "외형":
        categoryFlt.vehicleType.push(
          ...carData.filter((el) => el.vehicleType === e.value)
        )
        break
      case "전비":
        categoryFlt.efficiency.push(
          ...carData.filter((el) =>
            el.efficiency.toString().indexOf(e.value, 0) ? false : true
          )
        )
        break
      case "보조금":
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

  return (
    <>
      <p>검색결과 : {resultList.length}</p>
      <ul>
        {resultList.length ? (
          resultList.map((e, index) => {
            return (
              <li className="items" key={index}>
                <div className="item-box">
                  <a href={e.link} target="_blank" rel="noopener noreferrer">
                    <img src={e.img} alt={e.name} />
                  </a>

                  <div className="item-detail">
                    <a href={e.link} target="_blank" rel="noopener noreferrer">
                      {e.maker}
                      &nbsp;&nbsp;
                      {e.name}
                    </a>
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
    </>
  )
}

export default SearchValue
