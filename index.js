const express = require('express')
const sequelize = require('./src/db/sequelize')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/', (req, res) => {
  res.status(200).send('<h1>Docker + Node = TITS</h1>')
})

app.get('/docker', (req, res) => {
  res.status(200).send('<h1>Docker node stuff is REEELLLL</h1>')
})

app.get('/tt', (req, res) => {
  res.status(200).send('<h1>Docker node stuff is REEELLLL</h1>')
})

const port = process.env.PORT || 3001

sequelize.sync()
  .then(res => {
    console.log('DATABASE STATUS: POOL CONNECTED')
    app.listen(port, () => {
      console.log(`Express server up at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log(err.message)
  })