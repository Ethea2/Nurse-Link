const HERO_IMG =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323405/nurse-link/j29qifxacpcz2hbrjflt.png"

const HeroSection = () => {
    return (
        <div className="w-full h-screen bg-[#053B50] flex justify-center items-center">
            <div className=" text-white w-2/3 flex flex-col md:gap-4">
                <p className="text-4xl md:text-6xl font-bold">
                    Join the future of
                </p>
                <p className="text-4xl md:text-6xl font-bold">
                    healthcare recruitment.
                </p>
                <span className="text-2xl text-justify w-full font-thin">
                    Connecting professionals through opportunities.
                </span>
                <button className="btn md:w-1/6 rounded-full mt-6 bg-[#176B87] border-transparent shadow-inner drop-shadow-lg text-white">
                    Get Started
                </button>
            </div>
            <img
                src={HERO_IMG}
                className="invisible md:visible object-contain w-full h-full object-right absolute"
            />
        </div>
    )
}

export default HeroSection
