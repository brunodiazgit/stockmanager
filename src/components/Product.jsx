import { useState } from "react"
import { useAlert } from "../context/AlertContext"

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
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3 m-10">
            <div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="productname">Product Name</label>
                    <input type="text" name="productname" id="productname" className="w-60 h-10 border-2 border-black rounded" onChange={handleValues} value={formValues.productname} />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" className="w-60 h-10 border-2 border-black rounded" onChange={handleValues} value={formValues.category} />
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-col">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" id="quantity" className="w-12 h-10 border-2 border-black rounded" onChange={handleValues} value={formValues.quantity} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={3} className=" w-60 border-2 border-black rounded" onChange={handleValues} value={formValues.description}></textarea>
            </div>

            <button className=" mt-3 h-12 w-32 bg-blue-600 flex justify-center items-center rounded-sm text-white" type="submit">Create Product</button>
        </form>
    )
}

export default Product