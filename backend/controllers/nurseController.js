const passport = require("passport")
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")
const cloudinary = require("../utils/cloudinary")
const fs = require("fs")

const computeNurseProgress = (nurse) => {
    const skills = [
        nurse.technicalSkill.length,
        nurse.credentials.education.length,
        nurse.credentials.experience.length,
        nurse.credentials.volunteering.length,
        nurse.credentials.document.length,
    ]
    const maxPercentage = skills.length + 1
    let score = 1
    skills.forEach((skill) => {
        if (skill >= 1) {
            score += 1
        }
    })
    return Math.floor((score / maxPercentage) * 100)
}

const getNurses = async (req, res) => {
    try {
        const nurses = await Nurse.find({})
        res.status(200).json(nurses)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const getNurse = async (req, res) => {
    const { userId } = req.params
    try {
        const nurse = await Nurse.findOne({ userId })
        const user = await User.findById(userId)

        if (!nurse)
            return res
                .status(404)
                .json({ message: "Could not find the nurse!" })

        const score = computeNurseProgress(nurse)
        res.status(200).json({
            ...nurse._doc,
            username: user.username,
            email: user.email,
            progress: score,
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const editNurse = async (req, res) => {
    const userId = req.user._id
    try {
        const nurse = await Nurse.findOneAndUpdate(
            { userId },
            {
                ...req.body,
            }
        )
        if (!nurse)
            return res
                .status(404)
                .json({ message: "Could not find the nurse!" })

        return res.status(200).json({ message: "Successfully edited!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const editNurseProfilePicture = async (req, res) => {
    try {

        const files = req.files.img
        const userId = req.user._id
        if (userId === undefined) {
            return res.status(404).json({ message: "You are not logged in..." })
        }
        const result = await cloudinary.uploader.upload(files.tempFilePath, {
            public_id: Date.now(),
            folder: "nurse-link-images",
            width: 200,
            height: 200,
            crop: "fill",
            withcredentials: false,
            gravity: "face"
        })

        fs.unlink(files.tempFilePath, (err) => {
            if (err) {
                console.error("Error deleting the temporary file:", err)
            } else {
                console.log("Temporary file deleted.")
            }
        })

        const nurse = await Nurse.findOneAndUpdate(
            { userId: userId },
            {
                profilePicture: result.secure_url,
            }
        )

        if (!nurse) {
            return res.status(404).json({ message: "this user does not exist" })
        }
        res.status(200).json({
            message: "The profile picture has been successfully changed!",
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error!" })
    }
}

const editNurseBanner = async (req, res) => {
    try {

        const files = req.files.img
        const userId = req.user._id
        if (userId === undefined) {
            return res.status(404).json({ message: "You are not logged in..." })
        }
        const result = await cloudinary.uploader.upload(files.tempFilePath, {
            public_id: Date.now(),
            folder: "nurse-link-images",
            width: 1920,
            height: 1080,
            crop: "fill",
            withcredentials: false,
        })

        fs.unlink(files.tempFilePath, (err) => {
            if (err) {
                console.error("Error deleting the temporary file:", err)
            } else {
                console.log("Temporary file deleted.")
            }
        })

        const nurse = await Nurse.findOneAndUpdate(
            { userId: userId },
            {
                bannerPicture: result.secure_url,
            }
        )

        if (!nurse) {
            return res.status(404).json({ message: "this user does not exist" })
        }
        res.status(200).json({
            message: "The profile picture has been successfully changed!",
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error!" })
    }
}

const deleteNurse = async (req, res) => {
    const { userId } = req.params
    try {
        const nurse = await Nurse.findOneAndDelete({ userId })
        const user = await User.findOneAndDelete({ _id: userId })
        if (!nurse)
            return res.status(404).json({ message: "Could not find nurse!" })

        if (!user)
            return res.status(404).json({ message: "Could not find user!" })

        return res
            .status(200)
            .json({ message: "Nurse account has been deleted!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const addDocument = async (req, res) => {
    // console.log("log")
    // console.log("files")
    // console.log(req.files)
    // console.log("body")
    // console.log( req.body)
    // console.log("user")
    // console.log(req.user)
    // console.log("params")
    // console.log(req.params)
    // console.log("end of log")
    console.log("you are currently in add document")
    const documentFile = req.files.document
    const documentName = req.body.documentName
    const documentType = req.body.documentType
    const documentIssuer = req.body.issuer
    const documentIssueDate = req.body.issueDate
    const userId = req.user._id
    console.log("logging all the variables")
    console.log(documentFile, documentName, documentType, documentIssuer, documentIssueDate, userId)
    console.log("end of log")

    const result = await cloudinary.uploader.upload(documentFile.tempFilePath, {
        public_id: Date.now(),
        folder: "nurse-link-pdfs",
        withcredentials: false,
    })
    fs.unlink(documentFile.tempFilePath, (err) => {
        if (err) {
            console.error("Error deleting the temporary file:", err)
        } else {
            console.log("Temporary file deleted.")
        }
    })
    console.log("url:" + result.secure_url)
    if (result.secure_url){
        const nurse = await Nurse.findOne({ userId: userId })
        const type = documentType
        const name = documentName
        const description = ""
        const institutionName = documentIssuer
        const issuanceDate = documentIssueDate
        const status = "pending"
        const link = result.secure_url
        const nurseToUpdate = await Nurse.findOneAndUpdate(
            { userId: userId },
            {

                $push: {
                    "credentials.document": {
                        type,
                        name,
                        description,
                        institutionName,
                        issuanceDate,
                        status,
                        link

                    }
                }
            }
        )





    }else{
        console.log("error")
        console.log(result)
    }

}

const getNurseConnections = async (req, res) => {
    const { userId } = req.params
    try {
        const connections = await Nurse.find({ userId }, { connections: 1, _id: 0})
        if (!connections)
            return res.status(404).json({ message: "Could not find connections for user!" })

        return res.status(200).json(connections)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const addRecommendation = async (req, res) => {
    try{
        const userId = req.params
        const date = req.body.date
        const description = req.body.description

        const authorID = await User.findOne({userId})
        const receiverID = await Nurse.findOne({_id: userId})

        const newRecommendation = new recommendationModel({
            authorID,
            receiverID,
            date,
            description
        })

        const savedRecommendation = await newRecommendation.save();

        await Nurse.updateOne(
            { _id: receiverID },
            { $push: { 'recommendations.received': savedRecommendation._id } }
        )

        await Nurse.updateOne(
            { _id: authorID },
            { $push: { 'recommendations.given': savedRecommendation._id } }
        )

        console.log(savedRecommendation)
        return savedRecommendation
    } catch (e) {
        console.e('Error adding recommendation: ', error)
        throw error
    }
}


module.exports = {
    getNurses,
    getNurse,
    editNurse,
    deleteNurse,
    editNurseProfilePicture,
    editNurseBanner,
    addDocument,
    getNurseConnections,
    addRecommendation
}
