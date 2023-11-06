import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { NurseType } from "../../types/nurseTypes/nurseType"
import ProgressCard from "./ProgressCard"
import { color } from "framer-motion"
import EmptyProfile from "./EmptyProfile"
import ProfileDetails from "./ProfileDetails"

const SideContainer = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const [isSearcher, setIsSearcher] = useState<boolean>(false)
    const [isAboutVisible, setIsAboutVisible] = useState<string>("none")
    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    useEffect(() => {
        if (user?.id === nurse?.userId) {
            setIsSearcher(true)
        } else {
            setIsSearcher(false)
        }

        if (
            nurse?.technicalSkill.length >= 1 &&
            nurse?.credentials.education.length >= 1 &&
            nurse?.credentials.experience.length >= 1 &&
            nurse?.credentials.volunteering.length >= 1 &&
            nurse?.credentials.document.length >= 1
        ) {
            setIsEmpty(false)
        }

        console.log("Is Searcher:", isSearcher)
    }, [user, nurse])

    return (
        <div className="flex w-full p-10 gap-10">
            <div className="leftContainer w-1/4">
                {user?.id === nurse?.userId && <ProgressCard nurse={nurse} />}
            </div>
            <div className="rightContainer bg-white w-full h-auto">
                {isEmpty ? (
                    <div className="isEmpty">
                        <EmptyProfile nurse={nurse}/>
                    </div>
                ) : (
                    <div className="isNotEmpty ">
                        <ProfileDetails nurse={nurse}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideContainer
