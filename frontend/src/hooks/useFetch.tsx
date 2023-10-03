import { useState, useEffect } from "react"
//this is for getting data
const useFetch = (url: string) => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    useEffect(() => {
        const fetchData = async (url: string) => {
            setLoading(true)
            const res = await fetch(import.meta.env.VITE_API_URL + url, {
                method: "GET",
                credentials: "include"
            })
            const result = await res.json()

            if(res.ok) {
                setData(result)
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }
        }
        fetchData(url)
    }, [url])
    return {data, loading, error}
}

export default useFetch