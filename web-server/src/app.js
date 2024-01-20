const express = require('express')
const path = require('path')//path is the core module in nodejs so we don't need to install it

const app = express()

//define paths for Express config
// __filename and __dirname are used to get the filename and directory name of the currently executing file
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

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
        name: 'lili'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast:'for',
        location:'paris'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Here is the help page'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})