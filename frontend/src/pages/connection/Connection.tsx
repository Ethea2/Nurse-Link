import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import ConnectionCard from "../../components/connectionComponents/connectionCard"


const Connection = () => {
    const { userId } = useParams()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    useEffect(() => {
        //console.log(nurse.connections)
    }, [nurse])
    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div className="flex flex-row  w-full min-h-screen">
                    <div className="sidebar w-1/5 bg-black"> 
                    
                    </div>
                    <div className="main-section w-4/5 grid grid-cols-3 gap-4 justify-center mx-auto p-8">
                    {nurse?.connections?.map((connectionId, index) => (
                        <ConnectionCard key={index} nurseId={connectionId} />
                    ))}
                    </div>
                    
                </div>
            )}
        </>
    )
}

export default Connection
