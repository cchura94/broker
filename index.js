var aedes = require('aedes')()
var server = require('net').createServer(aedes.handle)
var port = process.env.PORT || 1883

server.listen(port, function () {
	console.log('server listening on port', port)
})


/*
const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = process.env.PORT || 8888

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})
*/
