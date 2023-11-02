import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import NurseHeader from "../../components/nursePage/NurseHeader"
import SideContainer from "../../components/nursePage/SideContainer"

const Nurse = () => {
    const { userId } = useParams()
    const { data: nurse, loading } = useFetch(`/api/nurse/${userId}`)

    useEffect(() => {
        console.log(nurse)
    }, [nurse])
    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div className="w-full min-h-screen">
                    <NurseHeader nurse={nurse} />
                    <div className="flex w-full">
                        <SideContainer nurse={nurse} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Nurse
