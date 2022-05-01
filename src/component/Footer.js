import { FaGithubSquare } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h1>
          <img src="./F-logo.png" alt="F.Logo" />
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
  )
}
export default Footer
