const passport = require("passport")
const Nurse = require("../models/nurseModel")

const createNurse = async (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.status(404).json({ message: "User not found!" })
        res.status(200).json({ message: "Registration Successful!" })
    })(req, res, next)
}

const loginNurse = async (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.status(404).json({ message: "User not found!" })
        req.login(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr)
            }
            res.status(200).json({ message: "Login Successful!" })
        })
    })(req, res, next)
}

const logoutNurse = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err)
            return res.status(400).json({ message: "Something went wrong!" })

        res.status(200).json({ message: "Successfully Logged out!" })
    })
}

const getNurses = async (req, res) => {
    const nurses = await Nurse.find({})
    res.status(200).json(nurses)
}

module.exports = { createNurse, loginNurse, logoutNurse, getNurses }
