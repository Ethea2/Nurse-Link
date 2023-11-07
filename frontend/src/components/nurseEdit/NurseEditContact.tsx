import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"

const NurseDocumentEditComponent = ({ userId }: { userId: string }) => {
  const [emailText, setEmailText] = useState("Email Address");
  const [contactNumberText, setContactNumberText] = useState("Contact Number");
  const [videoLink, setVideoLink] = useState("");
  const [socialsText, setSocialsText] = useState("Socials");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingContactNumber, setIsEditingContactNumber] = useState(false);
  const [isEditingSocials, setIsEditingSocials] = useState(false);

  const titleStyle = {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "31px",
  };

  const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px 0px #176B8740",
    marginBottom: "16px",
    padding: "16px",
    borderRadius: "8px",
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEditContactNumber = () => {
    setIsEditingContactNumber(true);
  };

  const handleEditSocials = () => {
    setIsEditingSocials(true);
  };

  return (
    <div id="nurse-edit-container" className="w-full h-fit flex flex-col p-10">
      <div
        id="nurse-edit-title-container"
        className="text-6xl font-bold text-[#053B50] flex items-center"
      >
        <span>Contact Details</span>
      </div>
      <div id="nurse-edit-details" className="w-full h-full">
        {/* Email Address Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle} className="">Email Address</h2>
          {isEditingEmail ? (
            <div>
              <input
                type="text"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
              />
              <button onClick={() => setIsEditingEmail(false)}>Save</button>
            </div>
          ) : (
            <button onClick={handleEditEmail}>Edit</button>
          )}
        </div>

        {/* Contact Number Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Contact Number</h2>
          {isEditingContactNumber ? (
            <div>
              <input
                type="text"
                value={contactNumberText}
                onChange={(e) => setContactNumberText(e.target.value)}
              />
              <button onClick={() => setIsEditingContactNumber(false)}>Save</button>
            </div>
          ) : (
            <button onClick={handleEditContactNumber}>Edit</button>
          )}
        </div>

        {/* Video Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Video</h2>
          {videoLink ? (
            <iframe
              width="100%"
              height="315"
              src={videoLink}
              title="YouTube Video"
            ></iframe>
          ) : (
            <input
              type="text"
              placeholder="Enter YouTube link"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          )}
        </div>

        {/* Socials Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4 " style={boxStyle}>
          <div style={titleStyle} className="flex"> Socials   
              <button
                    className="ml-auto hover:bg-[#176B87] text-white rounded-full"
                        onClick={() => {
                            /*condition for setting add socials modal to true*/
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={30}
                            style={{ color: "black" }}
                        />{" "}
                       
              </button>
          </div>
        
          {isEditingSocials ? ( 
            <div>
              <input
                type="text"
                value={socialsText}
                onChange={(e) => setSocialsText(e.target.value)}
              />
              <button onClick={() => setIsEditingSocials(false)}>Save</button>
            </div>
          ) : (
            <button onClick={handleEditSocials}>
                 Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NurseDocumentEditComponent;
