const passport = require("passport")
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")

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
    const { userId } = req.params
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

module.exports = { getNurses, getNurse, editNurse, deleteNurse }
