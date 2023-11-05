import { useEffect, useState } from "react"
import { ChangeBannerPhoto, ChangeProfilePhoto } from "../modals/modals"
import useDynamicFetch from "../../hooks/useDynamicFetch"
import useNurseEdit from "../../hooks/useNurseEdit"

const NurseDocumentEditComponent = ({ userId }: { userId: string }) => {

    return (
        <div
            id="nurse-edit-container"
            className="w-full h-fit flex flex-col p-10"
        >
            <div
                id="nurse-edit-title-container"
                className="text-6xl font-bold text-[#053B50] flex items-center"
            >
                <span>Documents</span>
                <button
                    className="btn ml-auto bg-[#176B87] hover:bg-[#00CEC8] text-white rounded-full"
                    onClick={() => {
                        // Implement functionality to add a new document
                    }}
                >
                    Add Section
                </button>
            </div>
            <div id="nurse-edit-details" className="w-full h-full">
                {/* The rest of your code for managing nurse documents */}
            </div>
        </div>
    )
}

export default NurseDocumentEditComponent
