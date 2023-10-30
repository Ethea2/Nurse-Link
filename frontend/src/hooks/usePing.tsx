import axios from "axios"
import { toast } from "react-toastify"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router"
import { useRef } from "react"

const usePing = () => {
    const { dispatch, user } = useAuth()
    const nav = useNavigate()
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const pingServer = () => {
        if (user) {
            console.log(user)
            intervalRef.current = setInterval(() => {
                axios
                    .get(import.meta.env.VITE_API_URL + "/api/auth/ping")
                    .then()
                    .catch((e) => {
                        dispatch?.({ type: "LOGOUT" })
                        nav("/login")
                        toast(e.response?.data?.message ?? e.message, {
                            type: "error",
                        })
                    })
            }, 10000)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }

    return { pingServer }
}

export default usePing
