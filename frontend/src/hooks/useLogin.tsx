import { useState } from "react"
import axios from "axios"

const useLogin = () => {
    const [state, setState] = useState<string | null>(null)

    const login = async (username: string, password: string) => {
        try {
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
                .then(() => setState("Success"))
                .catch(() => setState("Error"))

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
        } catch (error) {
            console.error(error)
            setState("Error")
        }
    }

    return { login, state }
}

export default useLogin
