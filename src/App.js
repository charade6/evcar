import "./App.css"
import Home from "./component/Home"
import Info from "./component/Info"
import Search from "./component/Search"
import Map from "./component/Map"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
