import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { NurseType } from "../../types/nurseTypes/nurseType"
import ProgressCard from "./ProgressCard"
import { color } from "framer-motion"
import EmptyProfileCard from "./EmptyProfileCard"

const SideContainer = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const [isSearcher, setIsSearcher] = useState<boolean>(false)
    const [isAboutVisible, setIsAboutVisible] = useState<string>("none")

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
            setIsAboutVisible("block")
        }

        console.log("Is Searcher:", isSearcher)
    }, [user, nurse])

    return (
        <div className="flex w-full lg:w-1/4 p-4">
            {user?.id === nurse?.userId && <ProgressCard nurse={nurse} />}
            {/*<EmptyProfileCard nurse={nurse}/>*/}
            <div
                className="flex flex-col justify-center items-center gap-6 w-full border-2 p-4"
                style={{ display: isAboutVisible }}
            >
                if finished
            </div>
        </div>
    )
}

export default SideContainer
