const mongoose = require("mongoose")
const validator = require('validator')

const url = 'mongodb://root:your_own_password@127.0.0.1:27017/task-manager-api?authSource=admin'
mongoose.connect(url).catch((err) => console.log(err))


// trim: remove leading and trailing whitespace from a string"
const User = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        default: 'anonymous',
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Wrong Email Format')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must greater than 0!')
            }
        }
    }
})

const me = new User({
    name: ' YB2    ',
    email: '   zhang@gmail.com'
})

me.save().then(console.log(me)).catch((error) => {
    console.log('Error ', error)
})

