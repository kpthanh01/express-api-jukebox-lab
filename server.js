const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const trackRouter = require('./controllers/tracks')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors({ origin: 'http://127.0.0.1:5173' }))
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/tracks', trackRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})