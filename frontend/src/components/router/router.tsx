import { RouteType } from "../../types/routeTypes/routeType"
import Landing from "../../pages/landing/Landing"
import Homepage from "../../pages/homepage/Homepage"
import RegisterPage from "../../pages/register/RegisterPage"
import LoginPage from "../../pages/login/LoginPage"
import RegisterNurse from "../../pages/registerNurse/RegisterNurse"
import RegisterInstitute from "../../pages/registerInstitute/RegisterInstitute"
import Nurse from "../../pages/nurse/Nurse"
import Institute from "../../pages/institute/Institute"
import NurseEditPage from "../../pages/nurseEdit/NurseEditPage"
import NurseEditDocumentPage from "../../pages/nurseEdit/NurseEditDocumentPage.tsx"
import NurseEditBackgroundPage from "../../pages/nurseEdit/NurseEditBackgroundPage.tsx"
import NurseEditContactPage from "../../pages/nurseEdit/NurseEditContactPage.tsx"
import NurseRecoRecievePage from "../../pages/recommendations/NurseRecoReceivePage.tsx"
import NurseRecoGivePage from "../../pages/recommendations/NurseRecoGivePage.tsx"
import NurseRecoRequestsPage from "../../pages/recommendations/NurseRecoRequestsPage.tsx"
import Notifs from "../../pages/notifications/Notifs.tsx"

const routes: Array<RouteType> = [
    { path: "/", element: <Landing /> },
    { path: "/homepage", element: <Homepage />, name: "NurseLink" },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register-nurse", element: <RegisterNurse /> },
    { path: "/register-institute", element: <RegisterInstitute /> },
    { path: "/nurse/:userId", element: <Nurse /> },
    { path: "/nurse/edit/:userId", element: <NurseEditPage /> },
    { path: "/institute/:userId", element: <Institute /> },
    { path: "/nurse/edit/documents/:userId", element: <NurseEditDocumentPage /> },
    { path: "/nurse/edit/background/:userId", element: <NurseEditBackgroundPage /> },
    { path: "/nurse/edit/contact/:userId", element: <NurseEditContactPage /> },
    { path: "/nurse/recommendations/receive/:userId", element: <NurseRecoRecievePage /> },
    { path: "/nurse/recommendations/give/:userId", element: <NurseRecoGivePage /> },
    { path: "/nurse/recommendations/requests/:userId", element: <NurseRecoRequestsPage /> },
    { path: "/nurse/notifications/:userId", element: <Notifs /> }
]

export default routes
