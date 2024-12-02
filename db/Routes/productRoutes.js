import express from "express"
import { testing, createProduct, getProducts, updateProduct } from "../Controllers/productController.js"

const router = express.Router()

export default (pool)=>{
    router.get('/test', (req, res)=> testing(req, res, pool))
    router.get('/product', (req, res)=> getProducts(req, res, pool))
    router.post('/product', (req, res)=> createProduct(req, res, pool))
    router.put('/product/:id', (req, res)=> updateProduct(req, res, pool))

    return router
}