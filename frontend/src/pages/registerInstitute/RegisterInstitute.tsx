import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import useRegister from "../../hooks/useRegister.tsx"
import Steps from "../../components/registerComponents/Steps.tsx"

const RegisterInstitute = () => {
    //defailt user requirements
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [retypepassword, setRetypePassword] = useState<string>("")

    // Institute requirements
    const [instituteName, setInstituteName] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [city, setCity] = useState<string>("")

    const { registerInstitute, state } = useRegister() // register hello
    const navigate = useNavigate()

    const [stepsComplete, setStepsComplete] = useState(0)

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
            instituteName={instituteName}
            setInstituteName={setInstituteName}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
        />,

        "ARE YOU SURE TO SUBMIT?",
    ]

    const NUMBER_OF_STEPS = 2

    const handleSetStep = (num: number) => {
        if (
            (stepsComplete === 0 && num === -1) ||
            (stepsComplete === NUMBER_OF_STEPS && num === 1)
        ) {
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (stepsComplete === 0) {
            if (password !== retypepassword) {
                toast("Passwords do not match!", {
                    type: "error",
                })
            } else if (username === "") {
                toast("Username required", {
                    type: "error",
                })
            } else if (email === "") {
                toast("Email required", {
                    type: "error",
                })
            } else if (!emailRegex.test(email)) {
                toast("Input a valid email", {
                    type: "error",
                })
            } else if (password === "") {
                toast("Password required", {
                    type: "error",
                })
            } else if (retypepassword === "") {
                toast("Retyped Password required", {
                    type: "error",
                })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        } else if (stepsComplete === 1) {
            if (instituteName === "") {
                toast("institute name required", {
                    type: "error",
                })
            } else if (country === "") {
                toast("country required", {
                    type: "error",
                })
            } else if (city === "") {
                toast("city required", {
                    type: "error",
                })
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
        instituteName: string,
        country: string,
        city: string
    ) => {
        e.preventDefault()

        if (password !== retypepassword) {
            console.error("Passwords do not match")
            return
        }

        await registerInstitute(
            username,
            password,
            email,
            instituteName,
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
                    <div className="mb-10">
                        <div className="titleAndLogo flex bg">
                            <div className="logoPng ">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
                                    className="object-scale-down h-14 w-14"
                                />
                            </div>
                            <div className="title text-5xl font-bold ">
                                NurseLink
                            </div>
                        </div>
                        <div className="welcomeTitle text-4xl font-semibold ">
                            Nice to meet you.
                        </div>
                    </div>
                    <div className="border-2 h-1/2 w-2/3 p-10">
                        <Steps
                            numSteps={NUMBER_OF_STEPS}
                            stepsComplete={stepsComplete}
                        />
                        <div className="flex flex-col justify-center items-center w-full h-[80%] my-4 p-2">
                            {fields[stepsComplete]}
                        </div>
                        <div className="flex w-full justify-end">
                            <button
                                className="px-4 py-1 rounded hover:bg-gray-100 text-black"
                                onClick={() => handleSetStep(-1)}
                            >
                                Prev
                            </button>
                            {stepsComplete === NUMBER_OF_STEPS ? (
                                <button
                                    className="px-4 py-1 rounded bg-black text-white"
                                    onClick={(e) =>
                                        handleRegister(
                                            e,
                                            username,
                                            password,
                                            retypepassword,
                                            email,
                                            instituteName,
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
                                    onClick={() => handleSetStep(1)}
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
            <label htmlFor="username" className="w-[75%]">
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
            <label htmlFor="email" className="w-[75%]">
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
            <label htmlFor="password" className="w-[75%]">
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

            <label htmlFor="retype-password" className="w-[75%]">
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
    instituteName,
    setInstituteName,
    country,
    setCountry,
    city,
    setCity,
}: {
    instituteName: string
    setInstituteName: React.Dispatch<React.SetStateAction<string>>
    country: string
    setCountry: React.Dispatch<React.SetStateAction<string>>
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <label htmlFor="instituteName">
                instituteName
                <br />
                <input
                    name="instituteName"
                    id="instituteName"
                    type="text"
                    className="input input-primary bg-slate-200 w-full"
                    onChange={(e) => setInstituteName(e.target.value)}
                    value={instituteName}
                />
            </label>

            <br />

            <label htmlFor="country">
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

            <label htmlFor="city">
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

export default RegisterInstitute
