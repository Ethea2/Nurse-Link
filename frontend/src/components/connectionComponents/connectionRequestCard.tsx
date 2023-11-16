import { useState } from "react";
import { NurseType } from "../../types/nurseTypes/nurseType";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const ConnectionRequestCard = ({ nurseId }: { nurseId: string }) => {
  const { data: nurse, loading } = useFetch(`/api/nurse/${nurseId}`);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (

    <div className="rounded-lg p-4 flex flex-col items-center justify-between w-100" style={{ 
        backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
>
        <div className="flex items-center justify-between">
            <div className="profile-picture w-1/5 bg-white rounded-full">
                <img src={nurse?.profilePicture}/>
            </div>
            <div className={`names flex flex-col w-1/3 ${isHovered ? "text-white" : "text-black"}`}
                style={{fontFamily: "Poppins"}}>
                <div className="text-xl font-bold">{nurse?.firstName} {nurse?.lastName}</div>
            </div>
        </div>
        <button className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case">
            Connect
        </button>
        <button className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case">
            Connect
        </button>
    </div>



    
  );
};

export default ConnectionRequestCard;