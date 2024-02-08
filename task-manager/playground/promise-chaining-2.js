require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('65c246f5cf3514c2e2d2defb').then((task) => {
    console.log(task)
    return Task.countDocuments({ conpleted: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})