import { NurseType } from "../../types/nurseTypes/nurseType";
import { useAuth } from "../../hooks/useAuth";

import { PiFileBold } from "react-icons/pi";
import { useEffect } from "react";

const ProfileDetails = ({ nurse }: { nurse: NurseType }) => {
    useEffect(() => {
        console.log(nurse);
    });

    return (
        <div className="detailsContainer flex flex-col w-full rounded-lg font-open-sans">
            {nurse?.about && (
                <div className="introduction flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 bg-white">
                    {/* {nurse?.about} */}
                    <div className="title text-3xl font-bold">
                        {nurse?.firstName} {nurse?.lastName}
                    </div>
                    <div className="text-lg body py-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed
                        do eiusmod tempor incididunt uelit, sed do eiusmod tempor. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt.
                    </div>
                    <div className="video w-full">
                        <iframe
                            className="w-full h-96 rounded-2xl border"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1ZZfmVr8WRK9qpYh"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            )}
            <div className="education flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Education</div>
                <div className="educationDetails font-pt-sans text-lg pt-5">
                    <p className="institutionName font-bold">
                        {"Institution Name"}
                    </p>
                    <p className="degree font-normal">Degree</p>
                    <p className="fieldStudy font-normal">Field of Study</p>
                    <p className="date font-normal opacity-60">
                        {"Start Date - End Date"}
                    </p>
                </div>
            </div>
            <div className="experience flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Experience</div>
                <div className="experienceDetails flex font-pt-sans text-lg pt-5">
                    <div className="leftContainer w-1/2 pr-10">
                        <p className="institutionName font-bold">
                            {" "}
                            Institution Name
                        </p>
                        <p className="role font-normal ">Role</p>
                        <p className="employmentType font-normal ">
                            {" "}
                            Employment Type{" "}
                        </p>
                        <p className="date font-normal opacity-60">
                            {" "}
                            Start Date - End Date
                        </p>
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="volunteering flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Volunteering</div>
                <div className="experienceDetails flex font-pt-sans text-lg pt-5">
                    <div className="leftContainer w-1/2 pr-10">
                        <p className="institutionName font-bold">
                            {" "}
                            Institution Name
                        </p>
                        <p className="role font-normal ">Role</p>
                        <p className="date font-normal opacity-60">
                            {" "}
                            Start Date - End Date
                        </p>
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="licenses flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Licenses</div>
                <div className="experienceDetails flex font-pt-sans text-lg pt-5">
                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">License Name</p>
                        <p className="description font-normal ">
                            {" "}
                            Description{" "}
                        </p>
                        <p className="institutionName font-normal ">
                            {" "}
                            Institution Name{" "}
                        </p>
                        <p className="date font-normal opacity-60 pt-5">
                            {" "}
                            Issued "Date"
                        </p>
                    </div>
                </div>
            </div>
            <div className="certifications flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Certifications</div>
                <div className="experienceDetails flex font-pt-sans text-lg pt-5">
                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">License Name</p>
                        <p className="description font-normal ">
                            {" "}
                            Description{" "}
                        </p>
                        <p className="institutionName font-normal ">
                            {" "}
                            Institution Name{" "}
                        </p>
                        <p className="date font-normal opacity-60 pt-5">
                            {" "}
                            Issued "Date"
                        </p>
                    </div>
                </div>
            </div>
            <div className="awards flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Awards</div>
                <div className="experienceDetails flex font-pt-sans text-lg pt-5">
                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">License Name</p>
                        <p className="description font-normal ">
                            {" "}
                            Description{" "}
                        </p>
                        <p className="institutionName font-normal ">
                            {" "}
                            Institution Name{" "}
                        </p>
                        <p className="date font-normal opacity-60 pt-5">
                            {" "}
                            Issued "Date"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
