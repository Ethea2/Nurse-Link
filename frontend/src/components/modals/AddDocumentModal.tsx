import { useState } from "react"
import usePhotoChange from "../../hooks/usePhotoChange.tsx"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

export const AddDocumentSection = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { bannerUpload } = usePhotoChange()
    const [documentType, setDocumentType] = useState<string>("") // Default to "license"

    const [documentFile, setDocumentFile] = useState<File | undefined>()
    const [documentName, setDocumentName] = useState<string>("")
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
            const selectedImage = files[0]
            setImageName(selectedImage.name)
            setImage(selectedImage)
        }
    }

    const reset = () => {
        const profileInput = document.getElementById(
            "profile-input"
        ) as HTMLInputElement
        setImageName(undefined)
        setImage(undefined)
        setShow(false)
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
                await bannerUpload(form, setChanged, setShow)
            } catch (e) {
                console.log(e)
                toast("Something went wrong!", { type: "error" })
            }
        } else {
            toast("Please add an image first", { type: "error" })
        }
    }

    const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const files = e.dataTransfer.files
        if (files) {
            const selectedImage = files[0]
            setImageName(selectedImage.name)
            setImage(selectedImage)
        }
    }
    const handleDocumentUpload = async (e : React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = document.getElementById("document-upload");
        const label = document.getElementById("document-upload-label");
        const files = e.target.files;
        if (files && label && fileInput) {
            const selectedFile = files[0];
            console.log(selectedFile)
            setDocumentFile(selectedFile);
            setDocumentName(selectedFile.name);
            label.innerText = selectedFile.name;

        }
    };

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
                        className="absolute w-full h-screen bg-[#053B50]/60"
                        onClick={() => setShow(false)}
                    />
                    <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                        <span className="text-3xl font-bold text-[#053B50]">
                            {imageName ? "Preview" : "Add Document"}
                        </span>
                        {/* Document type selection */}
                        <div className="mt-5">
                            <label htmlFor="document-type">
                                Choose document type:
                            </label>
                            <select
                                id="document-type"
                                className="select select-bordered w-full mt-2"
                                value={documentType}
                                onChange={(e) =>
                                    setDocumentType(e.target.value)
                                }
                            >
                                <option value="license">License</option>
                                <option value="certificate">Certificate</option>
                                <option value="award">Award</option>
                            </select>
                        </div>
                        {/* Input fields for document details */}
                        <div className="mt-5">
                            <label htmlFor="document-name">Name:</label>
                            <input
                                type="text"
                                id="document-name"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="document-issuer">Issuer:</label>
                            <input
                                type="text"
                                id="document-issuer"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="document-issuance-date">
                                Issuance Date:
                            </label>
                            <input
                                type="text"
                                id="document-issuance-date"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>
                        <div className="mt-5">
                            <label
                                id = "document-upload-label"
                                htmlFor="document-upload"
                                className="mt-2 cursor-pointer"
                            >
                                Upload Document

                            </label>
                            <input
                                type="file"
                                id="document-upload"
                                className="btn file-input file-input-bordered file-input-info w-full"
                                hidden
                                onChange={(e) => handleDocumentUpload(e)}
                            />
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
