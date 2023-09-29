import { useLocation } from "react-router"
import { useState, useEffect } from "react"
import MainLayout from "./layouts/mainLayout/MainLayout"
import RegisterLayout from "./layouts/registerLayout/RegisterLayout"

function App() {
    const location = useLocation()
    const [noNavbar, setnoNavbar] = useState<Boolean>(false)
    useEffect(() => {
        if (location.pathname.includes("register")) {
            setnoNavbar(true)
        } else {
            setnoNavbar(false)
        }
    }, [location])
    return <>{noNavbar ? <RegisterLayout /> : <MainLayout />}</>
}

export default App
