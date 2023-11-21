import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const NotifCard = ({ nurse, notifType }: { nurse: NurseType, notifType: string }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const notifContent = () => {
        if (notifType === "connect") {
            return (
                <>
                    <p className="font-open-sans text-base"><span className="font-bold">{nurse?.firstName} {nurse?.lastName}</span> wants to connect with you.</p>
                </>
            )
        } else if (notifType === "recommendation") {
            return (
                <>
                    <p className="font-open-sans text-base"><span className="font-bold">{nurse?.firstName} {nurse?.lastName}</span> is requesting a recommendation.</p>
                </>
            )
        }
    }

    return (
        <div className="connectNotif h-auto w-full px-6 py-4 rounded-lg font-open-sans bg-white hover:bg-secondary hover:text-white border-transparent drop-shadow-lg mb-5">
            <div className="flex items-center">
                <img
                    src={nurse?.profilePicture}
                    className="object-cover rounded-full border-white border-4 w-[80px] drop-shadow"
                    alt="Nurse's Profile Picture"
                />
                <div className="flex flex-col text-left ml-5">
                    {notifContent()}
                    <div className="flex mt-2 gap-4">
                        <button className="btn w-[100px] font-open-sans text-base rounded-full bg-white text-secondary border-transparent drop-shadow-lg normal-case">
                            Accept
                        </button>
                        <button className="btn w-[100px] font-open-sans text-base rounded-full bg-white text-secondary border-transparent drop-shadow-lg normal-case">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifCard