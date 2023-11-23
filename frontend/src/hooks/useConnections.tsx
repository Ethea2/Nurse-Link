import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"

const useConnections = () =>{
    const toastID = useRef<Id>()
    const [state, setState] = useState<string>("")
    
    const acceptConnection = async (
        accepterId: String,
        senderId: String
    ) => {
        toastID.current = toast.loading("Accepting Connection")
        await axios
            .post(
            import.meta.env.VITE_API_URL + "/api/nurse/connection/acceptNurseConnection",
            {
                accepterId,
                senderId
            },
            {
                withCredentials: true
            }

        )
        .then((res) => {
            toastID.current = toast.loading("Connection Successfully Accepted")
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
            console.log(e)
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
        rejecterId: String,
        rejecteeId: String
        ) => {
            toastID.current = toast.loading("Rejecting Connection Request")
            await axios({
                method: "post",
                data: {
                    rejecterId,
                    rejecteeId
                },
                withCredentials: true,
                url: import.meta.env.VITE_API_URL + "/api/nurse/connection/sendNurseConnection",
            })
            .then((res) => {
                toastID.current = toast.loading("Successfully Rejected Connection Request")
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
                console.log(e)
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

        const cancelConnection = async (
            senderId: String,
            receiverId: String
            ) => {
                toastID.current = toast.loading("Cancelling Connection Request")
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
                    toastID.current = toast.loading("Successfully Cancelled Connection Request")
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
                    console.log(e)
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

    const sendConnection = async (
        senderId: String,
        receiverId: String
        ) => {
            toastID.current = toast.loading("Sending Connection")
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
            toastID.current = toast.loading("Connection Successfully Sent")
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
        return {acceptConnection, rejectConnection, cancelConnection, sendConnection, state}
}

export default useConnections