const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authorSchema = new Schema({
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String
    }
})

const receiverSchema = new Schema({
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const recommendationSchema = new Schema({
    author: authorSchema,
    receiver: receiverSchema,
    date: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    description: {
        type: String,
        required: true
    }
})

const recommendationsSchema = new Schema({
    given: [recommendationSchema],
    received: [recommendationSchema]
})

module.exports = mongoose.model("Recommendations", recommendationsSchema, "Recommendations")
