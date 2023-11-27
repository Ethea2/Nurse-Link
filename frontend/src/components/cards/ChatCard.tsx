import {useState} from "react";
import {NurseType} from "../../types/nurseTypes/nurseType";
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import useFetch from "../../hooks/useFetch";
// TODO: create a modal for the actual chat messages

const ChatCard = ({userId, nurseId, btnClick}: {
    userId: string;
    nurseId: string;
    btnClick: (value: string) => void
}) => {

    // userId is connected with nurseId
    const {data: nurse, loading} = useFetch(`/api/nurse/${nurseId}`);

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const {user} = useAuth()

    // user is who is currently logged in
    const nav = useNavigate()

    if (!isVisible) {
        return null; // Render nothing if the card is not visible
    }

    return (
        <div
            className={`chat-card rounded-3xl p-4 flex items-center justify-left w-100 h-[6rem] ${
                isHovered ? "hovered" : ""
            }`}
            style={{
                backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              console.log("nurse: ", nurseId)
                btnClick(nurseId)
            }
            }


            //add onclick for it to be a button
        >
            <div className="profile-picture w-1/5 rounded-full cursor-pointer">
                {/* <img className ="pfp" onClick={() => nav(`/nurse/${nurseId}`)} src={nurse?.profilePicture }/> */}
                <img className="pfp" src={nurse?.profilePicture}/>
            </div>

            <div className={`names flex flex-col ${isHovered ? "text-white" : "text-black"}`}
                 style={{fontFamily: "Poppins"}}>
                <div className="text-xl font-bold">{nurse?.firstName} {nurse?.lastName}</div>
            </div>

        </div>
    );
};

export default ChatCard;



