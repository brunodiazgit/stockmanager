export const testing = (req, res) => {
    return res.status(200).json({ status: "success", message: "probandiumh" })
}

// HOW TO CREATE A PRODUCT

export const createProduct = async (req, res, pool) => {
    const { productname, category, quantity, description } = req.body

    try {
        if (!productname || !category) {
            return res.status(400).json({
                status: "error",
                message: "You must fill in the required fields"
            })
        }

        const query = `INSERT INTO PRODUCT(product_name, category, quantity, description, created_at, updated_at)
                        VALUES($1, $2, $3, $4, NOW(), NOW()) RETURNING *`

        const newProduct = await pool.query(query, [productname, category, quantity, description])

        return res.status(201).json({
            status: "success",
            message: "A new product has been created ! ! !",
            product: newProduct.rows[0]
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "internal server error ! ! !",
            error: error.message
        })
    }
}

// HOW TO GET ALL PRODUCTS

export const getProducts = async (req, res, pool) => {
    try {
        const query = `SELECT * FROM PRODUCT`

        const products = await pool.query(query)

        return res.status(200).json({
            status: "success",
            products: products.rows
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "internal server error ! ! !",
            error: error.message
        })
    }
}

//HOW TO MODIFY A PRODUCT

export const updateProduct = async (req, res, pool) => {
    const { productname, category, quantity, description } = req.body
    const id = req.params.id

    try {
        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "The item ID is required"
            })
        }

        const query = `UPDATE PRODUCT SET
                        product_name = COALESCE($1, product_name),
                        category = COALESCE($2, category),
                        quantity = COALESCE($3::INTEGER, quantity),
                        description = COALESCE($4, description),
                        updated_at = DATE_TRUNC('second', NOW())
                        WHERE id = $5 
                        RETURNING *
                        `

        const updatedProduct = await pool.query(query, [productname, category, quantity, description, id])

        if (!updatedProduct.rowCount === 0) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            })
        }

        return res.status(200).json({
            status: "success",
            message: "The product has been updated ! ! !",
            product: updatedProduct.rows[0]
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "internal server error ! ! !",
            error: error.message
        })
    }
}

// HOW TO DELETE A PRODUCT

export const deleteProduct = () => {
    
} 


