import express from "express"
import { testing, createProduct, getProducts, updateProduct, deleteProduct, getProductById, getProductByCategory } from "../Controllers/productController.js"

const router = express.Router()

export default (pool)=>{
    router.get('/test', (req, res)=> testing(req, res, pool))
    router.get('/product', (req, res)=> getProducts(req, res, pool))
    router.get('/product/:id', (req, res)=> getProductById(req, res, pool))
    router.get('/product/category/:category', (req, res)=> getProductByCategory(req, res, pool))
    router.post('/product', (req, res)=> createProduct(req, res, pool))
    router.put('/product/:id', (req, res)=> updateProduct(req, res, pool))
    router.delete('/product/:id', (req,res)=> deleteProduct(req, res, pool))
    

    return router
}