import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../component/Layout"
import Home from "./Home"
import Info from "./Info"
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
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
