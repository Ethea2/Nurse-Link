import { Link } from "react-router-dom"
import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { Suspense } from "react"
import NurseCard from "../../components/cards/NurseCard"
import ReqCard from "../../components/cards/ReqCard"

const Notifs = () => {
    const { userId } = useParams()
    const { data: nurseId, loading } = useFetch(`/api/nurse/${userId}`)
    return (
        <div className="flex md:p-20 w-full min-h-screen">
            <div className="flex flex-col w-[25%] mr-10">
                <NurseCard nurse={nurseId} />
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Search Names"
                        className="border border-slate-300 rounded-lg py-2 px-3 w-full font-montserrat"
                    />
                </div>
                <p className="text-2xl mt-8 font-open-sans font-bold">Requests</p>
                <Link to={`/nurse/${userId}`}>
                    <p className="text-xl mt-3 font-open-sans">Connections</p>
                </Link>
                <Link to={`/nurse/recommendations/requests/${userId}`}>
                    <p className="text-xl mt-3 font-open-sans text-secondary underline">Recommendations</p>
                </Link>
                <p className="text-2xl mt-8 font-open-sans font-bold">Filters</p>
                <p className="text-lg mt-3 font-pt-sans text-slate-400">
                    Name{" "}
                </p>
                <div className="flex mt-2">
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio"
                    />
                    <p className="text-base ml-3">
                        A - Z{" "}
                    </p>
                </div>
                <div className="flex mt-2">
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio"
                    />
                    <p className="text-base ml-3">
                        Z - A{" "}
                    </p>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex flex-col w-[75%]">
                    <p className="text-5xl font-open-sans font-bold text-primary mb-8">2 Recommendation Requests</p>
                    <div className="grid grid-cols-3 gap-4">
                        {/*Iterate i=no. of requests*/}
                        <ReqCard nurse={nurseId} />
                        <ReqCard nurse={nurseId} />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default Notifs
