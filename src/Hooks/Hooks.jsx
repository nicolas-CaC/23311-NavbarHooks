import { useEffect, useState } from "react"


export const Hooks = () => {

    const [count, setCount] = useState(0)
    const [puntitos, setPuntitos] = useState('.')

    const style = {
        height: '80vh',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center'
    }


    const countClickHandler = () => {
        setCount(count + 1)
    }

    useEffect(() => {

        setTimeout(() => {
            setPuntitos(puntitos + '.')
        }, 1000);

        return () => {
            puntitos === '...' &&
                setPuntitos('.')
        }

    }, [puntitos])




    return (
        <div style={ style }>
            <button
                onClick={ countClickHandler }>
                { count + puntitos }
            </button>
        </div>
    )
}