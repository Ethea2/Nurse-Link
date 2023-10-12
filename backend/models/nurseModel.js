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
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    specialization: {
        type: String,
    },
    about: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    credentials: {
        education: [
            {
                degree: {
                    type: String,
                },
                fieldStudy: {
                    type: String,
                },
                institutionName: {
                    type: String,
                    require: true
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
                title: {
                    type: String,
                },
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
        volunteering: [
            {
                title: {
                    type: String,
                },
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
            }
        ],
        qualification: [
            {
                type: {
                    type: String,
                    enum: ['license', 'certification', 'award']
                },
                title: {
                    type: String,
                },
                institutionName: {
                    type: String,
                },
                issuanceDate: {
                    type: Date,
                },
                expirationDate: {
                    type: Date,
                },
                description: {
                    type: String,
                },
                status: {
                    type: String,
                    enum: ['verified', 'unverified', 'pending'],
                    default: 'pending'
                },
                image: {
                    type: String,
                },
            },
        ],
    },
    technicalSkill: [
        {
            type: String
        }
    ],
    youtube: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    contact: {
        phoneNumber: {
            type: String,
        },
        email: {
            type: String,
        }
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
