import { NurseType } from "../../types/nurseTypes/nurseType"
import { PiCheckCircleBold } from "react-icons/pi"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const ProgressCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const style = {
        "--value": `${nurse?.progress}`,
        "--size": "12rem",
        "--thickness": "15px",
    } as React.CSSProperties
    const profileProg = [
        {
            name: "Initial Details",
            done: true,
        },
        {
            name: "Technical Skill",
            done: nurse?.technicalSkill.length >= 1,
        },
        {
            name: "Education",
            done: nurse?.credentials.education.length >= 1,
        },
        {
            name: "Experience",
            done: nurse?.credentials.experience.length >= 1,
        },
        {
            name: "Volunteers",
            done: nurse?.credentials.volunteering.length >= 1,
        },
        {
            name: "Document",
            done: nurse?.credentials.document.length >= 1,
        },
    ]

    return (
        <div className="progressCard flex flex-col justify-center items-center w-full border-2 px-6 pt-6 rounded-lg font-open-sans">
            <div className="textContainer">
                <p className="textHeader font-bold md:text-2xl text-left">
                    Your profile is making progress!
                </p>
                <p className="textBody text-left text-sm pt-2">
                    Check out what else you can add to complete you profile.
                </p>
            </div>
            <div className="progressContainer pt-5 items-center text-center">
                <div
                    className="radial-progress transition-all ease-in duration-150 text-3xl text-primary"
                    style={style}
                >
                    <p className="percentage font-bold text-center text-4xl">
                        {nurse?.progress}%
                    </p>
                    <p className="complete text-xl text-center">COMPLETE</p>
                </div>
                <div className="progressChecklist py-5">
                    {profileProg.map((prog) => (
                        <div
                            className={`flex ${
                                prog.done
                                    ? " text-primary"
                                    : "text-outline-text opacity-30"
                            }`}
                        >
                            <div className="progressName flex items-center gap-2">
                                <PiCheckCircleBold className="w-11 h-11" />
                                <p className="w-44 text-left">{prog.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="editProfileBtn border-t py-2">
                    <button className="button cursor-pointer" onClick={() => nav(`/nurse/edit/${user!.id}`)}>
                        Edit Profile
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressCard
