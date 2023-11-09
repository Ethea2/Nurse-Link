import { useState } from "react";
import { ChangeAbout, ChangeEducation, ChangeExperience, ChangeTechnicalSkill, ChangeVolunteering } from "../modals/EditBackgroundModals.tsx";
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"
import ContactSection from "../landingComponents/ContactSection.tsx";

const NurseBackgroundEditComponent = ({ userId }: { userId: string }) => {
const [showContactModal, setShowContactModal] = useState<boolean>(false);

// email
const [showEmailModal, setShowEmailModal] = useState<boolean>(false)
// contact number
const [showContactnumberModal, setShowContactnumberModal] = useState<boolean>(false)
// video
const [showVideoModal, setShowVideoModal] = useState<boolean>(false)
// socials
const [showSocialModal, setShowSocialModal] = useState<boolean>(false)


const [changed, setChanged] = useState<boolean>(false);

const { data: nurse, loading } = useDynamicFetch(
    `/api/nurse/${userId}`,
    changed
)

const email = nurse?.credentials.email || "";
const contactnumber = nurse?.credentials.contactnumber || "";
const video = nurse?.credentials.video || "";
const socials = nurse?.credentials.socials || "";
// const technicalSkill = nurse?.credentials.technicalskill || "";

const hasEmail = typeof email === "string" && email.trim() !== "";
const hasContactnumber = typeof contactnumber === "string" && contactnumber.trim() !== "";
const hasVideo = typeof video === "string" && video.trim() !== "";
const hasSocials = typeof socials === "string" && socials.trim() !== "";
// const hasTechnicalSkill = typeof technicalSkill === "string" && technicalSkill.trim() !== "";


  return (
    <div id="nurse-edit-container" className="w-full h-fit flex flex-col p-10">
        <div
            id="nurse-edit-title-container"
            className="text-6xl font-bold text-[#053B50] flex items-center mb-6"
        >
            <span>Contact</span>
            <button
                className="btn ml-auto bg-[#176B87] hover:bg-[#00CEC8] text-white rounded-full normal-case"
                onClick={() => {
                    setShowContactModal(true);
                }}
            >
                Add Section
            </button>
        </div>


     <div id="nurse-edit-details" className="w-full h-full">
      
      {/* section 1: email section */}
        <div
            id="nurse-email"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Email
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        // setShowBackgroundModal(true)
                        setShowEmailModal(true)
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
                {hasEmail ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Email: ${email}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No email added yet
                            {/* display the email i forgot how to do this one */}
                        </p>
                    </div>
                )}
            </div>
        </div>

        {/* section 2: contact number */}
        <div
            id="nurse-contact-number"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Contact Number
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowContactnumberModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-contactnumber-list-container" className="text-xl mt-5">
                {hasContactnumber ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Contact Number: ${contactnumber}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No Contact number added yet
                        </p>
                    </div>
                )}
            </div>
        </div>
        
      {/* section 3: Youtube Video section */}
      <div
            id="nurse-video"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                YouTube Video
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowVideoModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-video-list-container" className="text-xl mt-5">
                {hasVideo ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Video: ${video}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No YouTube Video added yet
                        </p>
                    </div>
                )}
            </div>
        </div>
 
            {/* section 4: socials section */}
        <div
            id="nurse-socials"
            className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
        >
            <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                Socials
                <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                    onClick={() => {
                        setShowSocialModal(true)
                    }}
                >
                    <AiOutlinePlusCircle
                        size={40}
                        style={{ color: "black" }}
                    />{" "}
                    {/* Set color to black using inline style */}
                </button>
            </div>
            <div id="nurse-socials-list-container" className="text-xl mt-5">
                {hasSocials ? (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">{`Socials: ${socials}`}</p>
                    </div>
                ) : (
                    <div className="flex ml-4 items-center">
                        <p className="text-[#053B50]">
                            No socials information added yet
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

        <ChangeEducation
                setShow={setShowEducationModal}
                show={showEducationModal}
                setChanged={setChanged}
            />

        <ChangeExperience
                setShow={setShowExperienceModal}
                show={showExperienceModal}
                setChanged={setChanged}
            />

        <ChangeVolunteering
                setShow={setShowVolunteeringModal}
                show={showVolunteeringModal}
                setChanged={setChanged}
            />

        
      </div>
    </div>

       
  );
};

export default NurseBackgroundEditComponent;


