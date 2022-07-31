const server = require('pushstate-server')

server.start({
  port: 4008,
  directory: './dist'
})
