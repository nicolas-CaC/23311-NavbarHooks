import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { centerStyle, evenStyle } from "../styles";

export const UseImperativeHandle = () => {

    const elementoRef = useRef();

    const datazos = () => elementoRef.current.datitos()
    const ejecucion = () => elementoRef.current.funcion()

    return (
        <div className={ evenStyle + centerStyle }>
            <h3>UseImperativeHandle</h3>

            <Input ref={ elementoRef } />

            <input
                onBlur={ datazos }
                className="w-25 form-control"
                placeholder="No pongas nada acá"
            />

            <button onClick={ ejecucion } >Boton</button>
        </div>
    )
}


const Input = forwardRef((_, ref) => {

    const [valor, setValor] = useState('')
    const inputRef = useRef()

    const funcion = () =>
        console.log('Soy la funcion - valor Input:', inputRef.current.value);

    const funciones = {
        funcion,
        datitos: () => console.log(inputRef.current.getBoundingClientRect())
    }

    useImperativeHandle(ref, () => funciones)

    return <input
        value={ valor }
        ref={ inputRef }
        className="w-25 form-control"
        placeholder="Soy el Componente Input"
        onChange={ e => setValor(e.target.value) }
    />
})