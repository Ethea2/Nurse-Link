const Nurse = require("../models/nurseModel")

const createNurse = async (req, res) => {
    const { username, password } = req.body
    const nurse = await Nurse.create({ username, password })

    res.status(200).json(nurse)
}

module.exports = { createNurse }
