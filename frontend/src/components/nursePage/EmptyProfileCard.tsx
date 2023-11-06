import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const EmptyProfileCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const [imageLink, setImageLink] = useState<string>(
        "https://res.cloudinary.com/dlr2cz5f3/image/upload/v1699267874/nzqnxccvmeudbal3s8xt.jpg"
    )
    const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false)
    const [isCardVisible, setIsCardVisible] = useState<string>("none")

    useEffect(() => {
        if (user?.id === nurse?.userId) {
            setImageLink(
                "https://res.cloudinary.com/dialvcsco/image/upload/v1699261841/r1rizqeoij5yify2cut0.jpg"
            )
            setIsOwnProfile(true)
        }
        console.log("IsOwnProfile:", isOwnProfile)

        // display only if profile information is empty
        if (
            nurse?.technicalSkill.length === 0 &&
            nurse?.credentials.education.length === 0 &&
            nurse?.credentials.experience.length === 0 &&
            nurse?.credentials.volunteering.length === 0 &&
            nurse?.credentials.document.length === 0
        ) {
            setIsCardVisible("block")
        }
    }, [user, nurse])

    return (
        <div className="flex flex-col justify-center items-center w-1/2 border-2 m-4 p-5 rounded-lg " style={{ display: isCardVisible }}>
            <img src={imageLink} className="w-4/5"></img>
            {isOwnProfile ? (
                <div className="flex flex-col justify-center items-center ">
                    <div className="font-bold text-2xl">
                        {" "}
                        Fill out a section in your profile!{" "}
                    </div>
                    <div> Access 'Edit Profile' in the top right to </div>
                    <div> complete your details.</div>
                </div>
            ) : (
                <div className="font-bold text-2xl">
                    Building Profile, One Detail at a Time!
                </div>
            )}
        </div>
    )
}

export default EmptyProfileCard
