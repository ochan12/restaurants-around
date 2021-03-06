var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var app = express()
app.use(serveStatic(path.join(__dirname, 'build')))

const cors = require('cors')
app.use(cors())
var port = process.env.PORT || 4000
app.listen(port)
console.log('server started ' + port)