const mongoose = require("mongoose")

const Schema = mongoose.Schema

const nurseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Nurse", nurseSchema)
