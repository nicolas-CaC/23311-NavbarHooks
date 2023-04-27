import { useState, useTransition } from "react";
import { centerStyle, oddStyle } from "../styles";

export const UseTransition = () => {

    const [count, setCount] = useState(0);
    const [list, setList] = useState(50000);

    const [loading, startTransition] = useTransition();


    const addItems = () => {
        setCount(count + 1)
        startTransition(() => setList(list + 20000))
    }

    const simularGranProceso = () =>
        Array(list).fill(1).map((_, index) =>
            <span key={ index }>{ list - index } - </span>)



    const styleDiv = { height: '10vh', overflowY: 'auto' }

    return (
        <div className={ oddStyle + centerStyle }>
            <h3>useTransition</h3>
            <h4>Count: { count }</h4>

            <button
                className="btn btn-warning"
                onClick={ addItems }
            >
                Agregar números
            </button>

            { loading ? <p>Cargando...</p> : undefined }

            <div className="form-control" style={ styleDiv }>
                { simularGranProceso() }
            </div>
        </div>
    )
}