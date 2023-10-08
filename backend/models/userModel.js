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
        unique: true
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
            unique: true
        },
        twitter: {
            type: String,
            unique: true
        },
        instagram: {
            type: String,
            unique: true
        }
    }
})

const User = mongoose.model("User", userSchema, "User")
export default User;