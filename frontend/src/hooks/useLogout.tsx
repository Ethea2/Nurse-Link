import { useRef, useState } from "react";
import axios from "axios";
import { Id, toast } from "react-toastify";
import { useAuth } from "./useAuth";


const useLogout = () => {
    const [state, setState] = useState<string | null>(null);
    const { dispatch } = useAuth();
    const toastID = useRef<Id>();

    const logout = async () => {
        toastID.current = toast.loading("Logging out...");

        // Perform the logout logic, e.g., sending a request to your server to invalidate the session.
        try {
            // Example axios request to log out, adjust as per your server's API
            await axios({
                method: "post",
                withCredentials: true,
                url: import.meta.env.VITE_API_URL + "/api/auth/logout",
            });


            localStorage.removeItem("user");


            dispatch?.({ type: "LOGOUT" });

            toast.update(toastID.current ?? "", {
                render: "Successfully Logged out!",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "success",
                isLoading: false,
            });
        } catch (e : any) {
            const res = e.response.data.message;
            toast.update(toastID.current ?? "", {
                render: res,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "error",
                isLoading: false,
            });
            setState("Error");
        }
    }

    return { logout, state };
}

export default useLogout;
