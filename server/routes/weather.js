const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

router.get('/', (req, res) => {
  return request
    .get(
      'https://archive-api.open-meteo.com/v1/era5?latitude=52.52&longitude=13.41&start_date=2022-01-01&end_date=2022-07-13&hourly=temperature_2m'
    )
    .then((response) => {
      console.log(response.body)
      res.json(response.body)
    })
})

module.exports = router
