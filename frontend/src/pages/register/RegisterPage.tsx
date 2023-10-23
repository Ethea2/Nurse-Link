import React from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="titleAndLogo flex flex-col items-center">
                <div className="flex">
                    <div className="logoPng ">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
                            className="object-scale-down h-14 w-14"
                        />
                    </div>
                    <div className="title text-6xl font-bold">NurseLink</div>
                </div>
                <p className="text-2xl font-semibold">Join us today!</p>
            </div>
            <div className="flex gap-5 mt-10">
                <Link to="/register-nurse">
                    <div className="font-bold h-52 w-52 border-2 rounded-lg border-primary cursor-pointer flex justify-center items-center">
                        Add Nurse
                    </div>
                </Link>
                <Link to="/register-institute">
                    <div className="font-bold h-52 w-52 border-2 rounded-lg border-primary cursor-pointer flex justify-center items-center">
                        Add Institute
                    </div>
                </Link>
            </div>
            <div className ="w-full flex gap 5 justify-center">
                <hr className = "border-black-900"></hr> or <hr className = "border-black-900"></hr>
            </div>
            <div>
                Already a member? <Link to="/homepage"><b>Log in.</b></Link>
            </div>
        </section>
    )
}

export default RegisterPage
