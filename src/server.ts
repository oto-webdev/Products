import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/connect.db'
import categoryRoute from './routes/category.route'
import productRoute from './routes/product.route'

config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api/category", categoryRoute)
app.use("/api/products", productRoute)

const startServer = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
}

startServer()