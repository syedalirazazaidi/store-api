const express = require('express')
const colors = require('colors')
require('dotenv').config()
require('express-async-errors')

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

const port = process.env.PORT || 3000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, () => console.log(`Server started on port ${port}`))
