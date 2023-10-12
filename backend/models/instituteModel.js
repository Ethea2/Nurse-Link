const mongoose = require("mongoose")

const Schema = mongoose.Schema

const instituteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
        ref: "User",
    },
    instituteName: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    profilePicture: {
        type: String,
    }, 
    bannerPicture: {
        type: String,
    }, 
    about: {
        type: String,
    },
    socials: {
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    instituteWebsite: {
        type: String
    },
    employee: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    jobHiringId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "JobHiring",
    },
    notification: [{
        status: {
            type: String,
            enum: ['unread', 'read'],
            dafault: 'unread',
            require: true
        },
        description: {
            type: String,
            require: true
        },
        userReference: {
            type: [mongoose.Schema.Types.ObjectId]
        }
    }],
})

module.exports = mongoose.model("Institute", instituteSchema, "Institute")
