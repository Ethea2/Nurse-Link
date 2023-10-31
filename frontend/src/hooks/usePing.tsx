import axios from "axios"
import { toast } from "react-toastify"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router"
import { useRef } from "react"

const usePing = () => {
    const { dispatch } = useAuth()
    const nav = useNavigate()

    const pingServer = () => {
        console.log("called")
        axios
            .get(import.meta.env.VITE_API_URL + "/api/auth/ping", {
                withCredentials: true,
            })
            .then()
            .catch((e) => {
                if (!e.response.data.logged) {
                    dispatch?.({ type: "LOGOUT" })
                    nav("/login")
                    toast(e.response?.data?.message ?? e.message, {
                        type: "error",
                    })
                }
            })
    }
    return { pingServer }
}

export default usePing
