const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const http = require('http').createServer(app)

const port = process.env.PORT || 3000
http.listen(port, () => {
  console.log('Server is running on port', port)
})
