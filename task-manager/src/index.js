const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT || 3000


//middleware
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get request is disabled!')
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const pet = {
    name : 'Hal'
}
pet.toJSON = function(){
    return pet
}

console.log(JSON.stringify(pet))