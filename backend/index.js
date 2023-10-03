require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const passport = require("./auth/passport")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const MongoDBStore = require("connect-mongodb-session")(session)
const nurseRouter = require("./routes/nurseRoutes")
const { generateSecret } = require("./utils/sessionSecret")

const app = express()

//middlewears
app.use(
    cors({
        origin: process.env.WEB_URL,
        methods: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true
    })
)
app.use(bodyParser.json())
app.use(express.json())
app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())

//authentication
app.use(passport.initialize())
const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: "sessions",
})
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 5,
            name: "nurse-session"
        }
    })
)
app.use(passport.authenticate("session"))

//routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/test", async (req, res) => {
    
    res.status(200).json({ message: "WE ARE ON THE GO!" })
})
app.use("/api/nurse", nurseRouter)

//start of program
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
