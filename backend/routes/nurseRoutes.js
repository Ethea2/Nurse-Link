const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", checkAuth, getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.post("/:userId", editNurse)

nurseRouter.delete("/:userId", deleteNurse)

module.exports = nurseRouter
