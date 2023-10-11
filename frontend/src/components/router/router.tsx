import { RouteType } from "../../types/routeTypes/routeType"
import Landing from "../../pages/landing/Landing"
import Homepage from "../../pages/homepage/Homepage"
import RegisterPage from "../../pages/register/RegisterPage"
import LoginPage from "../../pages/login/LoginPage"
import NurseProfile from "../../pages/profile/NurseProfile"

const routes: Array<RouteType> = [
    { path: "/", element: <Landing /> },
    { path: "/homepage", element: <Homepage />, name: "Homepage" },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/nurse-profile", element: <NurseProfile /> },
]

export default routes
