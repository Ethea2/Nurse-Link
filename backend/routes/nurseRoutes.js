const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse, editNurseProfilePicture } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.post("/edit/profilePhoto", checkAuth, editNurseProfilePicture)

nurseRouter.post("/:userId", checkAuth, editNurse)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

module.exports = nurseRouter
