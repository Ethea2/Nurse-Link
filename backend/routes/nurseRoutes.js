const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", checkAuth, getNurses)

module.exports = nurseRouter
