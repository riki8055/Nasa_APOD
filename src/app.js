require('dotenv').config();
const path = require('path')
const express = require('express')
const apod = require('./utils/apod')
const app = express()

const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'ejs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    apod("", (error, data) => {
        res.render('index', { data })
    })
})

app.get('/apod', (req, res) => {
    apod(req.query.date, (error, data) => {
        if(error) {
            return res.send({ error })
        }
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})