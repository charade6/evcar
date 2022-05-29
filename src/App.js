import "./App.css"
import Home from "./component/Home"
import Info from "./component/Info"
import Search from "./component/Search"
import Map from "./component/Map"
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
          <Route path="/search" element={<Search />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
