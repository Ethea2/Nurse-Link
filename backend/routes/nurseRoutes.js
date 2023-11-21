const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getNurses, getNurse, editNurse, deleteNurse, editNurseProfilePicture, editNurseBanner, addDocument, addRecommendation } = require("../controllers/nurseController")

const nurseRouter = express.Router()

nurseRouter.get("/", getNurses)


nurseRouter.get("/:userId", getNurse)

nurseRouter.get("/:userId/connections", (req, res) => {
  return res.status(200).send("Hello!")
})

nurseRouter.post("/edit/profilePhoto", checkAuth, editNurseProfilePicture)

nurseRouter.post("/edit/profileBanner", checkAuth, editNurseBanner)

nurseRouter.post("/edit/addDocument", checkAuth, addDocument)

nurseRouter.post("/edit/details", checkAuth, editNurse)

nurseRouter.post("/:userId/addRecommendation", checkAuth, addRecommendation)

nurseRouter.delete("/:userId", checkAuth, deleteNurse)

module.exports = nurseRouter
