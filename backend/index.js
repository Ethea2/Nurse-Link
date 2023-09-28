require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const nurseRouter = require("./routes/nurseRoutes")

const app = express()

app.use(
    cors({
        origin: [],
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
)

app.use(express.json({ limit: "50mb" }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/test", async (req, res) => {
    res.status(200).json({ message: "WE ARE ON THE GO!" })
})
app.use("/nurse", nurseRouter)

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "The server has awaken! In port: " +
                    process.env.PORT +
                    "\nAnd I have connected to the MONGODB"
            )
        })
    })
    .catch((error) => {
        console.log(error)
    })
