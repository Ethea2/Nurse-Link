import { useState } from "react"
import { BiSolidCloudUpload } from "react-icons/bi"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import usePhotoChange from "../../hooks/usePhotoChange"

export const ChangeProfilePhoto = ({
    show,
    setShow,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File>()
    const { profileUpload } = usePhotoChange()
    const handleInitialFile = () => {
        if (imageName) return
        const profileInput = document.querySelector(
            "#profile-input"
        ) as HTMLElement
        if (profileInput) {
            profileInput.click()
        }
    }
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            setImageName(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const reset = () => {
        const profileInput = document.getElementById(
            "profile-input"
        ) as HTMLInputElement
        setImageName(undefined)
        profileInput.value = ""
    }

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        if (image) {
            const form = new FormData()
            form.append("img", image)
            form.append("_method", "PATCH")
            try {
                const state = await profileUpload(form)
                console.log(state)
            } catch (e) {
                console.log(e)
                toast("Something went wrong!", { type: "error" })
            }
        } else {
            toast("Please add an image first", { type: "error" })
        }
    }

    return (
        <>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeIn",
                    }}
                    className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
                >
                    <div
                        className="absolute w-full h-screen bg-[#053B50]/70"
                        onClick={() => setShow(false)}
                    />
                    <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                        <span className="text-3xl font-bold text-[#053B50]">
                            {imageName ? "Preview" : "Change Profile Photo"}
                        </span>
                        <div
                            className="w-full h-96 border-2 mt-4 flex justify-center items-center text-9xl text-[#00CEC8] border-dashed border-[#00CEC8] rounded-lg"
                            onClick={handleInitialFile}
                            
                        >
                            <input
                                type="file"
                                id="profile-input"
                                className="file-input file-input-bordered file-input-info w-full "
                                hidden
                                onChange={handleFile}
                            />
                            {imageName ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeIn",
                                    }}
                                    className="w-full h-full bg-[#053B50] flex flex-col justify-center items-center rounded-lg"
                                >
                                    <div className="w-64 h-64 border-8 border-white shadow-b-2xl bg-white items-center rounded-full overflow-hidden">
                                        <img
                                            src={imageName}
                                            className="object-center object-cover w-full h-full"
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex flex-col w-full justify-center items-center">
                                    <BiSolidCloudUpload />
                                    <span className="text-2xl">
                                        Drag your photo here or press me!
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="flex w-full justify-end mt-5 gap-4">
                            <button
                                className="btn"
                                onClick={() => {
                                    reset()
                                    setShow(false)
                                }}
                            >
                                Cancel
                            </button>
                            {imageName && (
                                <motion.button
                                    className="btn"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeIn",
                                    }}
                                    onClick={reset}
                                >
                                    Reset
                                </motion.button>
                            )}
                            <button
                                className="btn"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}