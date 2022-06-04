import { useEffect, useState } from "react"

function TopButton() {
  const [ScrollY, setScrollY] = useState(0)
  const [BtnStatus, setBtnStatus] = useState(false)

  const handleScroll = () => {
    setScrollY(window.pageYOffset)
    ScrollY > 100 ? setBtnStatus(true) : setBtnStatus(false)
  }

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setScrollY(0) // ScrollY 의 값을 초기화
    setBtnStatus(false) // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <button
      className={BtnStatus ? "topBtn active" : "topBtn"}
      onClick={handleTop}
    >
      ↑
    </button>
  )
}
export default TopButton
