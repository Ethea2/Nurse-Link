import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { NurseType } from "../../types/routes/nurseTypes/nurseType"

const Test = () => {
    const { data, loading } = useFetch("/api/nurse")
    useEffect(() => console.log(data), [data])
    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                data?.map((nurse: NurseType, index: number) => (
                    <>
                        <div className="flex gap-10">
                            Nurse 1
                            <h1>{nurse.username}</h1>
                            <h2>{nurse.email}</h2>
                        </div>
                    </>
                ))
            )}
        </>
    )
}

export default Test
