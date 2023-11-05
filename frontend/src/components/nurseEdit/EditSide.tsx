import { Link } from "react-router-dom"
import UserType from "../../types/userTypes/userType"

const EditSide = ({ user }: { user: UserType }) => {
    return (
        <div className="invisible md:visible border-2 border-slate-300 drop shadow-xl rounded-lg p-10 w-1/5">
            <Link to={`/nurse/edit/${user?.id}`}>
                <span className="text-xl">Edit Profile</span>
            </Link>
            <br/>
            <Link to={`/nurse/edit/documents/${user?.id}`}>
                <span className="text-xl">Documents</span>
            </Link>

        </div>
    )
}

export default EditSide
