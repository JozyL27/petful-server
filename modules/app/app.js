const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
// app.use(cors({ origin: CLIENT_ORIGIN }))

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

module.exports = app
