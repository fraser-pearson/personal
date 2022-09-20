const express = require('express')

const db = require('../db/fish')

const router = express.Router()

router.get('/:id', (req, res) => {
  const Id = Number(req.params.id)
  db.getSingleFish(Id)
    .then((oneFish) => {
      res.json(oneFish)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log(req.id)
  db.deleteFish(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
