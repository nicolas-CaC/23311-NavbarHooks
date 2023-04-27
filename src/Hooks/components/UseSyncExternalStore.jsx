import { useSyncExternalStore } from "react"
import { centerStyle, evenStyle } from "../styles"

const funcionListener = listener => {
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
}

const snapshot = () => window.scrollY

export const UseSyncExternalStore = () => {

    const heightFromTop = useSyncExternalStore(funcionListener, snapshot)

    return (
        <div className={ evenStyle + centerStyle }>
            <h3>UseSyncExternalStore</h3>
            <h4>Tamaño de la pantalla</h4>
            <h4>{ heightFromTop }</h4>
        </div>
    )
}