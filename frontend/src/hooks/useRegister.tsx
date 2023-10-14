import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"
import { Action } from "../contexts/AuthContext"

const useRegister = () => {
    const [state, setState] = useState<string | null>(null)
    const { dispatch } = useAuth()
    const toastID = useRef<Id>()

    const register = async (username: string, password: string, email: string, firstname: String, lastname: String, birthdate: String, gender: String, country: String, city: String, userType: String) => {
        toastID.current = toast.loading("Registering...")
        //ported to axios
        await axios({
            method: "post",
            data: {
                username,
                password,
                email,
                firstname,
                lastname,
                birthdate,
                gender,
                country,
                city,
                userType
            },
            withCredentials: true,
            url: import.meta.env.VITE_API_URL + "/api/auth/register",
        })
        // for registering: surmount this thingy
            .then((data) => {
                setState("Success")
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data.data));
                dispatch?.({type: "LOGIN", payload: data.data})
                toast.update(toastID.current ?? "", {
                    render: "Successfully Logged in!",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "success",
                    isLoading: false,
                })
            })
            .catch((e) => {
                const res = e.response.data.message
                toast.update(toastID.current ?? "", {
                    render: res,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
                setState("Error")
            })

    }

    return { register, state }
}

export default useRegister
