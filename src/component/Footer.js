import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h1>
          <img src="" alt="F.Logo" />
        </h1>
        <span>Copyright©Bit, All Rights Reserved.</span>
        <div className="sns-wrap">
          <a
            href="https://github.com/charade6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./github.svg" alt="J.github" />
            JangJiwon
          </a>
          <a
            href="https://github.com/kimdohyun97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./github.svg" alt="K.github" />
            KimDohyun
          </a>
        </div>
      </footer>
    </div>
  )
}
export default Footer
