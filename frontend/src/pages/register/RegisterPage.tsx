import { MouseEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import useRegister from "../../hooks/useRegister.tsx"

const RegisterPage = () => {
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

    const { registerNurse, state } = useRegister() // register hello
    const navigate = useNavigate()

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
                    <div className="contForm ">
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
                        <form className="pt-5">
                            <label htmlFor="username">
                                Username
                                <br />
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                />
                            </label>
                            <label htmlFor="email">
                                Email
                                <br />
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </label>
                            <br />
                            <label htmlFor="password">
                                Password
                                <br />
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </label>
                            <br />

                            <label htmlFor="retype-password">
                                Retype Password
                                <br />
                                <input
                                    name="retype-password"
                                    id="retype-password"
                                    type="password"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setRetypePassword(e.target.value)
                                    }
                                    value={retypepassword}
                                />
                            </label>
                            <br />

                            <label htmlFor="firstname">
                                First Name
                                <br />
                                <input
                                    name="firstname"
                                    id="firstname"
                                    type="text"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    value={firstname}
                                />
                            </label>
                            <br />

                            <label htmlFor="lastname">
                                Last Name
                                <br />
                                <input
                                    name="lastname"
                                    id="lastname"
                                    type="text"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    value={lastname}
                                />
                            </label>
                            <br />

                            <label htmlFor="birthdate">
                                Birth Date
                                <br />
                                <input
                                    name="birthdate"
                                    id="birthdate"
                                    type="date"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) =>
                                        setBirthDate(e.target.value)
                                    }
                                    value={birthdate}
                                />
                            </label>
                            <br />

                            <label htmlFor="gender">
                                Gender
                                <br />
                                <select
                                    name="gender"
                                    id="gender"
                                    className="bg-slate-200 w-full"
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-Binary">
                                        Non-binary
                                    </option>
                                    <option value="Prefer not to Say">
                                        Prefer not to say
                                    </option>
                                </select>
                            </label>
                            <br />

                            <label htmlFor="country">
                                Country
                                <br />
                                <input
                                    name="country"
                                    id="country"
                                    type="text"
                                    className="bg-slate-200 w-full"
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
                                    className="bg-slate-200 w-full"
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                />
                            </label>
                            <br />

                            <div className="signIn flex items-center justify-center py-5">
                                <button
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
                                    className="signInBtn btn btn-wide bg-slate-400 rounded-full center "
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="divider">
                            <span className="text">or</span>
                        </div>
                        <div className="loginOption text-center">
                            Already a Member?{" "}
                            <a href="#" className="font-semibold">
                                Login.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rightPage flex items-center justify-center flex-col w-full h-full">
                    <img
                        className="scale-125"
                        src="https://t4.ftcdn.net/jpg/00/66/01/29/360_F_66012928_ztFfdS8dnLgghWKWxrDOH8FfhrzAkI2Z.jpg"
                    />
                </div>
            </div>
        </>
    )
}

export default RegisterPage
