const RegisterPage = () => {
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
                        <form>
                            <label htmlFor="username">
                                Username
                                <br />
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                    className="bg-slate-200 w-full"
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
                                />
                            </label>
                            <br />
                            <div className="signIn flex items-center justify-center py-5">
                                <button className="signInBtn btn btn-wide bg-slate-400 rounded-full center ">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightPage flex items-center justify-center flex-col w-full h-full">
                    <img 
                        className="scale-125"
                        src="https://t4.ftcdn.net/jpg/00/66/01/29/360_F_66012928_ztFfdS8dnLgghWKWxrDOH8FfhrzAkI2Z.jpg" />
                </div>
            </div>
        </>
    )
}

export default RegisterPage
