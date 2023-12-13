// Import required modules for JSON-server and path processing
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const path = require('path')

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(require('helmet')())
server.use(require('cors')())

// Logging middleware that logs API calls with timestamp and method
server.use((req, res, next) => {
  const time = new Date()
  console.log(`${time.toISOString()} - ${req.method} ${req.url}`)
  next()
})

// API Routing
const router = jsonServer.router(path.join(__dirname, 'db.json'))
server.use('/api', router)

// Server start
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
