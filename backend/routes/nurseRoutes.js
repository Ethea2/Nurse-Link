const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse, editNurseProfilePicture, editNurseBanner, addDocument, getNurseConnections, sendNurseConnection, cancelNurseConnectionRequest, acceptNurseConnection, rejectNurseConnection, checkConnectionRequest, checkConnection, deleteNurseConnection } = require("../controllers/nurseController")
const { disconnect } = require("process")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)

nurseRouter.get("/:userId", getNurse)

nurseRouter.get("/:userId/connections", getNurseConnections)

//nurseRouter.post("/:userId/try", sendNurseConnection)

//nurseRouter.post("/:userId/try2", checkConnectionRequest)

//nurseRouter.post("/:userId/try3", checkConnection)

//nurseRouter.post("/:userId/try4", rejectNurseConnection)

//nurseRouter.post("/:userId/try5", deleteNurseConnection)

//nurseRouter.post("/:userId/try6", acceptNurseConnection)

//nurseRouter.post("/:userId/try7", cancelNurseConnectionRequest)

nurseRouter.post("/edit/profilePhoto", checkAuth, editNurseProfilePicture)

nurseRouter.post("/edit/profileBanner", checkAuth, editNurseBanner)

nurseRouter.post("/edit/addDocument", checkAuth, addDocument)

nurseRouter.post("/edit/details", checkAuth, editNurse)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

nurseRouter.post("/connection/acceptNurseConnection", checkAuth, acceptNurseConnection)

nurseRouter.post("/connection/cancelNurseConnection", checkAuth, cancelNurseConnectionRequest)

nurseRouter.post("/connection/sendNurseConnection", checkAuth, sendNurseConnection)

nurseRouter.post("/connection/rejectNurseConnection", checkAuth, rejectNurseConnection)

nurseRouter.post("/connection/deleteConnection", checkAuth, deleteNurseConnection)


//nurseRouter.post("/connection/disconnectConnection", checkAuth, disconnect)

module.exports = nurseRouter
