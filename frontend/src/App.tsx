import { useLocation } from "react-router"
import { useState, useEffect } from "react"
import MainLayout from "./layouts/mainLayout/MainLayout"
import RegisterLayout from "./layouts/registerLayout/RegisterLayout"

function App() {
    const location = useLocation()
    const [noLayout, setNoLayout] = useState<Boolean>(false)
    useEffect(() => {
        if (location.pathname.includes("register")) {
            setNoLayout(true)
        } else {
            setNoLayout(false)
        }
    }, [location])
    return <>{noLayout ? <RegisterLayout /> : <MainLayout />}</>
}

export default App
