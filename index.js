const express = require('express')
const sequelize = require('./src/db/sequelize')
const smartlogRoutes = require('./src/routes/smartlogRoutes')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/', (req, res) => {
  res.status(200).send('<h1>Docker-compose + Node + PG = TITS</h1>')
})

app.use('/smartlogs', smartlogRoutes)

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