import NavBar from "./components/NavBar"
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import Product from "./components/Product"
import DashBoard from "./components/Dashboard"
import Stock from "./components/Stock"
import ProductDetail from "./components/ProductDetail"
import Settings from "./components/Settings"
import NavBar2 from "./components/NavBar2"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex">
        <div className="flex flex-row">
          <NavBar2 />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/create" element={<Product />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
