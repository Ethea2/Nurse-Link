const NURSE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323513/nurse-link/hg2citsfu5ozehpviv2q.png"
const MALE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323502/nurse-link/mfc27jcjtogg6yi3k6fm.png"
const NOTE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323493/nurse-link/zixw7renunci3nqlgzeh.png"

const FeaturesSection = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="h-[70vh] w-full flex justify-center items-center p-20">
                <div className="w-96 h-96 rounded-full">
                    <img src={NURSE_ASSET} className="w-full h-full" />
                </div>
                <div className="pl-10 w-[50%] flex flex-col text-[#053B50] items-center">
                    <span className="text-5xl font-bold text-center">
                        Find the right{" "}
                        <span className=" font-extrabold">job </span>with
                        NurseLink
                    </span>
                    <span className="text-3xl text-center font-thin text-[#A1AEB7]">
                        Discover your perfect job in the healthcare field with
                        NurseLink's assistance.
                    </span>
                    <button className="btn md:w-1/4 rounded-full mt-6 bg-[#176B87] hover:bg-[#00CEC8] border-transparent shadow-inner drop-shadow-lg text-white">
                        Find Jobs
                    </button>
                </div>
            </div>
            <div className="divider" />
            <div className="h-[70vh] w-full flex justify-center items-center p-20">
                <div className="pr-10 w-[50%] flex flex-col text-[#053B50] items-center">
                    <span className="text-5xl font-bold text-center">
                        <span className=" font-extrabold">Connections </span>
                        made fast and easy
                    </span>
                    <span className="text-3xl text-center font-thin text-[#A1AEB7]">
                        Effortlessly and swiftly create valuable connections
                        with ease, thanks to our user-friendly platform.
                    </span>
                    <button className="btn md:w-1/4 rounded-full mt-6 bg-[#176B87] hover:bg-[#00CEC8] border-transparent shadow-inner drop-shadow-lg text-white">
                        Find Connections
                    </button>
                </div>

                <div className="w-96 h-96 rounded-full bg-[#176B87]">
                    <img src={MALE_ASSET} className="w-full h-full" />
                </div>
            </div>
            <div className="divider" />
            <div className="h-[70vh] w-full flex justify-center items-center p-20">
                <div className="w-96 h-96 rounded-full">
                    <img src={NOTE_ASSET} className="w-full h-full" />
                </div>
                <div className="pl-10 w-[50%] flex flex-col text-[#053B50] items-center">
                    <span className="text-5xl font-bold text-center">
                        Be part of a growing{" "}
                        <span className=" font-extrabold">community</span>
                    </span>
                    <span className="text-3xl text-center font-thin text-[#A1AEB7]">
                        Become an integral part of our rapidly growing
                        community, where you can actively engage and contribute
                        to its ongoing development for a truly rewarding and
                        enriching journey.
                    </span>
                    <button className="btn md:w-1/4 rounded-full mt-6 bg-[#176B87] hover:bg-[#00CEC8] border-transparent shadow-inner drop-shadow-lg text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection
