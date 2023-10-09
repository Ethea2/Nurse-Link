const mongoose = require("mongoose")

const Schema = mongoose.Schema


const nurseSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
        ref: 'User'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    specialization: {
        type: String
    },
    // credentials: {
    //     education: {

    //     },
    //     experience: {

    //     },
    //     organization: {

    //     },
    //     license: {

    //     },
    //     certification: {

    //     }
    // },
    youtube: {
        type: String
    }
})

module.exports = mongoose.model("Nurse", nurseSchema, "Nurse")