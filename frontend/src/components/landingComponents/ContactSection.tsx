import { IoCall } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6"

const CONTACT_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698325496/nurse-link/piwteaqrp6snlpjzc1ue.png"
const ContactSection = () => {
    return (
        <div id="contact" className="h-screen w-full flex justify-end items-center bg-[#00CEC8] text-white">
            <img
                src={CONTACT_ASSET}
                className="invisible md:visible object-contain w-full h-full object-left absolute"
            />
            <div className="w-[40%] flex flex-col justify-center items-start h-full mr-20">
                <span className="text-8xl font-bold">
                    Have any more questions?
                </span>
                <span className="text-3xl mt-10 font-semibold">
                    contact us at
                </span>
                <span className="text-3xl flex justify-between items-center gap-4 mt-5">
                    <IoCall /> +02 8623 8911{" "}
                </span>
                <span className="text-3xl flex justify-between items-center gap-4 mt-5">
                    <AiOutlineMail /> nurselink@gmail.com{" "}
                </span>
                <span className="text-3xl flex justify-between items-center gap-4 mt-5">
                    <FaLocationDot /> 2401 Taft Ave, Malate, Manila, Metro
                    Manila 1004{" "}
                </span>
            </div>
        </div>
    )
}

export default ContactSection
