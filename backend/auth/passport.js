const bcrypt = require("bcrypt")

const BCRYPT_SALT_ROUNDS = 12

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")
const Institute = require("../models/instituteModel")

const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

passport.serializeUser((user, done) => {
    process.nextTick(() =>
        done(null, { id: user._id, username: user.username })
    )
})

passport.deserializeUser(async (user, done) => {
    try {
        const userLogin = await User.findById({ _id: user.id })
        done(null, userLogin)
    } catch (error) {
        done(error)
    }
})

// passport.use(
//   "register",
//   new LocalStrategy(
//     {
//       usernameField: "username",
//       passwordField: "password",
//       passReqToCallback: true,
//       session: false,
//     },
//     async (req, username, password, done) => {
//       try {
//         const {
//           email,
//           firstname,
//           lastname,
//           birthdate,
//           gender,
//           country,
//           city,
//           userType,
//         } = req.body;

//         const user = await User.findOne({
//           $or: [{ username }, { email }],
//         });

//         if (user !== null)
//           return done(null, false, {
//             message: "User already exists",
//           });

//         if (!validateEmail(email))
//           return done(null, false, {
//             message: "Please provide a valid email",
//           });

//         const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
//         const newPass = await bcrypt.hash(password, salt);

//         const newUser = await User.create({
//           username,
//           password: newPass,
//           email,
//           firstname,
//           lastname,
//           birthdate,
//           gender,
//           country,
//           city,
//           userType,
//         });

//         if (userType === "nurse") {
//           const newNurse = await Nurse.create({
//             userId: newUser._id,
//           });
//           req.login(newUser, (loginErr) => {
//             if (loginErr) {
//               return done(loginErr);
//             }

//             console.log("User created!");
//             return done(null, newNurse);
//           });
//         } else {
//           const newInstitute = await Institute.create({
//             userId: newUser._id,
//           });

//           req.login(newUser, (loginErr) => {
//             if (loginErr) {
//               return done(loginErr);
//             }

//             console.log("Institute created!");
//             return done(null, newInstitute);
//           });
//         }
//       } catch (e) {
//         console.log(e);
//         return done(e);
//       }
//     }
//   )
// );

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
          const {
            // general prereqs
            userType,
            email,
            country,
            city,

            //for nurses
            firstname,
            lastname,
            birthdate,
            gender,
            
            //for Institute
            instituteName
            
          } = req.body;
  
          const user = await User.findOne({
            $or: [{ username }, { email }],
          });
  
          if (user !== null)
            return done(null, false, {
              message: "User already exists",
            });
  
          if (!validateEmail(email))
            return done(null, false, {
              message: "Please provide a valid email",
            });
  
          const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
          const newPass = await bcrypt.hash(password, salt);
  
          const newUser = await User.create({
            username,
            password: newPass,
            email,
            userType,
          });
  
          if (userType === "nurse") {
            const newNurse = await Nurse.create({
              userId: newUser._id,
              firstname,
              lastname,
              birthdate,
              gender,
              country,
              city,
            });
            req.login(newUser, (loginErr) => { 
              if (loginErr) {
                return done(loginErr);
              }
  
              console.log("User created!");
              return done(null, newNurse);
            });
          } else {
            const newInstitute = await Institute.create({
              userId: newUser._id,
              instituteName,
              country,
              city,
            });
            
  
            req.login(newUser, (loginErr) => {
              if (loginErr) {
                return done(loginErr);
              }
  
              console.log("Institute created!");
              return done(null, newInstitute);
            });
          }
        } catch (e) {
          console.log(e);
          return done(e);
        }
      }
    )
  );
  
  
  

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
                const user = await User.findOne({ username })
                if (!user) {
                    return done(null, false, {
                        message: "No username such as exists!",
                    })
                }
                const match = bcrypt.compare(password, user.password)

                if (!match) {
                    return done(null, false, { message: "Wrong password!" })
                }

                if (user.userType === "nurse") {
                    const nurse = await Nurse.findOne({ userId: user._id })
                    if (!nurse)
                        return done(null, false, {
                            message: "Could not find the nurse account.",
                        })
                    return done(null, user)
                } else {
                    const institute = await Institute.findOne({ userId: user._id })
                    if (!institute)
                        return done(null, false, {
                            message: "Could not find the institute account.",
                        })
                    return done(null, user)
                }
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
