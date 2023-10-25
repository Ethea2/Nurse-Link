import { useAuth } from "../../hooks/useAuth"
import { NurseType } from "../../types/nurseTypes/nurseType"
import ProgressCard from "./ProgressCard"

const SideContainer = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    return (
        <div className="flex w-full lg:w-1/4 p-4">
            {user?.id === nurse?.userId && <ProgressCard nurse={nurse} />}
        </div>
    )
}

export default SideContainer
