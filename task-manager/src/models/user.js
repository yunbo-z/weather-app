const mongoose = require("mongoose")
const validator = require('validator')

//trim: remove leading and trailing whitespace"
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
    password: {
        type: String,
        required: true,
        minLength:7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error('The password cannot contain string "password')
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

module.exports = User