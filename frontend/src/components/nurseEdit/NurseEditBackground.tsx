import { useState } from "react";
import { ChangeAbout, ChangeEducation, ChangeExperience, ChangeTechnicalSkill, ChangeVolunteering } from "../modals/EditBackgroundModals.tsx";
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"

const NurseBackgroundEditComponent = ({ userId }: { userId: string }) => {
const [showBackgroundModal, setShowBackgroundModal] = useState<boolean>(false);

// about
const [showAboutModal, setShowAboutModal] = useState<boolean>(false)
// education
const [showEducationModal, setShowEducationModal] = useState<boolean>(false)
// experience
const [showExperienceModal, setShowExperienceModal] = useState<boolean>(false)
// volunteering
const [showVolunteeringModal, setShowVolunteeringModal] = useState<boolean>(false)
// tech skills
const [showTechnicalSkillModal, setShowTechnicalSkillModal] = useState<boolean>(false)

const [changed, setChanged] = useState<boolean>(false);

const { data: nurse, loading } = useDynamicFetch(
    `/api/nurse/${userId}`,
    changed
)

const about = nurse?.credentials.about || "";
const education = nurse?.credentials.education || "";
const experience = nurse?.credentials.experience || "";
const volunteering = nurse?.credentials.volunteering || "";
const technicalSkill = nurse?.credentials.technicalskill || "";

const hasAbout = typeof about === "string" && about.trim() !== "";
const hasEducation = typeof education === "string" && education.trim() !== "";
const hasExperience = typeof experience === "string" && experience.trim() !== "";
const hasVolunteering = typeof volunteering === "string" && volunteering.trim() !== "";
const hasTechnicalSkill = typeof technicalSkill === "string" && technicalSkill.trim() !== "";


  return (
    <div id="nurse-edit-container" className="w-full h-fit flex flex-col p-10">
        <div
            id="nurse-edit-title-container"
            className="text-6xl font-bold text-[#053B50] flex items-center mb-6"
        >
            <span>Background</span>
            <button
                className="btn ml-auto bg-[#176B87] hover:bg-[#00CEC8] text-white rounded-full normal-case"
                onClick={() => {
                    setShowBackgroundModal(true);
                }}
            >
                Add Section
            </button>
        </div>


     <div id="nurse-edit-details" className="w-full h-full">
      
      {/* section 1: about section */}
        <div
            id="nurse-about"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                About
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowBackgroundModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-about-list-container" className="text-xl mt-5">
                {hasAbout ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`About: ${about}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No about added yet
                        </p>
                    </div>
                )}
            </div>
        </div>

        {/* section 2: Education */}
        <div
            id="nurse-education"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Education
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowBackgroundModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-education-list-container" className="text-xl mt-5">
                {hasEducation ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Education: ${education}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No education added yet
                        </p>
                    </div>
                )}
            </div>
        </div>
        
      {/* section 3: experience section */}
      <div
            id="nurse-experience"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Experience
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowBackgroundModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-experience-list-container" className="text-xl mt-5">
                {hasExperience ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Experience: ${experience}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No experience added yet
                        </p>
                    </div>
                )}
            </div>
        </div>
 
            {/* section 4: volunteering section */}
        <div
            id="nurse-volunteering"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Volunteering
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowBackgroundModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-volunteering-list-container" className="text-xl mt-5">
                {hasVolunteering ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Volunteering: ${volunteering}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No volunteering information added yet
                        </p>
                    </div>
                )}
            </div>
        </div>

            {/* section 5: Technical skills section */}
        <div
            id="nurse-technicalskills"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Technical Skills
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowBackgroundModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-technicalskill-list-container" className="text-xl mt-5">
                {hasTechnicalSkill ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Technicalskill: ${technicalSkill}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No Technical Skills added yet
                        </p>
                    </div>
                )}
            </div>
        </div>  
        <ChangeAbout
                setShow={setShowAboutModal}
                show={showAboutModal}
                setChanged={setChanged}
            />
      </div>
    </div>

       
  );
};

export default NurseBackgroundEditComponent;


