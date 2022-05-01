import { Link } from "react-router-dom"

function SecDiv() {
  const content = [
    {
      id: 1,
      title: "전기자동차, 무엇이 궁금하세요?",
      description:
        "전기 자동차의 작동원리 및 구조에 대한 내용과 충전 시 주의사항에 관한 내용, 전기 자동차 구매 보조금에 대한 자세한 내용을 확인하실 수 있습니다.",
      btnTxt: "자세히 알아보기",
      btnLink: "/info",
      image: "./sec1_img.png",
    },
    {
      id: 2,
      title: "어떤 차를 원하시나요?",
      description: "필요한 조건에 딱 맞는 전기 자동차를 찾아드립니다.",
      btnTxt: "전기차 찾기",
      btnLink: "/search",
      image: "./sec2_img.png",
    },
    {
      id: 3,
      title: "배터리가 부족한데... 어디서 채우지?",
      description: "근처에 있는 전기차 충전소를 찾아드립니다.",
      btnTxt: "검색",
      btnLink: "/map",
      image: "./sec3_img.png",
    },
  ]
  return (
    <div>
      {content.map((item) => (
        <div className="section" key={item.id}>
          <div className="sec-inner">
            <div className="box">
              <div>
                <img src={item.image} alt="sec-img" />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link to={item.btnLink}>{item.btnTxt}</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SecDiv
