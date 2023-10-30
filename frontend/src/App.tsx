import { useEffect } from "react"
import usePing from "./hooks/usePing"
import Layout from "./layouts/Layout"
import { useAuth } from "./hooks/useAuth"

function App() {
    const { user } = useAuth()
    const { pingServer } = usePing()
    useEffect(() => {
        pingServer()
    }, [user])
    return (
        <>
            <Layout />
        </>
    )
}

export default App
