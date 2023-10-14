import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import useRegister from "../../hooks/useRegister"

const RegisterPage = () => {
    Username, password, email, firstname, lastname, birthdate, gender, country, city
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setUsername] = useState<string>("")
    const [retype-password, setPassword] = useState<string>("")
    const [firstname, setUsername] = useState<string>("")
    const [lastname, setPassword] = useState<string>("")
    const [birthdate, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [gender, setUsername] = useState<string>("")
    const [country, setPassword] = useState<string>("")
    const [city, setUsername] = useState<string>("")


    const {login, state} = useRegister()
    const navigate = useNavigate()

    const handleLogin = async (
        e: React.MouseEvent<HTMLButtonElement>,
        username: string,
        password: string
    ) => {
        e.preventDefault()
        await login(username, password)
    }

    useEffect(() => {
        console.log(state)
        if(state === "Error") console.log("ERROR")
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
                                    //onChange={(e) => setUsername(e.target.value)}
                                    //value={username}
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
                                    //onChange={(e) => setPassword(e.target.value)}
                                    //value={password}
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
                                />
                            </label>
                            <br />

                            <label htmlFor="first-name">
                                First Name
                                <br />
                                <input
                                    name="first-name"
                                    id="first-name"
                                    type="text"
                                    className="bg-slate-200 w-full"
                                />
                            </label>
                            <br />

                            <label htmlFor="last-name">
                                Last Name
                                <br />
                                <input
                                    name="last-name"
                                    id="last-name"
                                    type="text"
                                    className="bg-slate-200 w-full"
                                />
                            </label>
                            <br />

                            <label htmlFor="birth-date">
                                Birth Date
                                <br />
                                <input
                                    name="birth-date"
                                    id="birth-date"
                                    type="date"
                                    className="bg-slate-200 w-full"
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
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-binary">Non-binary</option>
                                    <option value="Prefer not to Say">Prefer not to say</option> 
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
                                />
                            </label>
                            <br />

                            <div className="signIn flex items-center justify-center py-5">
                                <button className="signInBtn btn btn-wide bg-slate-400 rounded-full center ">
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
