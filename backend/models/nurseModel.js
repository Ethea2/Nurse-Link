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
    birthdate: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary', 'Prefer not to Say']
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    profilePicture: {
        type: String,
    },
    bannerPicture: {
        type: String,
    },
    youtube: {
        type: String,
    },
    technicalSkill: [
        {
            type: String
        }
    ],
    contact: {
        email: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
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
    preferredLoc: {
        country: {
            type: String,
        },
        city: {
            type: String,
        }
    },
    credentials: {
        education: [
            {
                institutionName: {
                    type: String,
                    require: true
                },
                degree: {
                    type: String,
                },
                fieldStudy: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                isCurrent: {
                    type: Boolean,
                }
            },
        ],
        experience: [
            {
                institutionName: {
                    type: String,
                },
                description: {
                    type: String,
                },
                role: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                employmentType: {
                    type: String,
                    enum: ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship', 'Seasonal'],
                },
                isCurrent: {
                    type: Boolean,
                }
            },
        ],
        volunteering: [
            {
                institutionName: {
                    type: String,
                },
                role: {
                    type: String,
                },
                description: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                isCurrent: {
                    type: Boolean,
                },
            }
        ],
        license: [
            {
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
                institutionName: {
                    type: String,
                },
                issuanceDate: {
                    type: Date,
                },
                status: {
                    type: String,
                    enum: ['verified', 'unverified', 'pending'],
                    default: 'pending'
                },            
            }
        ],
        certification: [
            {
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
                institutionName: {
                    type: String,
                },
                issuanceDate: {
                    type: Date,
                },
                status: {
                    type: String,
                    enum: ['verified', 'unverified', 'pending'],
                    default: 'pending'
                },            
            }
        ],
        award: [
            {
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
                institutionName: {
                    type: String,
                },
                issuanceDate: {
                    type: Date,
                },           
            }
        ],
    },
})

module.exports = mongoose.model("Nurse", nurseSchema, "Nurse")
