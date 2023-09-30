const bcrypt = require("bcrypt")

const BCRYPT_SALT_ROUNDS = 12

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Nurse = require("../models/nurseModel")

const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

passport.serializeUser((user, done) => {
    process.nextTick(() => done(null, { id: user.id, username: user.username }))
})

passport.deserializeUser(async (user, done) => {
    try {
        const nurse = await Nurse.findById({_id: user.id})
        done(null, nurse)
    } catch (error) {
        done(error)
    }
})

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
                const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS)
                const newPass = await bcrypt.hash(password, salt)

                const newNurse = Nurse.create({
                    username,
                    password: newPass,
                    email,
                })

                req.login(newNurse, (loginErr) => {
                    if (loginErr) {
                        return done(loginErr)
                    }

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
            session: true,
        },
        async (username, password, done) => {
            try {
                const nurse = await Nurse.findOne({ username })
                if (!nurse) {
                    return done(null, false, {
                        message: "No username such as exists!",
                    })
                }

                const match = await bcrypt.compare(password, nurse.password)
                if (!match) {
                    return done(null, false, { message: "Wrong password!" })
                }

                // If the login is successful, return the nurse object
                return done(null, nurse)
            } catch (e) {
                console.error(e)
                return done(e)
            }
        }
    )
)

passport.use(
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async (username, password, done) => {
            try {
                const nurse = await Nurse.findOne({ username })
                if (!nurse) {
                    return done(null, false, { message: "Invalid username" })
                }
                if (!nurse.isValidPassword(password)) {
                    return done(null, false, { message: "Invalid password" })
                }
                return done(null, nurse)
            } catch (error) {
                return done(error)
            }
        }
    )
)

module.exports = passport
