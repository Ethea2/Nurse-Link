import axios from "axios"
import { useRef, useState } from "react"
import { toast, Id } from "react-toastify"
const usePhotoChange = () => {
    const toastID = useRef<Id>()
    const [state, setState] = useState<string>()
    const profileUpload = async (data: FormData) => {
        setState("loading")
        toastID.current = toast.loading("Uploading your photo now...")
        axios
            .post(import.meta.env.VITE_API_URL + "/api/nurse/edit/profilePhoto", data, {
                withCredentials: true,
            })
            .then((datum) => {
                setState("success")
                toast.update(toastID.current ?? "", {
                    render: datum.data.message,
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
                    render: e.data.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                })
            })
        return state
    }
    return { profileUpload }
}

export default usePhotoChange
