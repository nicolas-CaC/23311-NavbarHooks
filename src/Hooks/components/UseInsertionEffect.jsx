import { useEffect, useInsertionEffect, useLayoutEffect, useRef } from "react"
import { oddStyle } from "../styles"

export const UseInsertionEffect = () => {

    const divRef = useRef('hola')

    useEffect(() => {
        console.warn('3- soy el useeffect y me ejecuto luego del renderizado');
    }, [])


    useLayoutEffect(() => {
        console.warn('2- soy useLayoutEffect y me ejecuto antes que el renderizado (useEffect)');
    }, [])


    useInsertionEffect(() => {
        console.warn('1- soy useInsertionEffect y me ejecuto antes de las mutaciones en el DOM (useLayoutEffect) para inyectar clases css en js');
    }, [])


    const handleClick = () => {
        console.log('Soy el handleClick', divRef.current.classList);
        divRef.current.classList.replace('bg-dark-subtle', 'bg-danger');
    }


    return (
        <div
            className={ oddStyle }
            ref={ divRef }>
            <button
                className="btn btn-dark"
                onClick={ handleClick }>
                UseInsertionEffect
            </button>
        </div>
    )
}