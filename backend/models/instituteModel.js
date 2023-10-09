const mongoose = require("mongoose")

const Schema = mongoose.Schema


const instituteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
        ref: 'User'
    },
    instituteName: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    jobHiringId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'JobHiring'
    }
})

module.exports = mongoose.model("Institute", instituteSchema, "Institute")
