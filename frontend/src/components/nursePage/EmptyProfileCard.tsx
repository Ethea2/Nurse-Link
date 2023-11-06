import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const EmptyProfileCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()
    const nav = useNavigate()

    const [imageLink, setImageLink] = useState<string>('https://res.cloudinary.com/dialvcsco/image/upload/v1699261841/r1rizqeoij5yify2cut0.jpg')

    

    useEffect(() => {
            if(user?.id === nurse?.userId) {
                setImageLink('https://res.cloudinary.com/dialvcsco/image/upload/v1699261843/o9zuezjvog3c2ckipu5r.jpg');
            }
            //console.log("Is Searcher:", isSearcher);
        }, [user, nurse]);

    return (
        <div>
            <img src = {imageLink} className = "w-4/5"></img>
        </div>
    )
}

export default EmptyProfileCard
