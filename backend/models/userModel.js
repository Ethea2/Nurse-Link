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
    phoneNumber: {
        type: String,
    },
    profilePicture: {
        type: String
    },
    about: {
        type: String
    },
    socials: {
        facebook: {
            type: String,
        },
        twitter: {
            type: String,
        },
        instagram: {
            type: String,
        }
    }
})

module.exports = mongoose.model("User", userSchema, "User")