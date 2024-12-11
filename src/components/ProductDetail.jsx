import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAlert } from "../context/AlertContext"
import { useNavigate } from "react-router-dom"

function ProductDetail() {
    const [product, setProduct] = useState([])
    const [modal, setModal] = useState(false)
    const { id } = useParams()
    const { showAlert } = useAlert()
    const navigate = useNavigate()

    const details = async () => {
        try {
            const response = await fetch(`http://localhost:5900/api/product/${id}`)

            if (!response.ok) {
                throw new Error("Response was not ok")
            }

            const data = await response.json()
            setProduct(data.product)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        details()
    }, [id])

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:5900/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })

            if (!response.ok) {
                throw new Error('Response was not ok')
            }

            showAlert({
                title: product.id,
                text: 'Your changes have been saved !',
                icon: 'info',
                confirmButtonText: 'OK',
            })
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async () => {
        try {
            const response = await fetch(`http://localhost:5900/api/product/${id}`, {
                method: 'DELETE',
                headers: {
                    "Contenty-Type": "application/json"
                },
                body: JSON.stringify({ id: product.id })
            })
            if(!response.ok){
                throw new Error("The product cannot be deleted")
            }
            showAlert({
                title: product.id,
                text: 'The product has been deleted !',
                icon: 'success',
                confirmButtonText: 'OK',
            })
            navigate('/stock')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex m-3">
            <div className="flex flex-col justify-center items-start m-10">
                <p>Product: {product.product_name}</p>
                <p>Category: {product.category}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Description: {product.description}</p>
            </div>

            <div className="flex flex-col gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setModal(true)}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={()=> deleteProduct()}>Delete</button>
            </div>

            {/* Modal */}

            {modal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 lg:w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Product</h2>

                        <label className="block mb-2">
                            Product:
                            <input
                                type="text"
                                value={product.product_name || ""}
                                onChange={(e) =>
                                    setProduct({ ...product, product_name: e.target.value })
                                }
                                className="border p-2 rounded w-full"
                            />
                        </label>
                        <label className="block mb-2">
                            Category:
                            <input
                                type="text"
                                value={product.category || ""}
                                onChange={(e) =>
                                    setProduct({ ...product, category: e.target.value })
                                }
                                className="border p-2 rounded w-full"
                            />
                        </label>
                        <label className="block mb-2">
                            Quantity:
                            <input
                                type="number"
                                value={product.quantity || ""}
                                onChange={(e) =>
                                    setProduct({ ...product, quantity: e.target.value })
                                }
                                className="border p-2 rounded w-full"
                            />
                        </label>
                        <label className="block mb-4">
                            Description:
                            <textarea
                                value={product.description || ""}
                                onChange={(e) =>
                                    setProduct({ ...product, description: e.target.value })
                                }
                                className="border p-2 rounded w-full"
                            />
                        </label>

                        <div className="flex justify-end gap-4">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                onClick={() => setModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail