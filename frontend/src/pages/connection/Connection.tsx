import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import ConnectionCard from "../../components/connectionComponents/connectionCard"
import NurseCard from "../../components/others/NurseCard"


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
                    <div className="sidebar w-1/4 min-h-screen"> 
                        <NurseCard nurse={nurse}/>
                    </div>
                    <div className="flex flex-col main-section w-3/4 p-12">
                        <div>
                            <p style={{ fontFamily: "Poppins", color: "#053B50", fontSize: "2rem", fontWeight: 900 }}>
                                {nurse?.connections.length} Connections
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-100">
                        {nurse?.connections?.map((connectionId, index) => (
                            <ConnectionCard key={index} nurseId={connectionId} />
                        ))}
                        </div>
                    </div>
                    
                    
                </div>
            )}
        </>
    )
}

export default Connection
