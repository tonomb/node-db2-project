const express = require('express')

const router = express()

router.get('/', (req, res) =>{
  res.status(200).json({router: 'routing api/cars'})
})

module.exports = router