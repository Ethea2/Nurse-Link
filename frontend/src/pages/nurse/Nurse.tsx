import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"
import NurseHeader from "../../components/nursePage/NurseHeader"

const Nurse = () => {
    const { userId } = useParams()
    const {data: nurse, loading} = useFetch(`/api/nurse/${userId}`)
    useEffect(() => {
        console.log(nurse)
    }, [nurse])
    return (
        <div className="w-full min-h-screen">
            {
                loading ?
                (
                    <div>loading...</div>
                ) : 
                    <NurseHeader nurse={nurse} />
            }
        </div>
    )
}

export default Nurse
