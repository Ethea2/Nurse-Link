import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"

const useConnections = () =>{
    const toastID = useRef<Id>()
    const [state, setState] = useState<string>("")
    
    const acceptConnection = async (
        senderId: String,
        receiverId: String
    ) => {
        await axios
            .post(
            import.meta.env.VITE_API_URL + "/api/nurse/connection/acceptNurseConnection",
            {
                senderId,
                receiverId
            },
            {
                withCredentials: true
            }

        )
        .then((res) => {
            setState("success")
            toast.update(toastID.current ?? "", {
                render: res.data.message,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "success",
                isLoading: false,
            })
        })
        .catch((e) => {
            setState("error")
            toast.update(toastID.current ?? "", {
                render: e.response?.data?.message ?? e.message,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "error",
                isLoading: false,
            })
        })
        return state
    }

    const rejectConnection = async (
        senderId: String,
        receiverId: String
        ) => {
            await axios({
                method: "post",
                data: {
                    senderId,
                    receiverId
                }
    
            })
            .then(() => {
    
            })
            .catch((e) => {
                
            })
    
        }

    const sendConnection = async (
        senderId: String,
        receiverId: String
        ) => {
            await axios({
                method: "post",
                data: {
                    senderId,
                    receiverId
                },
                withCredentials: true,
                url: import.meta.env.VITE_API_URL + "/api/nurse/connection/sendNurseConnection",
            })
        .then((res) => {
            setState("success")
            toast.update(toastID.current ?? "", {
                render: res.data.message,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "success",
                isLoading: false,
            })
        })
        .catch((e) => {
            setState("error")
            toast.update(toastID.current ?? "", {
                render: e.response?.data?.message ?? e.message,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "error",
                isLoading: false,
            })
        })
        return state
        }
        return {acceptConnection, rejectConnection, sendConnection, state}
}

export default useConnections