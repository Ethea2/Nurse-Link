import { useState } from "react";
import { NurseType } from "../../types/nurseTypes/nurseType";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const ConnectionCard = ({ nurseId }: { nurseId: string }) => {
  const { data: nurse, loading } = useFetch(`/api/nurse/${nurseId}`);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Add any additional logic you need
  }, [nurse]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="connection-card bg-blue-800 rounded-lg p-4 flex items-center justify-between w-100 h-[8rem]">
      <div className="profile-picture w-16 h-16 bg-white rounded-full">
        <img src={nurse?.profilePicture}/>
      </div>
      <div className="names flex flex-col ml-4">
        <div className="text-white">{nurse?.firstName}</div>
        <div className="text-white">{nurse?.lastName}</div>
      </div>
      <div className="dropdown relative">
        <button
          onClick={toggleDropdown}
          className="dropdown-button bg-white text-blue-800 px-2 py-1 rounded"
        >
          Options
        </button>
        {dropdownVisible && (
          <div className="dropdown-content absolute bg-white shadow-md rounded mt-2">
            <div className="px-2 py-1">Disconnect</div>
            <div className="px-2 py-1">Recommend</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionCard;



