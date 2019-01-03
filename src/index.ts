

import { useState } from "react"

export interface State<S>{
    state:S
    setState:(prevState: S) => void
}

export default function createHook<S>(initialState: S | (() => S)) : State<S>{
    const modelState = useState(initialState)
    return {
        get state(){
            return modelState[0]
        },
        setState(newState:S){
            modelState[1](newState)
        }
    }
}

