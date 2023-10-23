const passport = require("passport")
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")

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

        if (!nurse)
            return res
                .status(404)
                .json({ message: "Could not find the nurse!" })

        res.status(200).json(nurse)
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
