import { useRef, useState } from "react"
import axios from "axios"
import { Id, toast } from "react-toastify"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router"

const useAcceptConnection = () => {
    const toastID = useRef<Id>()

    const acceptNurseConnection = async (
        connectionSender: string, 
        connectionReceiver: string
    ) => {
        toastID.current = toast.loading("Sending Connection Request...")

        axios
            .post

    }
    return { acceptNurseConnection }
}