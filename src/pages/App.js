import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../component/Layout"
import Home from "./Home"
import Info from "./Info"
import Info2 from "./Info2"
import Info3 from "./Info3"
import Info4 from "./Info4"
import Search from "./Search"
import Map from "./CSMap"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/info2" element={<Info2 />} />
            <Route path="/info3" element={<Info3 />} />
            <Route path="/info4" element={<Info4 />} />
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
