import { RouteType } from "../../types/routes/routeType"
import Landing from "../../pages/landing/Landing"
import Homepage from "../../pages/homepage/Homepage"
import RegisterPage from "../../pages/register/RegisterPage"
import LoginPage from "../../pages/login/LoginPage"

const routes: Array<RouteType> = [
    { path: "/", element: <Landing /> },
    { path: "/homepage", element: <Homepage />, name: "Homepage" },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
]

export default routes
