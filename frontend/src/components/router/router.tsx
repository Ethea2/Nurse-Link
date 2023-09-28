import { RouteType } from "../../types/routes/routeType"
import Landing from '../../pages/landing/Landing'
import Homepage from "../../pages/homepage/Homepage"
import RegisterPage from "../../pages/register/RegisterPage"

const routes: Array<RouteType> = [
    {path: '/', element: <Landing />},
    {path: '/homepage', element: <Homepage />},
    {path: '/register', element: <RegisterPage />}
]

export default routes