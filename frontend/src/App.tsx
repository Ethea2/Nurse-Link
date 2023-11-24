import { useEffect } from "react"
import axios from "axios"
import { useAuth } from "./hooks/useAuth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import usePing from "./hooks/usePing"
import Layout from "./layouts/Layout"


//for chat

import ChatsPage from "./ChatsPage"
import { Context } from "./chatFunctions/context"

function App() {
    const { pingServer } = usePing()

    //for chat
    // const { user } = useContext(Context);

    useEffect(() => {
        const interval = setInterval(() => {
            // pingServer()
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            {/* <Layout /> */}
            <ChatsPage />
        </>
    )
}

export default App
