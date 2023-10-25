import { NurseType } from "../../types/nurseTypes/nurseType"
import { useState } from "react"
import { BiCheckCircle } from "react-icons/bi"

const ProgressCard = ({ nurse }: { nurse: NurseType }) => {
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
        <div className="flex flex-col justify-center items-center gap-6 w-full border-2 p-4">
            <div className="w-full flex flex-row md:flex-col justify-center items-center">
                <div className="w-[40%] md:w-full">
                    <p className="font-bold text-center md:text-2xl">
                        Your profile is making progress!
                    </p>
                    <p className="text-center text-sm">
                        Check out what else you can add to complete you profile.
                    </p>
                </div>
                <div
                    className="radial-progress transition-all ease-in duration-150 text-3xl text-[#00CEC8] md:mt-5"
                    style={style}
                >
                    {nurse?.progress}%
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center gap-1 justify-center">
                {profileProg.map((prog) => (
                    <div
                        className={`w-[48%] flex gap-0.5 items-center  font-semibold px-2 py-0.5 rounded-lg text-base border-2  ${
                            prog.done
                                ? " border-[#00CEC8] text-[#00CEC8]"
                                : "border-neutral-300 text-neutral-300"
                        }`}
                    >
                        <BiCheckCircle />
                        <p>{prog.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgressCard
