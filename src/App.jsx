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

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/create" element={<Product />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
