import { useState } from "react";
import { NurseType } from "../../types/nurseTypes/nurseType";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useConnections from "../../hooks/useConnections.tsx"

const ConnectionCard = ({ nurseId }: { nurseId: string }) => {
  const { data: nurse, loading } = useFetch(`/api/nurse/${nurseId}`);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const { disconnectConnection } = useConnections()
  const { user } = useAuth()
  const nav = useNavigate()

  const handleRejectConnection = async (
    //e: React.MouseEvent<HTMLButtonElement>,
    connectionSender: string,
    connectionReceiver: string
) => {
    //e.preventDefault()
    await disconnectConnection(connectionSender, connectionReceiver)
}

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
            className={`connection-card rounded-3xl p-4 flex items-center justify-between w-100 h-[10rem] ${
                isHovered ? "hovered" : ""
            }`}
            style={{ backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
                     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
        >
      <div className="profile-picture w-1/5 bg-white rounded-full">
        <img src={nurse?.profilePicture}/>
      </div>
      <div className={`names flex flex-col w-1/3 ${isHovered ? "text-white" : "text-black"}`}
            style={{fontFamily: "Poppins"}}>
        <div className="text-xl font-bold">{nurse?.firstName} {nurse?.lastName}</div>
        <div className="text-l italic">{nurse?.city}</div>
      </div>
      <div className="dropdown relative">
        <button
          onClick={toggleDropdown}
          className="dropdown-button bg-white text-blue-800 px-2 py-1 rounded"
          style={{ backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
                   cursor: "pointer"}}
        >
          <img src="https://res.cloudinary.com/dialvcsco/image/upload/v1699954243/DotsThreeOutlinethreeblack_io5446.png"
          style={{ display: isHovered ? "none" : "block" }}/>
          <img src="https://res.cloudinary.com/dialvcsco/image/upload/v1699954243/DotsThreeOutlinethreewhite_amhcq2.png"
          style={{ display: isHovered ? "block" : "none" }}/>
        </button>
        {dropdownVisible && (
          <div className="dropdown-content absolute bg-white shadow-md rounded mt-2" style={{ fontFamily: "Poppins" }}>
            <div className="px-2 py-1" style={{ cursor: "pointer"}}        onClick={() => {
          if (user) {
            handleRejectConnection(nurseId, user?.id)
          } else {
              {() => nav(`/login`)}
          }
        }}  
              >Disconnect</div>
            <div className="px-2 py-1" style={{ cursor: "pointer"}}>Recommend</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionCard;



