const mongoose = require("mongoose")
const validator = require('validator')

const Tasks = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    conpleted: {
        type: Boolean,
        default: false
    }
})
module.exports = Tasks