import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

// icons
import { PiPhoneFill } from "react-icons/pi";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { PiMapPinFill } from "react-icons/pi";
import { PiUserFill } from "react-icons/pi";

const NurseHeader = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()
    return (
        <div className="headerPic flex flex-col h-[600px]">
            <div className="h-[50vh] md:h-3/5 w-full flex justify-center items-center">
                <img
                    src={nurse?.bannerPicture}
                    className="h-full object-cover w-full"
                    alt="Nurse's Profile Banner"
                />
            </div>
            <div className="headerDetails flex px-20 pt-10 w-full">
                <div className="leftDetails flex-1 text-xl font-semibold font-open-sans">
                    <div className="phoneNumber">
                        <PiPhoneFill className="Phone w-8 h-8 pl-1 pr-[3px] pt-[3px] pb-1 justify-center items-center inline-flex text-outline-text"/>{" "}
                        {nurse?.phoneNumber} phoneNumber
                    </div>
                    <div className="email pt-5">
                        <PiEnvelopeSimpleBold className="Email w-8 h-8 pl-1 pr-[3px] pt-[3px] pb-1 justify-center items-center inline-flex text-outline-text"/>
                    {nurse?.email}
                    </div>
                    <div className="socials flex gap-[25px] pt-20">
                        <CgFacebook className="w-10 h-10 text-outline-text"/>
                        <FaTwitter className="w-10 h-10 text-outline-text "/>
                        <TiSocialInstagram className="w-10 h-10 text-outline-text"/>
                    </div>
                    
                </div>
                <div className="centerDetails flex-1 flex justify-center items-center flex-col relative bottom-[220px]  text-outline-text ">
                    <div className="profilePictureFrame pb-2">
                        <img
                                src={nurse?.profilePicture}
                                className="profilePicture w-[250px] h-[250px] object-cover rounded-full shadow border-4 border-white"
                                alt="Nurse's Profile Picture"
                        />
                    </div>
                    <div className="fullName text-[34px] font-poppins font-black">
                        {nurse?.firstName} {nurse?.lastName}
                    </div>
                    <div className="username font-pt-sans opacity-80 text-lg">
                        @{nurse?.username}
                    </div>
                    <div className="specialization text-[23px] font-open-sans pt-7">
                        {nurse?.specialization}
                    </div>
                    <div className="location flex text-lg font-pt-sans opacity-70 gap-[5px] justify-center items-center">
                        <PiMapPinFill className="w-5 h-5 relative flex-col justify-start items-start inline-flex"/> 
                        {nurse?.country}, {nurse?.city}
                    </div>
                </div>
                <div className="rightDetails flex-1 flex-col">
                    <div className="connections text-lg font-semibold text-outline-text font-open-sans flex items-center justify-end gap-[5px]">
                        <PiUserFill className="w-6 h-6 relative flex-col justify-start items-start inline-flex"/>

                        connections
                    </div>
                    <div className="editProfile flex items-center justify-end pt-20">
                        {user?.id === nurse?.userId && (
                            <button
                                className="btn rounded-full text-secondary hover:text-accent-blue bg-white shadow-lg font-open-sans"
                                onClick={() => nav(`/nurse/edit/${user.id}`)}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default NurseHeader
