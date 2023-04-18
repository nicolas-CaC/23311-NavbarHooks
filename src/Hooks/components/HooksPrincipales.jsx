import { useEffect, useRef, useState } from "react"

export const HooksPrincipales = () => {

    // useState

    const [count, setCount] = useState(0)
    const [puntitos, setPuntitos] = useState('.')

    const countClickHandler = () => {
        setCount(count + 1)
        // console.log(botonRef.current.style.height);
        // botonRef.current.style.height = '200px'
    }



    // useEffect

    useEffect(() => {

        setTimeout(() => {
            setPuntitos(puntitos + '.')
        }, 1000);

        return () => {
            puntitos === '...' &&
                setPuntitos('.')
        }

    }, [puntitos])



    // useRef

    const botonRef = useRef()


    return (
        <div>
            <button
                ref={ botonRef }
                onClick={ countClickHandler }
                style={ { height: '50px' } }
            >
                { count + puntitos }
            </button>
        </div>
    )
}