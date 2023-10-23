import { useParams } from "react-router"

const Nurse = () => {
    const { userId } = useParams()
    return (
        <div>
            Nurse
            <div>{userId}</div>
        </div>
    )
}

export default Nurse
