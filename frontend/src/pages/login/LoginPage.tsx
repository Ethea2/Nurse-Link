import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import useLogin from "../../hooks/useLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {
    const style = document.createElement('style');
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
        `;
        document.head.appendChild(style);
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {login, state} = useLogin()
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
            <div className="w-full h-screen" style={{
            backgroundImage: 'url(https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/zkeubixeljnf29buvxmo.png)',
            backgroundSize: 'auto 100%', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top left'
            }}>
                <div className="loginPage flex items-center justify-center w-full gap-2 h-screen">
                    <div className="loginInput flex items-center justify-center flex-col" style={{
                        border: '2px solid #ccc',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        padding: '3rem',
                        borderRadius: '2rem' 
                        }}>
                        <div className="title text-6xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                            Login
                        </div>
                        <div className="containPwUsername float-left">
                            <label htmlFor="username">
                                Username
                                <br />
                                <input
                                    name="username"
                                    id="username"
                                    className="bg-slate-200"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                            </label>
                            <br />
                            <label htmlFor="password">
                                Password
                                <br />
                                <input
                                    name="password"
                                    type="password"
                                    id="password"
                                    className="bg-slate-200"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </label>
                            <br />
                            <div className="flex justify-center item-center">
                                <button
                                    className="loginBtn btn bg-slate-400 rounded-full mt-5 w-full"
                                    onClick={(e) => handleLogin(e, username, password)}
                                >
                                    Log In
                                </button>
                            </div>
                            
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>Don't have an account?</span>
                        <Link to="/register"><b>Register.</b></Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default LoginPage
{
    /*
    <div className="loginPage flex items-center justify-center w-full gap-2 h-screen">
                <div className="leftPage flex items-center justify-center flex-col">
                    <div className="titleAndLogo flex items-center">
                        <div className="logoPng ">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
                                className="object-scale-down h-14 w-14"
                            />
                        </div>
                        <div className="title text-6xl font-bold">
                            NurseLink
                        </div>
                    </div>
                    <div className="welcomeTitle text-4xl"> Welcome Back. </div>
                    <div className="containPwUsername float-left">
                        <label htmlFor="username">
                            Username
                            <br />
                            <input
                                name="username"
                                id="username"
                                className="bg-slate-200"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />
                        </label>
                        <br />
                        <label htmlFor="password">
                            Password
                            <br />
                            <input
                                name="password"
                                type="password"
                                id="password"
                                className="bg-slate-200"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </label>
                        <br />
                        <div className="flex justify-center item-center">
                            <button
                                className="loginBtn btn bg-slate-400 rounded-full mt-5"
                                onClick={(e) => handleLogin(e, username, password)}
                            >
                                Log In
                            </button>
                        </div>
                        
                    </div>
                    <div>Not a member? <Link to ="/register"><b>Sign up.</b></Link></div>
                </div>
            </div>
    */
}