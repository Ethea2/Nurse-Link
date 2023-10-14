const mongoose = require("mongoose")

const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    userType: {
        type: String,
        enum: ['nurse', 'institute'],
        dafault: 'nurse'
    },
})

module.exports = mongoose.model("User", userSchema, "User")