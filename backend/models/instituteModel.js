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
            type: String,
        },
        twitter: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    instituteWebsite: {
        type: String,
    },
    employee: {
        type: [mongoose.Schema.Types.ObjectId],
    },
    jobHiringId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "JobHiring",
    },
    roles: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            role: {
                type: String,
                enum: ["admin", "poster", "editor"],
            },
        },
    ],
})

module.exports = mongoose.model("Institute", instituteSchema, "Institute")
