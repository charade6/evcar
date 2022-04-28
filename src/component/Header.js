import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <header id="Header">
        <h1>
          <Link to="/">
            <img src="./Logo.png" alt="Logo" />
          </Link>
        </h1>
        <nav>
          <ul>
            <Link to="/info">
              <li>전기차 소개 및 지원</li>
            </Link>
            <Link to="/search">
              <li>전기차 검색</li>
            </Link>
            <Link to="/map">
              <li>충전소 찾기</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
