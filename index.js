const express = require('express');
const server = express()

const carsRouter = require('./api/carsRouter')

server.use(express.json())
server.use('/api/cars', carsRouter)

server.get('/', (req, res) =>{
  res.status(200).json({api: 'running', routes: 'api/cars'})
})

server.listen(4000, ()=>{
  console.log('server listening on port 4000');
})