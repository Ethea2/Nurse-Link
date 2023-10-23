// import React from "react"
// import { Link } from "react-router-dom"

// const RegisterPage = () => {
//     return (
//         <section className="w-full min-h-screen flex flex-col justify-center items-center">
//             <div className="titleAndLogo flex flex-col items-center">
//                 <div className="flex">
//                     <div className="logoPng ">
//                         <img
//                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
//                             className="object-scale-down h-14 w-14"
//                         />
//                     </div>
//                     <div className="title text-6xl font-bold">NurseLink</div>
//                 </div>
//                 <p className="text-2xl font-semibold">Join us today!</p>
//             </div>
//             <div className="flex gap-5 mt-10 mb-20">
//                 <Link to="/register-nurse">
//                     <div className="font-bold h-52 w-52 rounded-lg cursor-pointer flex justify-center items-center">
//                         <img src= "https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/ex3sr1vwtjqfv5b6ovim.png"></img>
//                     </div>
//                 </Link>
//                 <Link to="/register-institute">
//                     <div className="font-bold h-52 w-52 rounded-lg cursor-pointer flex justify-center items-center">
//                         <img src ="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/kin8tyq4s4htzb7zv7yc.png"></img>
//                     </div>
//                 </Link>
//             </div>
//             <div className ="w-1/2 flex gap-5 justify-center items-center">
//                 <hr className = "border-t-2 w-1/2 border-black-900"></hr>
//                 or
//                 <hr className = "border-t-2 w-1/2 border-black-900"></hr>
//             </div>
//             <div>
//                 Already a member? <Link to="/login"><b>Log in.</b></Link>
//             </div>
//         </section>
//     )
// }

// export default RegisterPage

import React from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="titleAndLogo flex flex-col items-center">
                <div className="flex">
                    <div className="logoPng">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
                            style={{ width: "70px", height: "70px" }} // Inline image size adjustment
                        />
                    </div>
                    <div className="title text-6xl font-bold" style={{ fontSize: "4rem" }}>NurseLink</div> {/* Inline font size adjustment */}
                </div>
                <p className="text-2xl font-semibold">Join us today!</p>
            </div>
            <div className="flex flex-col gap-5 mt-10 mb-20"> {/* Adjust layout for smaller screens */}
                <Link to="/register-nurse">
                    <div className="font-bold rounded-lg cursor-pointer" style={{ width: "100%" }}> {/* Make links full-width */}
                        <img src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/ex3sr1vwtjqfv5b6ovim.png" alt="Nurse Registration" />
                    </div>
                </Link>
                <Link to="/register-institute">
                    <div className="font-bold rounded-lg cursor-pointer" style={{ width: "100%" }}> {/* Make links full-width */}
                        <img src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/kin8tyq4s4htzb7zv7yc.png" alt="Institute Registration" />
                    </div>
                </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-2 justify-center items-center"> {/* Adjust layout */}
                <hr className="border-t-2 w-1/2 border-black-900" />
                <span>or</span> {/* Use a <span> for text, not <hr> */}
                <hr className="border-t-2 w-1/2 border-black-900" />
            </div>
            <div>
                Already a member? <Link to="/login"><b>Log in.</b></Link>
            </div>
        </section>
    )
}

export default RegisterPage

