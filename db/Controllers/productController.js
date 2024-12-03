export const testing = (req, res) => {
    return res.status(200).json({ status: "success", message: "testing endpoint" })
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

//HOW TO GET A PRODUCT BY ID 

export const getProductById = async (req, res, pool) => {
    const id = req.params.id

    try {
        const query = `SELECT * FROM PRODUCT WHERE id = $1`

        const result = await pool.query(query, [id])

        if (result.rows.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            })
        }

        return res.status(200).json({
            status: "success",
            product: result.rows[0]
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "internal server error ! ! !",
            error: error.message
        })
    }
}

// HOW TO GET PRODUCT BY CATEGORY

export const getProductByCategory = async (req, res, pool) => {
    const category = req.params.category

    if (!category) {
        return res.status(400).json({
            status: "error",
            message: "Category is required"
        })
    }

    try {
        const query = `SELECT * FROM PRODUCT WHERE category = $1`

        const result = await pool.query(query, [category])

        if (result.rows.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            })
        }

        return res.status(200).json({
            status: "success",
            products: result.rows
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

export const deleteProduct = async (req, res, pool) => {
    const id = req.params.id

    try {
        const query = `DELETE FROM PRODUCT WHERE id = $1`

        const deletedProduct = await pool.query(query, [id])

        if (deletedProduct.rowCount === 0) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            })
        }

        return res.status(200).json({
            status: "success",
            message: "A product has been successfully deleted",
            deletedProduct: deletedProduct.rows[0]
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "internal server error ! ! !",
            error: error.message
        })
    }
}