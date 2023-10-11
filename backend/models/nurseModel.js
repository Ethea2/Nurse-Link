const mongoose = require("mongoose")

const Schema = mongoose.Schema

const nurseSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
        ref: "User",
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    specialization: {
        type: String,
    },
    credentials: {
        education: [
            {
                institutionName: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
            },
        ],
        experience: [
            {
                institutionName: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                description: {
                    type: String,
                },
            },
        ],
        organization: [
            {
                institutionName: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                description: {
                    type: String,
                },
            },
        ],
        license: [
            {
                institutionName: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                description: {
                    type: String,
                },
                image: {
                    type: String,
                },
            },
        ],
        certification: [
            {
                institutionName: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                description: {
                    type: String,
                },
                image: {
                    type: String,
                },
            },
        ],
    },
    youtube: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    about: {
        type: String,
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
        },
    },
})

module.exports = mongoose.model("Nurse", nurseSchema, "Nurse")
