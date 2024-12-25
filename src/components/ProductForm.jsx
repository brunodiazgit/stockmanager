/* eslint-disable react/prop-types */
import { useLanguage } from "../context/LanguageProvider"

function ProductForm({handleSubmit, handleValues, formValues}) {
    const { language } = useLanguage()

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  items-start md:items-center gap-3 p-10  dark:text-blue-500">
            <div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="productname">{language === "es" ? "Nombre de producto" : "Product Name"}</label>
                    <input type="text" name="productname" id="productname" className="p-1 w-60 h-10 md:h-12 md:w-64 border-2 border-black rounded" onChange={handleValues} value={formValues.productname} />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <label htmlFor="category">{language === "es" ? "Categoría" : "Category"}</label>
                    <input type="text" name="category" id="category" className="p-1 w-60 h-10 md:h-12 md:w-64 border-2 border-black rounded" onChange={handleValues} value={formValues.category} />
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-col">
                    <label htmlFor="quantity">{language === "es" ? "Cantidad" : "Quantity"}</label>
                    <input type="number" name="quantity" id="quantity" className="p-1 w-12 h-10  border-2 border-black rounded" onChange={handleValues} value={formValues.quantity} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description">{language === "es" ? "Descripción" : "Description"}</label>
                <textarea name="description" id="description" rows={3} className="p-1 w-60 md:h-24 md:w-64 border-2 border-black rounded" onChange={handleValues} value={formValues.description}></textarea>
            </div>

            <button className=" mt-3 h-12 w-32 bg-blue-600 flex justify-center items-center rounded-sm text-white" type="submit">{language === "es" ? "Crear Producto" : "Create Product"}</button>
        </form>
    )
}

export default ProductForm