import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Stock() {
    const [products, setProducts] = useState([])

    const showProducts = async () => {
        try {
            const response = await fetch('http://localhost:5900/api/product')
            const data = await response.json()

            setProducts(data.products)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        showProducts()
    }, [])

    return (
        <div className="grid border border-blue-300 shadow-md rounded-lg divide-y divide-blue-300">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-200 font-bold  divide-x divide-blue-300 text-gray-700">
                <div className="p-3">Product</div>
                <div className="p-3">Category</div>
                <div className="p-3">Stock</div>
            </div>
            {/* Rows */}
            {products.map((item) => (
                <div key={item.id} className="grid grid-cols-3 divide-x divide-blue-300 hover:bg-gray-100 transition">
                    <Link to={`/product/${item.id}`} className="p-3">{item.product_name}</Link>
                    <div className="p-3">{item.category}</div>
                    <div className="p-3">{item.quantity}</div>
                </div>
            ))}
        </div>
    )
}

export default Stock

