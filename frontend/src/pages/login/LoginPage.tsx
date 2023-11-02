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

    const [displayBG, setBG] = useState('url(https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/zkeubixeljnf29buvxmo.png)'); // State to control content visibility
    const [loginAlign, setLoginAlign] = useState('end');
    useEffect(() => {
        const handleResize = () => {
        // Update font size based on window width
        if (window.innerWidth >= 600) { // if tablet or laptop have background image
            setBG('url(https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/zkeubixeljnf29buvxmo.png)');
        } else {
            setBG('none')
        }
        // for login alignment

        if (window.innerWidth >= 992){
            setLoginAlign('end');
        } else {
            setLoginAlign('center');
        }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        console.log(state)
        if(state === "Error") console.log("ERROR")
        else if (state === "Success") navigate("/homepage")
    }, [state])

    return (
        <>
            <div className="w-full h-screen" style={{
                backgroundImage: displayBG,
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left'
            }}>
               <div className="w-full p-10 flex flex-col">
                    <img
                            className="self-end"
                            src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                            alt="Logo"
                            style={{
                                //display: displayLogo
                                 // with the navbar
                                 //position: 'absolute',
                                 //top: '85px',
                                 //right: '30px',
                                 //width: '71px'
 
 
                                 // from figma, without navbar
                                 width: '50px',
                                 height: '50px',
                                 // top: '32px',
                                 // left: '1334px',
                            }}
                        />
                    <div  className="loginInput flex items-center justify-center flex-col self-end" style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        marginTop: '1rem',
                        alignSelf: loginAlign,
                        //width: '439px',
                        //height: '579px',
                        //top: "220px",
                        //left: "860px",
                        borderRadius: "30px",
                        border: '2px solid #ccc',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

                        
                        // border: '2px solid #ccc',
                        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        // padding: '2rem',
                        // borderRadius: '2rem',

                        
                    }}>
                        <div className="title font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '50px', lineHeight: '75px', alignContent: "center", marginBottom: '2.5rem' }}>
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
                                        style={{ width: '366.21px', height: '62.32px', top: '392.23px', left: '896.39px', marginBottom: '1px'}}
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
                                        style={{ width: '366.21px', height: '62.32px', top: '392.23px', left: '896.39px' , marginBottom: '20px'}}
                                    />
                                </label>
                                <br />

                                <div className="flex justify-between items-center" style={{ width: '366.21px', top: '392.23px', left: '896.39px' }}>
                                    <label htmlFor="rememberMe" style={{ fontWeight: '400px', fontSize: '13px', lineHeight: '16px', width: '90px', top: '3.27px', left: '31.84px', display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            name="rememberMe"
                                            style={{ width: '22.75px', height: '22.66px', borderRadius: '3px', border: '1px', marginRight: '8px' }}
                                        />
                                        <span style={{ whiteSpace: 'nowrap' }}>Remember me</span>
                                    </label>
                                    <Link to="/forgot-password" style={{ color: '#176B87', fontFamily: 'Open Sans', fontWeight: '600', fontSize: '13px', lineHeight: '16px' }}>
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="flex justify-center item-center">
                                    <button
                                        className="loginBtn btn bg-slate-400 rounded-full mt-3 w-full"
                                        style={{ backgroundColor: '#176B87', color: '#fff'}}
                                        onClick={(e) => handleLogin(e, username, password)}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                <span style={{ marginRight: '10px', color: '#176B87' }}>Don't have an account?</span>
                                <Link to="/register" style={{ color: '#176B87' }}><b>Register.</b></Link>
                            </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default LoginPage