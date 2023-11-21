import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { BsShieldFillCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PreferencesCards = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    return (
        <div className="fastPass flex text-white font-open-sans p-6 bg-accent-blue border-transparent rounded-lg drop-shadow">
            <BsShieldFillCheck
                size={60}
                className="text-white"
            />{" "}
            <div className="ml-5">
                <p className="text-xl font-bold">Looks like you aren't verified yet</p>
                <p className="text-base font-light mt-2">Establish trust by authenticating your profile</p>
            </div>
            <button
                className="btn w-[130px] my-auto ml-auto font-open-sans text-base rounded-full bg-white text-secondary normal-case"
                onClick={() => nav(`/nurse/`)}>
                Fast Pass
            </button>
        </div >
    )
}

export default PreferencesCards