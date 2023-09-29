const bcrypt = require("bcrypt")
const jwtSecret = require("./jwtConfig")

const BCRYPT_SALT_ROUNDS = 12

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const JWTstrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").Strategy

const Nurse = require("../models/nurseModel")

const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

passport.use(
    "register",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true,
            session: false,
        },
        async (req, username, password, done) => {
            try {
                const { email } = req.body
                const nurse = await Nurse.findOne({
                    $or: [{ username }, { email }],
                })
                if (nurse !== null)
                    return done(null, false, { message: "User already exists" })
                if (!validateEmail(email))
                    return done(null, false, {
                        message: "Please provide a valid email",
                    })
                const salt = bcrypt.genSalt(BCRYPT_SALT_ROUNDS)
                bcrypt.hash(password, salt).then((hashedPassword) => {
                    const newNurse = Nurse.create({
                        username,
                        password: hashedPassword,
                        email,
                    })
                    console.log("User created!")
                    return done(null, newNurse)
                })
            } catch (e) {
                console.log(e)
                return done(e)
            }
        }
    )
)

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            session: false,
        },
        async (req, username, password, done) => {
            try {
                const nurse = await Nurse.findOne({username})
                if(nurse === null) return done(null, false, {message: "No username such as exists!"})
                const match = bcrypt.compare(password, nurse.password)
                if(!match) return done(null, false, {message: "Wrong password!"})
                
            } catch (e) {
                console.log(e)
                done(e)
            }
        }
    )
)
