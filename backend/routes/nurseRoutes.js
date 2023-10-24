const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.post("/:userId", checkAuth, editNurse)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

module.exports = nurseRouter
