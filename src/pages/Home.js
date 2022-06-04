import YoutubeBackground from "react-youtube-background"
import SecDiv from "../component/SecDiv"

function Home() {
  const videos = ["FR4gMn-jVIM", "gONEwEUVr-s", "UKttFDnKSp8"]
  let index = Math.floor(Math.random() * videos.length)

  return (
    <>
      <YoutubeBackground
        videoId={videos[index]}
        playerOptions={{
          loop: 1,
          showInfo: 0,
        }}
        className="youtube"
      >
        <dl>
          <dt>전기·친환경차의 시작</dt>
          <dd>EVCAR</dd>
        </dl>
      </YoutubeBackground>
      <SecDiv />
    </>
  )
}

export default Home
