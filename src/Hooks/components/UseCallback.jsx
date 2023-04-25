import { memo, useCallback, useState } from "react";
import { centerStyle, evenStyle, oddStyle } from "../styles";

const Memo = memo(({ funcion, nro }) => {
    console.log('Se ha creado un componente hijo Button');

    return <button
        className="btn btn-primary"
        onClick={ funcion }>
        boton { nro }
    </button>
})

export const UseCallback = () => {

    const usandoUseCallback = true;

    const [valor, setValor] = useState(0)
    const [active, setActive] = useState(false)

    const activarCallback = () => setActive(!active)

    const cambiarValor = () => setValor(valor + 1)



    const cambiarValorConUseCallback =
        useCallback(() => setValor(valor + 1), [active])



    console.log('Renderizado del componente padre');



    return usandoUseCallback
        ? <div className={ oddStyle + centerStyle }>
            <button onClick={ activarCallback }>Activar Botones:</button>
            <h4>{ valor }</h4>
            <Memo nro={ 1 } funcion={ cambiarValorConUseCallback } />
            <Memo nro={ 2 } funcion={ cambiarValorConUseCallback } />
        </div>

        : <div className={ evenStyle + centerStyle }>
            <h3>useCallback:</h3>
            <h4>{ valor }</h4>
            <Memo nro={ valor } funcion={ cambiarValor } />

        </div>
}