const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recommendationsSchema = new Schema({
    recommendations: {
        given: [{
            author: {
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
            },
            receiver: {
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
            },
            date: {
                type: Date,
                required: true,
                default: () => Date.now()
            },
            description: {
                type: String,
                required: true
            }
        }],
        received: [{
            receiver: {
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
            },
            author: {
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
                }
            },
            date: {
                type: Date,
                required: true,
                default: () => Date.now()
            },
            description: {
                type: String,
                required: true
            }
        }]
    }
})

module.exports = mongoose.model("Recommendations", recommendationsSchema, "Recommendations")