let http = require('http')
let fs = require('fs')
let routes = require('./routes')
let server= http.createServer(routes.reqres)
server.listen(8000)

