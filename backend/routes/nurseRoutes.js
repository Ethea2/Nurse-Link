const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse, editNurseProfilePicture, editNurseBanner, addDocument, getNurseConnections, acceptNurseConnection, sendNurseConnection, checkConnectionRequest, checkConnection, rejectNurseConnection, deleteNurseConnection } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.get("/:userId/connections", getNurseConnections)

nurseRouter.post("/:userId/try", sendNurseConnection)

nurseRouter.post("/:userId/try2", checkConnectionRequest)

nurseRouter.post("/:userId/try3", checkConnection)

nurseRouter.post("/:userId/try4", rejectNurseConnection)

nurseRouter.post("/:userId/try5", deleteNurseConnection)

nurseRouter.post("/edit/profilePhoto", checkAuth, editNurseProfilePicture)

nurseRouter.post("/edit/profileBanner", checkAuth, editNurseBanner)

nurseRouter.post("/edit/addDocument", checkAuth, addDocument)

nurseRouter.post("/edit/details", checkAuth, editNurse)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

nurseRouter.post("/connection/acceptNurseConnection", checkAuth, acceptNurseConnection)

module.exports = nurseRouter
