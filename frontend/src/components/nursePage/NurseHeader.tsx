import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

// Icons
import { BsFillCheckCircleFill } from "react-icons/bs"
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
        <div className="nurseHeader flex flex-col h-[640px]">
            <div className="h-[50vh] md:h-3/5 w-full flex justify-center items-center">
                <img
                    src={nurse?.bannerPicture}
                    className="h-full object-cover w-full"
                    alt="Nurse's Profile Banner"
                />
            </div>
            <div className="headerDetails flex px-20 pt-10 pb-10 w-full">
                <div className="leftDetails flex-1 text-xl font-semibold font-open-sans">
                    <div className="phoneNumber text-lg">
                        <PiPhoneFill className="Phone w-8 h-8 mr-5 justify-center items-center inline-flex text-outline-text" />{" "}
                        {nurse?.phoneNum}
                    </div>
                    <div className="email pt-5 text-lg">
                        <PiEnvelopeSimpleBold className="Email w-8 h-8 mr-5 justify-center items-center inline-flex text-outline-text" />
                        {nurse?.email}
                    </div>
                    <div className="socials flex gap-[25px] pt-20">
                        <CgFacebook className="w-8 h-8 text-outline-text hover:text-secondary" />
                        <FaTwitter className="w-8 h-8 text-outline-text hover:text-secondary" />
                        <TiSocialInstagram className="w-8 h-8 text-outline-text hover:text-secondary" />
                    </div>

                </div>
                <div className="centerDetails flex-1 flex justify-center items-center flex-col relative bottom-[220px] text-outline-text">
                    <div className="profilePictureFrame pb-2">
                        <img
                            src={nurse?.profilePicture}
                            className="profilePicture w-[250px] h-[250px] object-cover rounded-full border-8 border-white shadow"
                            alt="Nurse's Profile Picture"
                        />
                    </div>
                    <div className="nameVerified flex justify-center items-center mt-3">
                        <div className="fullName w-full text-3xl font-poppins text-center text-outline-text">
                            {nurse?.firstName} {nurse?.lastName}
                        </div>
                        {/*This only shows up when they are fully verified*/}
                        {/*<BsFillCheckCircleFill className="w-6 h-full ml-2 inline-flex text-secondary" />*/}
                    </div>
                    <div className="username font-pt-sans opacity-80 text-lg mt-2">
                        @{nurse?.username}
                    </div>
                    <div className="specialization text-[23px] font-open-sans pt-7">
                        {nurse?.specialization}
                    </div>
                    <div className="location flex text-lg font-pt-sans opacity-70 gap-[5px] justify-center items-center pb-10">
                        <PiMapPinFill className="w-5 h-5 relative flex-col justify-start items-start inline-flex" />
                        {nurse?.country}, {nurse?.city}
                    </div>
                </div>
                <div className="rightDetails flex-1 flex-col">
                    <div className="connections text-lg font-semibold text-outline-text font-open-sans flex items-center justify-end">
                        <PiUserFill className="w-8 h-8 relative flex-col justify-start items-start inline-flex text-outline-text mr-3" />
                        6 connections {/*Place connections code here*/}
                    </div>
                    <div className="profileButtons flex flex-col items-end mt-20">
                        {user?.id === nurse?.userId ? (
                            <button
                                className="btn w-[45%] text-lg rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                                onClick={() => nav(`/nurse/edit/${user.id}`)}
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex flex-col w-full items-end">
                                <button
                                    className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                                >
                                    Connect
                                </button>
                                <div className="dropdown dropdown-end w-full flex flex-col items-end relative">

                                    <label tabIndex={0}>
                                        <button
                                            className="btn text-lg w-40 rounded-full bg-secondary text-white border-transparent shadow-inner drop-shadow-lg normal-case relative z-[2]"
                                        >
                                            More
                                        </button>
                                    </label>
                                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-[1] absolute right-0 top-10 mt-5">
                                        <li>
                                            {/* TODO: connect to message page */}
                                            <button>
                                                Message 
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => nav(`/nurse/recommendations/give/${nurse?.userId}`)}>
                                                Recommend
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => nav(`/nurse/recommendations/receive/${nurse?.userId}`)}>
                                                Request Recommendation
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NurseHeader
