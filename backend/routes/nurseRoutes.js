const express = require("express")
const { createNurse } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.post("/", createNurse)


module.exports = nurseRouter
