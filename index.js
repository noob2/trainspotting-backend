const express = require('express')
const {journeys} = require('./data/journeys.json')
const port = 3000

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    next()
})

app.get('/journeys',  (req, res) => {
    console.info(new Date() + ' journeys requested')
    res.send(journeys)
})

app.listen(port)
console.log('app listening on localhost:' + port)

