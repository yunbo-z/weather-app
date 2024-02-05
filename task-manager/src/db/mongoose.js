const mongoose = require("mongoose")

const url = 'mongodb://root:your_own_password@127.0.0.1:27017/task-manager-api?authSource=admin'
mongoose.connect(url).catch((err) => console.log(err))

const User = mongoose.model('users', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'YB',
    age: 20
})

me.save().then(console.log(me)).catch((error) => {
    console.log('Error ', error)
})

