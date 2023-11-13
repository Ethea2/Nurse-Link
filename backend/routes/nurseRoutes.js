const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse, editNurseProfilePicture, editNurseBanner, addDocument, acceptNurseConnection } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.post("/edit/profilePhoto", checkAuth, editNurseProfilePicture)

nurseRouter.post("/edit/profileBanner", checkAuth, editNurseBanner)

nurseRouter.post("/edit/addDocument", checkAuth, addDocument)

nurseRouter.post("/edit/details", checkAuth, editNurse)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

nurseRouter.post("/connection/acceptNurseConnection", checkAuth, acceptNurseConnection)

module.exports = nurseRouter
