import YoutubeBackground from "react-youtube-background"
import Header from "./Header"
import Footer from "./Footer"

function Home() {
  return (
    <div>
      <Header />
      <YoutubeBackground videoId="gONEwEUVr-s" className="youtube" />
      <div className="section sec1">
        <div className="sec-inner">hello</div>
      </div>
      <div className="section sec2">
        <div className="sec-inner">hello</div>
      </div>
      <div className="section sec3">
        <div className="sec-inner">hello</div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
