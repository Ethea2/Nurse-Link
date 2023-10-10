const passport = require("passport")
const Nurse = require("../models/nurseModel")

const getNurses = async (req, res) => {
    const nurses = await Nurse.find({}, 'username email')
    res.status(200).json(nurses)
}

module.exports = { getNurses }
