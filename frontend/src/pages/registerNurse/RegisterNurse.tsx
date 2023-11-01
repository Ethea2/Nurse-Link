import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import useRegister from "../../hooks/useRegister.tsx"
import Steps from "../../components/registerComponents/Steps.tsx"

const RegisterNurse = () => {
    const style = document.createElement('style');
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
        `;
        document.head.appendChild(style);


    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [retypepassword, setRetypePassword] = useState<string>("")
    const [firstname, setFirstName] = useState<string>("")
    const [lastname, setLastName] = useState<string>("")
    const [birthdate, setBirthDate] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [city, setCity] = useState<string>("")

    const { registerNurse, state } = useRegister()
    const navigate = useNavigate()

    const [stepsComplete, setStepsComplete] = useState(0)

    const responsiveStyles = {
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        logoPng: {
          marginBottom: "10px",
        },
        title: {
          fontSize: "4.5rem",
          marginBottom: "20px",
        },
        welcomeTitle: {
          fontSize: "1.8rem",
        },

        card: {
            width: "100%",
            maxWidth: "100%",
          },
          stepContainer: {
            padding: "10px",
          },
          button: {
            fontSize: "16px",
          },
          submitButton: {
            fontSize: "16px",
          },

      };

    const fields = [
        <Step1
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            retypepassword={retypepassword}
            setRetypePassword={setRetypePassword}
        />,
        <Step2
            firstname={firstname}
            setFirstName={setFirstName}
            lastname={lastname}
            setLastName={setLastName}
            birthdate={birthdate}
            setBirthDate={setBirthDate}
        />,
        <Step3
            gender={gender}
            setGender={setGender}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
        />,
        "ARE YOU SURE TO SUBMIT?",
    ]

    const NUMBER_OF_STEPS = 3

    const handleSetStep = (num: number) => {
        if (
            (stepsComplete === 0 && num === -1) ||
            (stepsComplete === NUMBER_OF_STEPS && num === 1)
        ) {
            return
        }

        if(num === -1){
            setStepsComplete((pv) => pv + num)
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (stepsComplete === 0) {
            if (password !== retypepassword) {
                toast("Passwords do not match!", { type: "error" })
            } else if (username === "") {
                toast("Username required", { type: "error" })
            } else if (email === "") {
                toast("Email required", { type: "error" })
            } else if (!emailRegex.test(email)) {
                toast("Input a valid email", { type: "error" })
            } else if (password === "") {
                toast("Password required", { type: "error" })
            } else if (retypepassword === "") {
                toast("Retyped Password required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        } else if (stepsComplete === 1) {
            if (firstname === "") {
                toast("first name required", { type: "error" })
            } else if (lastname === "") {
                toast("last name required", { type: "error" })
            } else if (birthdate === "") {
                toast("birth date required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        } else {
            if (gender === "") {
                toast("gender required", { type: "error" })
            } else if (country === "") {
                toast("country required", { type: "error" })
            } else if (city === "") {
                toast("city required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        }
    }

    const handleRegister = async (
        e: React.MouseEvent<HTMLButtonElement>,
        username: string,
        password: string,
        retypepassword: string,
        email: string,
        firstname: string,
        lastname: string,
        birthdate: string,
        gender: string,
        country: string,
        city: string
    ) => {
        e.preventDefault()

        if (password !== retypepassword) {
            console.error("Passwords do not match")
            return
        }

        await registerNurse(
            username,
            password,
            email,
            firstname,
            lastname,
            birthdate,
            gender,
            country,
            city
        )
    }

    useEffect(() => {
        console.log(state)
        if (state === "Error") console.log("ERROR")
        else if (state === "Success") navigate("/homepage")
    }, [state])

    return (
        <>
            <div className="registerPage flex items-center w-full h-screen">
                <div className="leftPage flex items-center justify-center flex-col w-full h-full">

                    <div className="mb-10 flex flex-col items-center" style={responsiveStyles.card}>
                            <div className="logoPng" style={responsiveStyles.logoPng}>
                                <img
                                src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                                className="object-scale-down h-14 w-14"
                                />
                            </div>
                            <div className="title text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#053B50', ...responsiveStyles.title }}>
                                NurseLink
                            </div>
                            <div className="welcomeTitle text-xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#053B50', ...responsiveStyles.welcomeTitle }}>
                                Join Us Today!
                            </div>
                            </div>
                    {/* <div className="border-2 h-1/2 w-2/3 p-10"> */}
                    <div className="border-0 w-1/3 h-1/2 p-10">
                        <Steps
                            numSteps={NUMBER_OF_STEPS}
                            stepsComplete={stepsComplete}
                        />
                        <div className="flex flex-col justify-center items-center w-full h-[80%] my-4 p-2">
                            {fields[stepsComplete]}
                        </div>
                        <div className="flex w-full justify-end">
                            <button
                                className="px-4 py-1 rounded hover:bg-gray-100 font-bold"
                                style={{
                                    borderRadius: '30px',
                                    color: '#053B50',
                                    ...responsiveStyles.button,
                                }}
                                onClick={() => handleSetStep(-1)}
                            >
                                Prev
                            </button>
                            {stepsComplete === NUMBER_OF_STEPS ? (
                                <button
                                    className="px-4 py-1 rounded bg-black text-white"
                                    style={{
                                        backgroundColor: '#053B50',
                                        borderRadius: '30px',
                                        // fontSize: '16px',
                                        ...responsiveStyles.submitButton,
                                        // marginLeft: '10px',
                                    }}
                                    onClick={(e) =>
                                        handleRegister(
                                            e,
                                            username,
                                            password,
                                            retypepassword,
                                            email,
                                            firstname,
                                            lastname,
                                            birthdate,
                                            gender,
                                            country,
                                            city
                                        )
                                    }
                                >
                                Submit
                                </button>
                            ) : (
                                <button
                                    className="px-4 py-1 rounded bg-black text-white"
                                    style={{
                                        backgroundColor: '#053B50',
                                        borderRadius: '30px',
                                        // fontSize: '16px',
                                        ...responsiveStyles.button,
                                        // marginLeft: '10px',  
                                        // borderWidth: '10px',
                                    }}
                                    onClick={() => {handleSetStep(1);}}
                                >
                                    Next
                                </button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    
}

const Step1 = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    retypepassword,
    setRetypePassword,
}: {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    retypepassword: string
    setRetypePassword: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <label htmlFor="username" className="w-[100%]">
                Username
                <br />
                <input
                    name="username"
                    id="username"
                    type="text"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </label>
            <label htmlFor="email" className="w-[100%]">
                Email
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label htmlFor="password" className="w-[100%]">
                Password
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>

            <label htmlFor="retype-password" className="w-[100%]">
                Retype Password
                <br />
                <input
                    name="retype-password"
                    id="retype-password"
                    type="password"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setRetypePassword(e.target.value)}
                    value={retypepassword}
                />
            </label>
        </>
    )
}

const Step2 = ({
    firstname,
    setFirstName,
    lastname,
    setLastName,
    birthdate,
    setBirthDate,
}: {
    firstname: string
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    lastname: string
    setLastName: React.Dispatch<React.SetStateAction<string>>
    birthdate: string
    setBirthDate: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <label htmlFor="firstname" className="w-[100%]">
                First Name
                <br />
                <input
                    name="firstname"
                    id="firstname"
                    type="text"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                />
            </label>
            <br />

            <label htmlFor="lastname" className="w-[100%]">
                Last Name
                <br />
                <input
                    name="lastname"
                    id="lastname"
                    type="text"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                />
            </label>
            <br />

            <label htmlFor="birthdate" className="w-[100%]">
                Birth Date
                <br />
                <input
                    name="birthdate"
                    id="birthdate"
                    type="date"
                    className="border border-primary rounded-md p-3 bg-slate-200 w-full"
                    onChange={(e) => setBirthDate(e.target.value)}
                    value={birthdate}
                />
            </label>
        </>
    )
}

const Step3 = ({
    gender,
    setGender,
    country,
    setCountry,
    city,
    setCity,
}: {
    gender: string
    setGender: React.Dispatch<React.SetStateAction<string>>
    country: string
    setCountry: React.Dispatch<React.SetStateAction<string>>
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <label htmlFor="gender" className="w-[100%]">
                Gender
                <br />
                <select
                    name="gender"
                    id="gender"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                >
                    <option value="" disabled>
                        Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Prefer not to Say">Prefer not to Say</option>
                </select>
            </label>

            <br />

            <label htmlFor="country" className="w-[100%]">
                Country
                <br />
                <input
                    name="country"
                    id="country"
                    type="text"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                />
            </label>
            <br />

            <label htmlFor="city" className="w-[100%]">
                City
                <br />
                <input
                    name="city"
                    id="city"
                    type="text"
                    className="border border-primary rounded-md p-3 bg-slate-200 w-full"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                />
            </label>
        </>
    )
}

export default RegisterNurse
