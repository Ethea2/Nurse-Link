import { Link } from "react-router-dom"
import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { Suspense } from "react"
import NurseCard from "../../components/others/NurseCard"
import ChatCard from "../../components/cards/ChatCard"


const ChatPage = () => {

    const { userId } = useParams()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    return(


        <>
        {loading ? (
            <div>loading...</div>
        ) : (
        <div className="flex flex-row md:p-20 gap-20 w-full min-h-screen justify-between">
                {/* Messages Tab for connected users */}
                <div>
                    <p className="font-poppins font-black text-xl">All Messages</p>

            <button>
                <div className="flex flex-col gap-5 w-50">
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
                            {/* {nurse?.connections?.length} Connections */}
                            Messages
                        </p>
                    </div>     
                </div>
          
        </div>
        )}
    </>
    )
}

export default ChatPage