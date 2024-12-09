import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetail(){
    const [product, setProduct] = useState([])
    const { id } = useParams()

    const details = async () => {
        try {
            const response = await fetch(`http://localhost:5900/api/product/${id}`)

            if(!response.ok){
                throw new Error("Response was not ok")
            }
        
            const data = await response.json()
            setProduct(data.product)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        details()
    },[id])

    return(
        <div>
            <p>{product.product_name}</p>
        </div>
    )
}

export default ProductDetail