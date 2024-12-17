import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAlert } from "../context/AlertContext"
import { useNavigate } from "react-router-dom"
import ProductDetailContent from "./ProductDetailContent"

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
        <ProductDetailContent product={product} setModal={setModal} deleteProduct={deleteProduct} setProduct={setProduct} handleSaveChanges={handleSaveChanges} modal={modal}/>
    )
}

export default ProductDetail