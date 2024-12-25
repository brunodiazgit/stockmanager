/* eslint-disable react/prop-types */
import { useLanguage } from "../context/LanguageProvider"

function ProductDetailContent({ product, setModal, deleteProduct, setProduct, handleSaveChanges, modal }) {
    const { language } = useLanguage()

    return (
        <div className="flex m-3 dark:text-blue-500">
            <div className="flex flex-col justify-center items-start gap-3 m-10 text-2xl">
                <p><strong>{language === "es" ? "Producto: " : "Product: "}</strong> {product.product_name}</p>
                <p><strong>{language === "es" ? "Categoría: " : "Category: "}</strong> {product.category}</p>
                <p><strong>{language === "es" ? "Cantidad: " : "Quantity: "}</strong> {product.quantity}</p>
                <p><strong>{language === "es" ? "Descripción: " : "Description: "}</strong> {product.description}</p>
            </div>

            <div className="flex flex-col gap-3 m-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setModal(true)}>{language === "es" ? "Editar" : "Edit"}</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => deleteProduct()}>{language === "es" ? "Eliminar" : "Delete"}</button>
            </div>

            {/* Modal */}

            {modal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 lg:w-96">
                        <h2 className="text-lg font-bold mb-4">{language === "es" ? "Editar" : "Edit Product"}</h2>
                        <label className="block mb-2">
                        {language === "es" ? "Producto:" : "Product:"}
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
                        {language === "es" ? "Categoría:" : "Category:"}
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
                        {language === "es" ? "Cantidad:" : "Quantity:"}
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
                        {language === "es" ? "Descripción:" : "Description:"}
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
                                {language === "es" ? "Cancelar" : "Cancel"}
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={handleSaveChanges}
                            >
                                {language === "es" ? "Guardar" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetailContent