import "./App.css"
import Home from "./component/Home"
import Info from "./component/Info"
import Info2 from "./component/Info2"
import Info3 from "./component/Info3"
import Info4 from "./component/Info4"
import Search from "./component/Search"
import Map from "./component/CSMap"
import Header from "./component/Header"
import Footer from "./component/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./component/ScrollToTop"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info2" element={<Info2 />} />
          <Route path="/info3" element={<Info3 />} />
          <Route path="/info4" element={<Info4 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
