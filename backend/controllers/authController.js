const passport = require("passport")
const Nurse = require("../models/nurseModel")
const Institute = require("../models/instituteModel")

const register = async (req, res, next) => {
    try {
        passport.authenticate("register", (err, user, info) => {
            if (err) return next(err)
            if (!user)
                return res
                    .status(404)
                    .json({ message: "User already exists!" })
            res.status(200).json({ message: "Registration Successful!", id: user._id, username: user.username, userType: user.userType })
        })(req, res, next)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        passport.authenticate("login", (err, user, info) => {
            if (err) return next(err)
            if (!user)
                return res
                    .status(404)
                    .json({ message: "Wrong Password or Username!" })
            req.login(user, (loginErr) => {
                if (loginErr) {
                    return next(loginErr)
                }
                res.status(200).json({ message: "Login Successful!", id: user._id, username: user.username, userType: user.userType })
            })
        })(req, res, next)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const logout = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).json({ message: "Something went wrong!" })
        }
        res.status(200).json({ message: "Successfully Logged out!" })
    })
}

module.exports = { logout, login, register }
