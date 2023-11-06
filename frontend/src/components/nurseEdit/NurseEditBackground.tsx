import { useState } from "react";
import { AddDocumentSection } from "../modals/modals";

const NurseBackgroundEditComponent = ({ userId }: { userId: string }) => {
  const [showDocumentModal, setShowDocumentModal] = useState<boolean>(false);
  const [changed, setChanged] = useState<boolean>(false);

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
  };

  //   useEffect(() => {
//     // Fetch data from mongo database dito tapos update the sections state hehe
//     axios.get("your-database-endpoint").then((response) => {
//       setSections(response.data); // Assuming your data is an array of sections
//     });
//   }, []); // The empty dependency array makes the effect run once on mount

//   const handleEditSection = (id) => {
//     // Handle editing section content
//   };

//   const handleDeleteSection = (id) => {
//     // Handle deleting the section with the given ID
//     // Make an API request to delete the section in your database
//     axios.delete(`your-database-endpoint/${id}`).then(() => {
//       setSections((prevSections) => prevSections.filter((section) => section.id !== id));
//     });
//   };

//   const handleAddSection = () => {
//     // Handle adding a new section
//     // Make an API request to add the new section in your database
//     const newSection = { title: "New Section", content: "Lorem ipsum new section text" };
//     axios.post("your-database-endpoint", newSection).then((response) => {
//       setSections((prevSections) => [...prevSections, response.data]);
//     });
//   };

  return (
    <div id="nurse-edit-container" className="w-full h-fit flex flex-col p-10">
      <div
        id="nurse-edit-title-container"
        className="text-6xl font-bold text-[#053B50] flex items-center"
      >
        <span>Background</span>
        {/* <button
          className="btn ml-auto bg-[#176B87] hover.bg-[#00CEC8] text-white rounded-full"
          onClick={() => {
            setShowDocumentModal(true);
          }}
        >
          Add Section
        </button> */}
      </div>
      <div id="nurse-edit-details" className="w-full h-full">
        {/* About Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>About</h2>
          {/* Add content for the About section */}
        </div>

        {/* Education Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Education</h2>
          {/* Add content for the Education section */}
        </div>

        {/* Experience Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Experience</h2>
          {/* Add content for the Experience section */}
        </div>

        {/* Volunteering Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Volunteering</h2>
          {/* Add content for the Volunteering section */}
        </div>

        {/* Technical Skills Section */}
        <div className="bg-[#F4F4F4] rounded-lg p-4 mb-4" style={boxStyle}>
          <h2 style={titleStyle}>Technical Skills</h2>
          {/* Add content for the Technical Skills section */}
        </div>
      </div>
    </div>
  );
};

export default NurseBackgroundEditComponent;