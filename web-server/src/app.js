const express = require('express')
const path = require('path')//path is the core module in nodejs so we don't need to install it
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

//define paths for Express config
// __filename and __dirname are used to get the filename and directory name of the currently executing file
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')//set the engine extension
app.set('views', viewPath)
hbs.registerPartials(partialsPath)//registerPartials method provides a quick way to load all partials from a specific directory

//setup static directory to serve
//app.use:customize your server
//static: the assets are static,  express.static: middleware
app.use(express.static(publicDirectoryPath))

//Routing refers to determining how an application responds to a client request to a particular endpoint
//app.METHOD(PATH, HANDLER)
//simple routes: get, post, put, delete

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Lili',
//         age:24
//     })
// })
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'lili'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Page'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'Here is the help page'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    //should give a default value of the distructive object to prevent no input error
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // console.log(req.query.address)
    // res.send({
    //     forecast:'for',
    //     location:'paris',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({//return will stop the excution, to prevent excuting the following send, so that there will not have two times response being sent 
            error: 'you must provide a search item'
        })
    }
    console.log(req.query.search)//req.query property takes the query parameter in the url
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404page', {
        errorMessage: 'cannot find',
        title: '404'
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        errorMessage: '404 page not found',
        title: '404'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})