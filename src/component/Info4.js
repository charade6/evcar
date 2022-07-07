import subsidyList from "../assets/subsidyList.json"

function Info4() {
  return (
    <>
      <h1>보조금 지원</h1>
      <div>
        <h2 className="subtitle">구매보조금 지원</h2>
        <h3 className="info4-1">보조금 지원 대상</h3>
        <dl className="info4-dl">
          <dt>
            중앙행정기관을 제외한 개인, 법인, 공공기관, 지방자치단체, 지방공기업
            등
          </dt>
          <dt>
            국고보조금 외 지방보조금을 추가로 지원하는 지방자치단체는 관할
            자치단체 내 거주 등 자격조건 부여 가능
          </dt>
        </dl>
        <h3 className="info4-1">보조금 지원 차량</h3>
        <dl className="info4-dl">
          <dt>아래의 사항을 충족하는 전기자동차</dt>
          <dd>
            「자동차관리법」, 「대기환경보전법」, 「소음·진동관리법」 등
            관계법령에 따라 자동차와 관련된 각종 인증을 모두 완료한 차량
          </dd>
          <dd>
            「전기자동차 보급대상 평가에 관한 규정」에 따른 전기차의 평가항목 및
            기준에 적합한 차량
          </dd>
        </dl>
        <h3 className="info4-1">국고 보조금</h3>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>제조사</th>
              <th>차종</th>
              <th>보조금</th>
            </tr>
          </thead>
          <tbody>
            {subsidyList.data.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.type}</th>
                <th>{data.jejo}</th>
                <th>{data.name}</th>
                <th>{data.money}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Info4
