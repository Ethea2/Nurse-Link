import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"

const useLogin = () => {
    const [state, setState] = useState<string | null>(null)
    const toastID = useRef<Id>()

    const login = async (username: string, password: string) => {
        toastID.current = toast.loading("Logging in...")
        //ported to axios
        await axios({
            method: "post",
            data: {
                username,
                password,
            },
            withCredentials: true,
            url: import.meta.env.VITE_API_URL + "/api/nurse/login",
        })
            .then((data) => {
                setState("Success")
                console.log(data)
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

        // const response = await fetch(import.meta.env.VITE_API_URL + "/api/nurse/login", {
        //   method: "POST",
        //   body: JSON.stringify({ username, password }),
        //   credentials: "include",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        // if (response.ok) {
        //   setState("Success");
        // } else {
        //   setState("Error");
        // }
    }

    return { login, state }
}

export default useLogin
