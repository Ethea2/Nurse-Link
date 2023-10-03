const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const {
    createNurse,
    loginNurse,
    logoutNurse,
    getNurses,
} = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.post("/register", createNurse)

nurseRouter.post("/login", loginNurse)

nurseRouter.post("/logout", logoutNurse)

nurseRouter.get("/", checkAuth,getNurses)

module.exports = nurseRouter
