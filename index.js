import express from "express"
import cors from "cors"
import pkg from "pg"
import productRoutes from "./db/Routes/productRoutes.js"

console.log("Starting Node app...")

const app = express()
const port = 5900

app.use(cors())
app.use(express.json())

// Connecting to the Database

const { Pool } = pkg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'stockManager',
    password: 'Santana1!',
    port: 5432
})

// Routes

app.use('/api', productRoutes(pool))

app.listen(port, ()=>{
    console.log("The server is running on port: " + port)
})
