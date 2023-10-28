import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { ChangeProfilePhoto } from "../modals/modals"
import { BsFillImageFill } from "react-icons/bs"
import { motion } from "framer-motion"

const NurseEditComponent = ({ userId }: { userId: string }) => {
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)
    const [firstName, setFirstName] = useState<string>(nurse?.firstName)
    const [lastName, setLastName] = useState(nurse?.lastName)
    const [specialization, setSpecialization] = useState(nurse?.lastName)
    const [city, setCity] = useState(nurse?.city)
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false)
    const [hoverProfile, setHoverProfile] = useState<boolean>(false)
    const [hoverBanner, setHoverBanner] = useState<boolean>(false)
    useEffect(() => {
        setFirstName(nurse?.firstName)
        setLastName(nurse?.lastName)
        setSpecialization(nurse?.specialization ?? "")
        setCity(nurse?.city ?? "")
    }, [loading])
    return (
        <div
            id="nurse-edit-container"
            className="w-full h-fit flex flex-col p-10"
        >
            <div
                id="nurse-edit-title-container"
                className="text-6xl font-bold text-[#053B50] "
            >
                Edit Profile
            </div>
            <div id="nurse-edit-details" className="w-full h-full">
                <div
                    id="nurse-edit-img-container"
                    className="flex flex-col w-full h-[80%] border-2 rounded-2xl drop-shadow-xl "
                >
                    <div
                        className="relative w-full h-2/3 flex cursor-pointer justify-center items-center"
                        onMouseEnter={() => setHoverBanner(true)}
                        onMouseLeave={() => setHoverBanner(false)}
                    >
                        {hoverBanner && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeIn" }}
                                className="absolute bg-[#053B50]/50 flex flex-col justify-center items-center w-full h-full rounded-t-2xl"
                            >
                                <BsFillImageFill className="text-white text-5xl" />
                                <span className="text-white font-semibold">
                                    Edit Profile Banner
                                </span>
                            </motion.div>
                        )}
                        <img
                            src={nurse?.bannerPicture}
                            className="object-contain w-full h-full rounded-t-2xl"
                        />
                    </div>
                    <div
                        id="nurse-edit-profile"
                        className="absolute bottom-5 left-20"
                    >
                        <div
                            onMouseEnter={() => setHoverProfile(true)}
                            onMouseLeave={() => setHoverProfile(false)}
                            className="border-8 border-white shadow-b-2xl flex justify-center bg-white items-center rounded-full cursor-pointer"
                        >
                            {hoverProfile && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeIn",
                                    }}
                                    onClick={() => setShowProfileModal(true)}
                                    className="absolute bg-[#053B50]/50 flex flex-col justify-center items-center w-full h-full rounded-full"
                                >
                                    <BsFillImageFill className="text-white text-5xl" />
                                    <span className="text-white font-semibold">
                                        Edit Profile Photo
                                    </span>
                                </motion.div>
                            )}
                            <img
                                src={nurse?.profilePicture}
                                className="w-full h-full rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full h-28 flex justify-end items-end gap-5 p-5" />
                </div>
                <div
                    id="nurse-edit-details"
                    className="flex flex-col w-full border-2 rounded-xl mt-2 shadow-lg p-1"
                >
                    <div className="flex justify-between w-full gap-2">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between w-full gap-2">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">
                                    Specialization
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={specialization}
                                onChange={(e) =>
                                    setSpecialization(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>
                    <small className="flex items-center gap-10 m-5">
                        Do you want your recommendations to be shown in your
                        profile?{" "}
                        <div className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio"
                            />
                            Yes
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio"
                            />
                            No
                        </div>
                    </small>
                    <button className="btn rounded-full bg-[#176B87] hover:bg-[#00CEC8] text-white hover:text-neutral">
                        save
                    </button>
                </div>
            </div>
            <ChangeProfilePhoto
                setShow={setShowProfileModal}
                show={showProfileModal}
            />
        </div>
    )
}

export default NurseEditComponent
