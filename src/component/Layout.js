import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaGithubSquare } from "react-icons/fa"
import TopButton from "./TopButton"
import "../style/App.css"
import logo from "../assets/Logo.png"
import flogo from "../assets/F-logo.png"

function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <TopButton />
      <div className="header">
        <header id="Header">
          <h1>
            <Link to="/">
              <img src={logo} alt="Logo" />
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
      {children}
      <div className="footer">
        <footer>
          <h1>
            <a
              href="https://github.com/charade6/evcar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flogo} alt="F.Logo" />
            </a>
          </h1>
          <span>Copyright &copy; Bit, All Rights Reserved.</span>
          <div className="sns-wrap">
            <a
              href="https://github.com/charade6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="fa-ico" size="24" />
              JangJiwon
            </a>
            <a
              href="https://github.com/kimdohyun97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="fa-ico" size="24" />
              KimDohyun
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Layout
