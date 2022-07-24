import { useEffect, useRef, useState } from "react"

export function useToggle(init) {
    const [state, setState] = useState(init)
    function toggle() {
        setState(!state)
    }
    return [state, toggle]
}

export function useCopy() {
    const ref = useRef()
    const [isCopid, setCopid] = useState(false)
    function copy() {
        navigator.clipboard.writeText(ref.current.innerHTML).then(() => {
            setCopid(true)
        });
    }
    return [ref, copy,isCopid]
}

export function useFetch(setLoading, axiosReq) {
    const [data, setData] = useState(null)
    const [errors, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axiosReq.then(response => { response.data && setData(response.data) }).catch((error) => { setError(error) }).finally(() => { setLoading(false) })
        setLoading(false)
    }, [])
    return [data, errors]
}