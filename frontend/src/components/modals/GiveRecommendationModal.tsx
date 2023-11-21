import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

export const GiveRecommendationSection=({
    show,
    setShow,
    name,
}:{
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    name: string
})=>{
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
                        
                        <div className="flex flex-col">
                            {/*title*/}
                            <span className="text-3xl font-bold text-[#053B50]">
                                Write a recommendation
                            </span>
                            {/*sub title*/}
                            <span className="text-xl  text-[#053B50] mt-1">
                                This recommendation will appear on {name}'s profile.
                            </span>
                        </div>
                       
                        {/* Relationship selection */}
                        <div className="mt-5">
                            <label htmlFor="relationship-type">
                                Relationship:
                            </label>
                            <select
                                id="relationship-type"
                                className="select select-bordered w-full mt-2"
                                
                                onChange={(e) => {
                                   // setDocumentType(e.target.value)
                                }

                                }
                            >
                                <option value="Relationship1">Relationship 1</option>
                                <option value="Relationship2">Relationship 2</option>
                                <option value="Relationship3">Relationship 3</option>
                            </select>
                        </div>
                        {/* Position selection */}
                        <div className="mt-5">
                            <label htmlFor="position-type">
                                Position
                            </label>
                            <select
                                id="position-type"
                                className="select select-bordered w-full mt-2"
                                
                                onChange={(e) => {
                                   // setDocumentType(e.target.value)
                                }

                                }
                            >
                                <option value="Position1">Position 1</option>
                                <option value="Position2">Position 2</option>
                                <option value="Position3">Position 3</option>
                            </select>
                        </div>
                        {/* Input field for recommendation */}
                        <div className="mt-5">
                            <label htmlFor="add-reco">Add Recommendation</label>
                            <input
                                type="text"
                                id="add-reco"
                                className="input input-bordered w-full mt-2"
                                //onChange = {(e) => setDocumentName(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex w-full justify-end mt-5 gap-4">
                            <button
                                className="btn"
                                onClick={() => {
                                    //reset()
                                    setShow(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                id = "submit-document-button"
                                className="btn"
                                //onClick={(e) => handleSave(e)}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}