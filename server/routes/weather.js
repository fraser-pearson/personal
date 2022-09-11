const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

router.get('/', (req, res) => {
  return request
    .get(
      'https://api.open-meteo.com/v1/forecast?latitude=-41.2865&longitude=174.7762&daily=precipitation_sum,rain_sum,weathercode&timezone=NZ'
    )
    .then((result) => {
      res.json(result.body)
    })
})

module.exports = router
