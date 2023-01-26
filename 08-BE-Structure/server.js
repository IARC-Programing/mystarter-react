const express = require('express')

const app = express()
const config = require('./configs/app')

// Routes
app.use(require('./routes'))

// Start Server
const server = app.listen(config.port, () => {
  const host = server.address().address
  const { port } = server.address()
  console.log(`Server is running at http://${host}:${port}`)
})
