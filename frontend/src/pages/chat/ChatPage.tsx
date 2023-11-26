import { Link } from "react-router-dom"
import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch"
import { Suspense } from "react"

const ChatPage = () => {

    const { userId } = useParams()
    const { data: nurseId, loading } = useFetch(`/api/nurse/${userId}`)

    return(
        <div>
            {nurseId.name}
        </div>
    )
}

export default ChatPage