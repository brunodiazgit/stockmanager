import { useState } from "react"
import { useAlert } from "../context/AlertContext"
import ProductForm from "./ProductForm"

function Product() {
    const [formValues, setFormValues] = useState({
        productname: "",
        category: "",
        quantity: 0,
        description: ""
    })
    const { showAlert } = useAlert()

    const handleValues = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:5900/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productname: formValues.productname,
                    category: formValues.category,
                    quantity: formValues.quantity,
                    description: formValues.description
                })
            })

            if (!response.ok) {
                throw new Error('Error fetching data ! ! !')
            }

            setFormValues({
                productname: '',
                category: '',
                quantity: 0,
                description: ''
            })

            showAlert({
                title: "Create",
                text: 'The product has been created !',
                icon: "success",
                confirmButtonText: 'OK'

            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductForm handleSubmit={handleSubmit} handleValues={handleValues} formValues={formValues}/>
    )
}

export default Product