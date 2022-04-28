import "./Header.css"

function Header() {
  return (
    <div className="header">
      <header id="Header">
        <h1>
          <img src="./Logo.png" alt="Logo" />
        </h1>
        <nav>
          <ul>
            <li>전기차 소개 및 지원</li>
            <li>전기차 검색</li>
            <li>충전소 찾기</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
