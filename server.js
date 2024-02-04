const jsonServer = require('json-server2')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(8000)