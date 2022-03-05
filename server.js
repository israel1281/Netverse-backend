const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const SocketServer = require('./socketServer')
const { ExpressPeerServer } = require('peer')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  SocketServer(socket)
})

ExpressPeerServer(http, { path: '/' })


app.use('/api', require('./routes/userRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if(err) throw err;
  console.log('Connected to mongodb')
})

const port = process.env.PORT || 3000
http.listen(port, () => {
  console.log('Server is running on port', port)
})
