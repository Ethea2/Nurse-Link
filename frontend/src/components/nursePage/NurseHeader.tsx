import { NurseType } from "../../types/nurseTypes/nurseType"
import { ImLocation, ImInstagram } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { useAuth } from "../../hooks/useAuth"

const NurseHeader = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    return (
        <div className="flex flex-col justify-start items-center w-full h-fit md:h-[80vh] border-b-2">
            <div className="h-[50vh] md:h-3/5 w-full flex justify-center items-center">
                <img
                    src={nurse?.bannerPicture}
                    className="h-full object-fill w-full"
                    alt="Nurse's Profile Banner"
                />
            </div>
            <div className="h-2/5 flex md:flex-row flex-col w-full justify-center items-center md:items-start pt-20">
                <div className="flex flex-col p-10 h-full justify-between">
                    <span className="flex justify-center items-center text-2xl gap-1">
                        <AiOutlineMail />{" "}
                        <span className="text-xl">{nurse?.email}</span>
                    </span>
                    <span className="flex w-full justify-between text-4xl">
                        <BsFacebook className="hover:text-[#176B87] hover:scale-105 transition-all duration-200 ease-in" />
                        <BsTwitter className="hover:text-[#176B87]  hover:scale-105 transition-all duration-200 ease-in" />
                        <ImInstagram className="hover:text-[#176B87]  hover:scale-105 transition-all duration-200 ease-in" />
                    </span>
                </div>
                <div className="flex flex-col justify-between items-center h-1/2 gap-10 md:mx-auto">
                    <img
                        src={nurse?.profilePicture}
                        className="object-cover absolute top-[350px]"
                        alt="Nurse's Profile Picture"
                    />
                    <span className="text-5xl font-bold flex flex-col text-center">
                        {nurse?.firstName} {nurse?.lastName}
                        <span className="text-lg font-normal text-slate-500 w-full text-center">
                            @{nurse?.username}
                        </span>
                    </span>
                    <span className="flex justify-center items-center">
                        <ImLocation className="mr-1" />
                        {nurse?.country}, {nurse?.city}
                    </span>
                </div>
                <div className="flex flex-col h-full justify-between items-center p-10">
                    <span className="flex justify-center items-center text-2xl">
                        <BsFillPersonFill /> connections
                    </span>
                    {user?.id === nurse?.userId && (
                        <button className="btn rounded-full text-[#176B87] bg-white shadow-lg">
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NurseHeader