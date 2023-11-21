import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"

const ReqCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()

    return (
        <div className="rounded-lg h-auto w-full p-6 shadow-md hover:bg-secondary hover:text-white">
            <div className="flex justify-center items-center mb-5">
                <img
                    src={nurse?.profilePicture}
                    className="object-cover rounded-full border-white border-4 w-1/3 drop-shadow"
                    alt="Nurse's Profile Picture"
                />
                <div className="flex flex-col text-left ml-5">
                    <p className="font-poppins text-xl">{nurse?.firstName} {nurse?.lastName}</p>
                    <p className="font-pt-sans italic text-sm">{nurse?.country}, {nurse?.city}</p>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <button className="btn w-[60%] text-lg rounded-full bg-white text-secondary border-transparent drop-shadow-lg normal-case">
                    Accept
                </button>
                <button className="btn w-[60%] mt-5 text-lg rounded-full bg-white text-secondary border-transparent drop-shadow-lg normal-case">
                    Reject
                </button>
            </div>
        </div>
    )
}

export default ReqCard