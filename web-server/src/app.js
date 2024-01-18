const express = require('express')
const path = require('path')//path is the core module in nodejs so we don't need to install it


// __filename and __dirname are used to get the filename and directory name of the currently executing file
console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()
//customize your server
app.use(express.static(path.join(__dirname, '../public')))

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
app.get('/weather', (req, res) => {
    res.send({
        forecast:'for',
        location:'paris'
    })
})


app.listen(3000, () => {
    console.log('server is up on port 3000.')
})