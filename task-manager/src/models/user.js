const mongoose = require("mongoose")
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'anonymous',
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
//defines a new static method named findByCredentials on the UserSchema.
UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error ('Unable to login')
    }

    return user
}

//hash the plain text password before saving
UserSchema.pre('save', async function (next) {
    const user = this
    
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

//trim: remove leading and trailing whitespace"
const User = mongoose.model('users', UserSchema)

module.exports = User