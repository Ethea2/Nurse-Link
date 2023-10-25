import { NurseType } from "../../types/nurseTypes/nurseType"
import ProgressCard from "./ProgressCard"

const SideContainer = ({nurse} : {nurse: NurseType}) => {
  return (
    <div className="flex w-full lg:w-1/4 p-4">
        <ProgressCard nurse={nurse} />
    </div>
  )
}

export default SideContainer