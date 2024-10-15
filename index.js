const tti = require('./lib/tti')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', async (req, res) => {
    res.render('index')
})

app.get('/tti', async (req, res) => {
    const { prompt } = req.query
    if(!prompt) return res.json({status: 500, creator: 'ItsBayy', message: "missing prompt!"})
    const response = await tti.textToImage(prompt)
    res.json({status: 200, creator: 'ItsBayy', imageUrl: response.url.result_url})
})

app.listen('8080')
