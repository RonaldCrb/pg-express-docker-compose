const express = require('express')
const router = express.Router()

// Smartlogs Routes... 

// GET smartlogs index
router.get('/', (req, res, next) => {
  res.status(200).send('smartlogs index')
})

// GET smartlog by id
router.get('/:id', (req, res, next) => {
  res.status(200).send(`single smartlog # ${req.params.id}`)
})

// POST smartlog
router.post('/', (req, res, next) => {
  res.status(200).send('create smartlog')
})

// PUT smartlog by id
router.put('/:id', (req, res, next) => {
  res.status(200).send(`update smartlog # ${req.params.id}`)
})

// DELETE smartlog by id
router.delete('/:id', (req, res, next) => {
  res.status(200).send(`deleting smartlog # ${req.params.id}`)
})

module.exports = router
