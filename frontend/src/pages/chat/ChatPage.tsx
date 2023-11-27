import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import ChatCard from "../../components/cards/ChatCard"
import { io } from "socket.io-client"
import ChatBody from "../../ChatsPage/ChatBody.tsx";
import {useState} from "react";
const ChatPage = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [messageBodyVisible, setMessageBodyVisible] = useState(false);
    const { userId } = useParams()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    const socket = io.connect("http://localhost:3001");
    const btnClick = () =>
    {
        setMessageBodyVisible(true);
    }
    const sendMessage = async () => {


    }
    return(


        <>
        {loading ? (
            <div>loading...</div>
        ) : (
        <div className="flex flex-row md:p-20 gap-20 w-full min-h-screen justify-between">
                {/* Messages Tab for connected users */}
                <div>
                    <p className="font-poppins font-black text-xl">All Messages</p>

                    {/* TODO: validate if i need the button to be here or to be at the Chat Card */}
             <button>
                <div className="flex flex-col gap-5 w-50" onClick={btnClick}>
                    {nurse?.connections?.map((connectionId, index) => (
                        <ChatCard key={index} userId={userId} nurseId={connectionId} />
                    ))}
                </div>
             </button>
                

                    {/* search function */}
                </div>
                
                {/* Messages Tab */}
                <div className="flex flex-col main-section w-3/4">
                    <div className="mb-5">
                        <p style={{ fontFamily: "Poppins", color: "#053B50", fontSize: "3rem", fontWeight: 900 }}>
                            {/* {nurse?.connections?.length} Messages */}
                            Messages
                        </p>
                    </div>
                    {messageBodyVisible && <ChatBody />}

                </div>
          
        </div>
        )}
    </>
    )
}

export default ChatPage