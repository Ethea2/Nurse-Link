import LoginCard from "../../components/loginPage/LoginCard"

const LOGIN_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698325496/nurse-link/piwteaqrp6snlpjzc1ue.png"

const LoginPage = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-end items-center">
                <img
                    src={LOGIN_ASSET}
                    className="object-none md:object-contain w-full h-full object-left absolute"
                />
                <LoginCard />
            </div>
        </>
    )
}

export default LoginPage
