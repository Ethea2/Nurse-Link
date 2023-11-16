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
                        Hi! I'm {nurse?.firstName} {nurse?.lastName}
                    </div>
                    <div className="text-lg body py-4">
                        {nurse?.about}
                    </div>
                    <div className="video w-full">
                        <iframe
                            className="w-full h-96 rounded-2xl border"
                            src={nurse?.video}
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
                <div className="educationDetails font-pt-sans text-lg">
                    {nurse?.credentials.education.map((education, index) => (
                        <div key={index} className="pt-5">
                            <p className="institutionName font-bold"> {education.institutionName} </p>
                            <p className="degree font-normal"> {education.degree} </p>
                            <p className="fieldStudy font-normal"> {education.fieldStudy} </p>
                            <p className="date font-normal opacity-60">
                            {new Date(education.startDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}&nbsp; - &nbsp;
                            {
                                education.isCurrent ? "Present" :
                                new Date(education.endDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                }) 
                            } 
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Experience</div>
                <div className="experienceDetails font-pt-sans text-lg">
                    {nurse?.credentials.experience.map((experience, index) => (
                            <div key={index} className="pt-5 flex">
                                <div className="leftContainer w-1/3">
                                    <p className="institutionName font-bold"> {experience.institutionName} </p>
                                    <p className="role font-normal ">  {experience.role}  </p>
                                    <p className="employmentType font-normal ">  {experience.employmentType} </p>
                                    <p className="date font-normal opacity-60">
                                        {new Date(experience.startDate).toLocaleDateString('en-US', {
                                            year: 'numeric'
                                        })}
                                        &nbsp; - &nbsp;
                                        {
                                            experience.isCurrent ? "Present" :
                                            new Date(experience.endDate).toLocaleDateString('en-US', {
                                                year: 'numeric'
                                            }) 
                                        }
                                    </p>
                                </div>
                                <div className="rightContainer">
                                    <p className="description"> {experience.description} </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="volunteering flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Volunteering</div>
                <div className="volunteeringDetails font-pt-sans text-lg">
                {nurse?.credentials.volunteering.map((volunteering, index) => (
                            <div key={index} className="pt-5 flex">
                                <div className="leftContainer w-1/3">
                                    <p className="institutionName font-bold"> {volunteering.institutionName} </p>
                                    <p className="role font-normal ">  {volunteering.role}  </p>
                                    <p className="date font-normal opacity-60">
                                        {new Date(volunteering.startDate).toLocaleDateString('en-US', {
                                            year: 'numeric'
                                        })}
                                        &nbsp; - &nbsp;
                                        {
                                            volunteering.isCurrent ? "Present" :
                                            new Date(volunteering.endDate).toLocaleDateString('en-US', {
                                                year: 'numeric'
                                            }) 
                                        }
                                    </p>
                                </div>
                                <div className="rightContainer">
                                    <p className="description"> {volunteering.description} </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="licenses flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Licenses</div>
                <div className="licensesDetails flex font-pt-sans text-lg">
                    {nurse?.credentials.document.map((document, index) => (
                        document.type == 'license' && (
                            <div key={index} className="pt-5 flex">
                                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">{document.name}</p>
                        <p className="description font-normal "> {document.description} </p>
                        <p className="institutionName font-normal "> {document.institutionName} </p>
                        <p className="date font-normal opacity-60 pt-5">
                            Issued &nbsp;
                            {new Date(document.issuanceDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                        </div>
                    </div>
                        )      
                    ))}
                </div>
            </div>
            <div className="certifications flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Certifications</div>
                <div className="cetificationsDetails flex font-pt-sans text-lg">
                {nurse?.credentials.document.map((document, index) => (
                        document.type == 'certification' && (
                            <div key={index} className="pt-5 flex">
                                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">{document.name}</p>
                        <p className="description font-normal "> {document.description} </p>
                        <p className="institutionName font-normal "> {document.institutionName} </p>
                        <p className="date font-normal opacity-60 pt-5">
                            Issued &nbsp;
                            {new Date(document.issuanceDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                        </div>
                    </div>
                        )      
                    ))}
                </div>
            </div>
            <div className="awards flex flex-col w-full border-2 px-10 py-8 rounded-lg mb-5 text-outline-text bg-white">
                <div className="title text-3xl font-bold">Awards</div>
                <div className="awardsDetails flex font-pt-sans text-lg">
                {nurse?.credentials.document.map((document, index) => (
                        document.type == 'award' && (
                            <div key={index} className="pt-5 flex">
                                    <div className="leftContainer pr-5">
                        <PiFileBold className="w-6 h-8" />
                    </div>
                    <div className="rightContainer w-1/8">
                        <p className="name font-bold">{document.name}</p>
                        <p className="description font-normal "> {document.description} </p>
                        <p className="institutionName font-normal "> {document.institutionName} </p>
                        <p className="date font-normal opacity-60 pt-5">
                            Issued &nbsp;
                            {new Date(document.issuanceDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                        </div>
                    </div>
                        )      
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
