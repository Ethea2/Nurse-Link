import { useEffect, useState } from "react"
import { AddDocumentSection } from "../modals/AddDocumentModal.tsx"
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FaMagnifyingGlass } from "react-icons/fa6"
const NurseDocumentEditComponent = ({ userId }: { userId: string }) => {
    const [showDocumentModal, setShowDocumentModal] = useState<boolean>(false)
    const [changed, setChanged] = useState<boolean>(false)
    const { data: nurse, loading } = useDynamicFetch(
        `/api/nurse/${userId}`,
        changed
    )

    const documentsArray = nurse?.credentials.document || []

    const [resume, setResume] = useState<string>()
    const [resumeLink, setResumeLink] = useState<string>()

    const [license, setLicense] = useState<string>()
    const [licenseLink, setLicenseLink] = useState<string>()

    const [certificate, setCertificate] = useState<string>()
    const [certificateLink, setCertificateLink] = useState<string>()

    const [award, setAward] = useState<string>()
    const [awardLink, setAwardLink] = useState<string>()

    useEffect(() => {
        if (!loading && documentsArray.length > 0) {
            // Check if the nurse has documents
            const documentTypes = {
                Resume: "Resume",
                License: "License",
                Certificate: "Certificate",
                Award: "Award",
            }

            const documentLinks = {
                Resume: { link: "", name: "" },
                License: { link: "", name: "" },
                Certificate: { link: "", name: "" },
                Award: { link: "", name: "" },
            }

            documentsArray.forEach((document) => {
                const type = document.type
                const name = document.name
                const link = document.link
                const mappedType = documentTypes[type]
                console.log("mappedType: " + mappedType)
                if (mappedType) {
                    documentLinks[mappedType].link = link
                    documentLinks[mappedType].name = name
                }
            })

            setResume(documentLinks.Resume.name || "")
            setResumeLink(documentLinks.Resume.link || "")

            setLicenseLink(documentLinks.License.link || "")
            setLicense(documentLinks.License.name || "")

            setCertificate(documentLinks.Certificate.name || "")
            setCertificateLink(documentLinks.Certificate.link || "")

            setAward(documentLinks.Award.name || "")
            setAwardLink(documentLinks.Award.link || "")
        }
    }, [loading, documentsArray])

    console.log(documentsArray)
    return (
        <div
            id="nurse-edit-container"
            className="w-full h-fit flex flex-col p-10"
        >
            <div
                id="nurse-edit-title-container"
                className="text-6xl font-bold text-[#053B50] flex items-center mb-6"
            >
                <span>Documents</span>
                <button
                    className="btn ml-auto bg-[#176B87] hover:bg-[#00CEC8] text-white rounded-full normal-case"
                    onClick={() => {
                        setShowDocumentModal(true)
                    }}
                >
                    Add Section
                </button>
            </div>
            <div
                id="nurse-resume"
                className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                    Resume
                    <button
                        className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={40}
                            style={{ color: "black" }}
                        />{" "}
                        {/* Set color to black using inline style */}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-5">
                    {resume ? (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">{`Resume: ${resume}`}</p>
                        </div>
                    ) : (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">
                                No resume added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div
                id="nurse-license"
                className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                    License
                    <button
                        className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={40}
                            style={{ color: "black" }}
                        />{" "}
                        {/* Set color to black using inline style */}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-5">
                    {license ? (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50] rounded">
                                <a
                                    className={`text-[#053B50] ${
                                        licenseLink
                                            ? "hover:text-blue-500"
                                            : "text-gray-400 cursor-not-allowed"
                                    }`}
                                    href={licenseLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {license}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50">
                                No license added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div
                id="nurse-documents"
                className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                    Documents
                    <button
                        className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={40}
                            style={{ color: "black" }}
                        />
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-5">
                    {certificate ? (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">
                                <a
                                    className={`text-[#053B50] ${
                                        certificateLink
                                            ? "hover:text-blue-500"
                                            : "text-gray-400 cursor-not-allowed"
                                    }`}
                                    href={certificateLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {certificate}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">
                                No certificate added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div
                id="nurse-awards"
                className="w-full p-4 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-[#053B50] ml-4 flex items-center">
                    Awards
                    <button
                        className="ml-auto hover:bg-[#176B87] text-white rounded-full p-1"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={40}
                            style={{ color: "black" }}
                        />{" "}
                        {/* Set color to black using inline style */}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-5">
                    {award ? (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">
                                <a
                                    className={`text-[#053B50] ${
                                        awardLink
                                            ? "hover:text-blue-500"
                                            : "text-gray-400 cursor-not-allowed"
                                    }`}
                                    href={awardLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {award}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex ml-4 items-center">
                            <p className="text-[#053B50]">
                                No awards added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <AddDocumentSection
                setShow={setShowDocumentModal}
                show={showDocumentModal}
                setChanged={setChanged}
            />
        </div>
    )
}

export default NurseDocumentEditComponent
