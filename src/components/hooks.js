import { useState } from "react"

export function useToggle(init) {
    const [state, setState] = useState(init)
    function toggle() {
        setState(!state)
    }
    return [state, toggle]
}