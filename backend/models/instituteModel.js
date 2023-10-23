const mongoose = require("mongoose")

const Schema = mongoose.Schema

const instituteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "User",
    },
    instituteName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
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
    phoneNumber: {
        type: String,
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
