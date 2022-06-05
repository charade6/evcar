import { Link } from "react-router-dom"
import img1 from "../assets/sec1_img.png"
import img2 from "../assets/sec2_img.png"
import img3 from "../assets/sec3_img.png"

function SecDiv() {
  const content = [
    {
      id: 1,
      title: "전기자동차, 무엇이 궁금하세요?",
      description:
        "전기 자동차의 작동원리 및 구조에 대한 내용과\n충전 시 주의사항에 관한 내용,\n전기 자동차 구매 보조금에 대한 자세한 내용을 확인하실 수 있습니다.",
      btnTxt: "자세히 알아보기",
      btnLink: "/info",
      image: img1,
    },
    {
      id: 2,
      title: "어떤 차를 원하시나요?",
      description:
        "원하는 제조사와 차급, 외형, 전비, 보조금 등의 조건에 맞춰\n나에게 딱 맞는 전기자동차를 찾아보실 수 있습니다.",
      btnTxt: "전기차 찾기",
      btnLink: "/search",
      image: img2,
    },
    {
      id: 3,
      title: "전기차 충전소를 찾으시나요?",
      description:
        "전국에 있는 전기차 충전소의 위치 및\n충전소의 운영정보를 확인하실 수 있습니다.",
      btnTxt: "검색",
      btnLink: "/map",
      image: img3,
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
                <pre>{item.description}</pre>
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
