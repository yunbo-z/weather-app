const express = require('express')
const path = require('path')//path is the core module in nodejs so we don't need to install it
const hbs = require('hbs')

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
//static: the assets are static
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
// app.get('/about', (req, res) => {
//     res.send('<h1>about page</h1>')
// })
app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
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
    res.send({
        forecast:'for',
        location:'paris'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})