import { useEffect, useState } from "react"

export function useToggle(init) {
    const [state, setState] = useState(init)
    function toggle() {
        setState(!state)
    }
    return [state, toggle]
}

export function useFetch(setLoading, axiosReq) {
    const [data, setData] = useState(null)
    const [errors, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axiosReq.then(response => { setData(response.data) }).catch((error) => { setError(error) }).finally(() => { setLoading(false) })
        setLoading(false)
    })
    return [data, errors]
}