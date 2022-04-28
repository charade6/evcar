import Header from "./component/Header"
import YoutubeBackground from "react-youtube-background"
import "./App.css"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <YoutubeBackground videoId="gONEwEUVr-s" className="youtube">
        youtube
      </YoutubeBackground>
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

export default App
