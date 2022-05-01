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
            <li>
              <Link to="/info">전기차 소개 및 지원</Link>
            </li>
            <li>
              <Link to="/search">전기차 검색</Link>
            </li>
            <li>
              <Link to="/map">충전소 찾기</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
