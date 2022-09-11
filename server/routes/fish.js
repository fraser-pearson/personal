const express = require('express')

const db = require('../db/fish')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFish()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const fish = req.body.newFish
  db.addFish(fish)
    .then((results) => {
      res.json(results[0])
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
