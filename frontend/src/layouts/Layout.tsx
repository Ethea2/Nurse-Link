import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import RegisterLayout from "./registerLayout/RegisterLayout"
import MainLayout from "./mainLayout/MainLayout"
const Layout = () => {
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

export default Layout
