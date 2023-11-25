import { NurseType } from "../../types/nurseTypes/nurseType"
import { ImLocation, ImInstagram } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import useConnections from "../../hooks/useConnections.tsx"
import useFetch from "../../hooks/useFetch"


const NurseHeader = ({ nurse }: { nurse: NurseType }) => {

    const { user } = useAuth()
    const { sendConnection, acceptConnection, rejectConnection, cancelConnection, disconnectConnection } = useConnections()
    
    const { data: checkConnection, error: errorConnection} = useFetch(`/api/nurse/${user?.id}/connection/${nurse?.userId}`)
    const { data: checkSent, error: errorSent} = useFetch(`/api/nurse/${user?.id}/connectionRequest/${nurse?.userId}`)
    const { data: checkRequest, error: errorRequest} = useFetch(`/api/nurse/${nurse?.userId}/connectionRequest/${user?.id}`)
    console.log("testing")
    
    const handleSendConnection = async (
        e: React.MouseEvent<HTMLButtonElement>,
        connectionSender: string,
        connectionReceiver: string
    ) => {
        e.preventDefault()
        await sendConnection(connectionSender, connectionReceiver)
    }

    const handleDeleteConnection = async (
        e: React.MouseEvent<HTMLButtonElement>,
        connectionSender: string,
        connectionReceiver: string
    ) => {
        e.preventDefault()
        await disconnectConnection(connectionSender, connectionReceiver)
    }

    const handleCancelConnection = async (
        e: React.MouseEvent<HTMLButtonElement>,
        connectionRejecter: string,
        connectionRejectee: string
      ) => {
        e.preventDefault()
        await cancelConnection(connectionRejecter, connectionRejectee)
    }

    const handleAcceptConnection = async (
        e: React.MouseEvent<HTMLButtonElement>,
        connectionSender: string,
        connectionReceiver: string
      ) => {
        e.preventDefault();
        await acceptConnection(connectionSender, connectionReceiver);
    };
    
    const handleRejectConnection = async (
    e: React.MouseEvent<HTMLButtonElement>,
    connectionRejecter: string,
    connectionRejectee: string
    ) => {
        e.preventDefault();
        await rejectConnection(connectionRejecter, connectionRejectee);
    };

    

    const nav = useNavigate()

    let connectButton;

    if (checkConnection) {
        // If there is a connection, show "Disconnect" button
        connectButton = (
            <button
                className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                onClick={(e) => {
                    if (user) {
                        handleDeleteConnection(e, user.id, nurse.userId);
                    } else {
                        nav(`/login`);
                    }
                }}
            >
                Disconnect
            </button>
        );
    } else if (checkSent) {
        // If there is a connection request sent, show "Cancel" button
        connectButton = (
            <button
                className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                onClick={(e) => {
                    if (user) {
                      handleCancelConnection(e, user?.id, nurse.userId)
                    } else {
                        {() => nav(`/login`)}
                    }}}
            >
                Cancel
            </button>
        );
    } else if (checkRequest) {
        // If there is a connection request received, show "Accept" and "Reject" buttons
        connectButton = (
            <div className="flex space-x-4">
                <button
                    className="btn text-lg w-20 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                    onClick={(e) => {
                        if (user) {
                          handleAcceptConnection(e, user?.id, nurse.userId);
                        } else {
                          nav(`/login`);
                        }
                    }}
                >
                    Accept
                </button>
                <button
                    className="btn text-lg w-20 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                    onClick={(e) => {
                        if (user) {
                          handleRejectConnection(e, nurse.userId, user?.id);nurse.userId
                        } else {
                          nav(`/login`);
                        }
                    }}
                >
                    Reject
                </button>
            </div>
        );
    } else {
        // If there is no connection or request, show "Connect" button
        connectButton = (
            <button
                className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
                onClick={(e) => {
                    if (user) {
                        handleSendConnection(e, user.id, nurse.userId);
                    } else {
                        nav(`/login`);
                    }
                }}
            >
                Connect
            </button>
        );
    }

    return (
        <div className="flex flex-col justify-start items-center w-full h-fit md:h-[80vh] border-b-2">
            <div className="h-[50vh] md:h-3/5 w-full flex justify-center items-center">
                <img
                    src={nurse?.bannerPicture}
                    className="h-full object-cover w-full"
                    alt="Nurse's Profile Banner"
                />
            </div>
            <div className="h-2/5 flex md:flex-row flex-col w-full justify-center items-center md:items-start pt-20">
                <div className="flex flex-col p-10 h-full justify-between">
                    <span className="flex justify-center items-center text-2xl gap-1">
                        <AiOutlineMail />{" "}
                        <span className="text-xl">{nurse?.email}</span>
                    </span>
                    <span className="flex w-full justify-between text-4xl">
                        <BsFacebook className="hover:text-[#00CEC8] hover:scale-105 transition-all duration-200 ease-in" />
                        <BsTwitter className="hover:text-[#00CEC8]  hover:scale-105 transition-all duration-200 ease-in" />
                        <ImInstagram className="hover:text-[#00CEC8]  hover:scale-105 transition-all duration-200 ease-in" />
                    </span>
                </div>
                <div className="flex flex-col justify-between items-center h-1/2 gap-10 md:mx-auto">
                    <img
                        src={nurse?.profilePicture}
                        className="object-cover absolute top-[350px] border-8 rounded-full shadow-lg border-white"
                        alt="Nurse's Profile Picture"
                    />
                    <span className="text-5xl font-bold flex flex-col text-center">
                        {nurse?.firstName} {nurse?.lastName}
                        <span className="text-lg font-normal text-slate-500 w-full text-center">
                            @{nurse?.username}
                        </span>
                    </span>
                    <div>
                        <span className="flex justify-center items-center text-3xl">
                            {nurse?.specialization}
                        </span>
                        <span className="flex justify-center items-center">
                            <ImLocation className="mr-1" />
                            {nurse?.country}, {nurse?.city}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-between items-center p-10">
                    
                    <span className="flex justify-center items-center text-2xl cursor-pointer"
                        onClick={() => nav(`/connection/${nurse?.userId}`)}>
                        <BsFillPersonFill /> <strong>{(nurse?.connections || []).length || 0}</strong>&nbsp; connections
                    </span>
                    {user?.id === nurse?.userId && (
                        <button
                            className="btn rounded-full text-[#176B87] hover:text-[#00CEC8] bg-white shadow-lg"
                            onClick={() => nav(`/nurse/edit/${user.id}`)}
                        >
                            Edit Profile
                        </button>
                    )}
                    {user?.id !== nurse?.userId && (

                        <div className="flex flex-col w-full items-end">

                                {connectButton}

                                <div className="dropdown dropdown-end w-full flex flex-col items-end relative">

                                    <label tabIndex={0}>
                                        <button
                                            className="btn text-lg w-40 rounded-full bg-secondary text-white border-transparent shadow-inner drop-shadow-lg normal-case relative z-[2]"
                                        >
                                            More
                                        </button>
                                    </label>
                                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-[1] absolute right-0 top-10 mt-5">
                                        <li>
                                            {/* TODO: connect to message page */}
                                            <button>
                                                Message 
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => nav(`/nurse/recommendations/give/${nurse?.userId}`)}>
                                                Recommend
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => nav(`/nurse/recommendations/receive/${nurse?.userId}`)}>
                                                Request Recommendation
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NurseHeader
