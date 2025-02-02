import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/connect.db'

config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const startServer = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
}

startServer()