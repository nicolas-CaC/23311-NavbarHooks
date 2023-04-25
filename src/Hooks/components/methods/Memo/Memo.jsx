import { useState } from "react"
import { centerStyle, oddStyle } from "../../../styles"
import { HijoMemo } from "./HijoMemo"
import { Hijo } from "./Hijo"

export const Memo = () => {

    const [valorMemo, setValorMemo] = useState(1)
    const [fibo, setFibo] = useState(0)
    const [valor, setValor] = useState(0)

    function hijoSumaHandleClick() {
        setValor(valor + 1)
    }

    function hijoFiboHandleClick() {
        setValorMemo(valorMemo + fibo)
        setFibo(valorMemo)
    }


    const container = "d-flex align-items-end"
    const boton = (color) => `btn btn-outline-${color} mx-3`

    return (
        <div className={ oddStyle + centerStyle }>
            <h3>Memo:</h3>

            <div className={ container }>
                <Hijo valor={ valor } />
                <button
                    className={ boton('primary') }
                    onClick={ hijoSumaHandleClick }>
                    Suma
                </button>
            </div>

            <div className={ container }>
                <HijoMemo valor={ valorMemo } />
                <button
                    className={ boton('primary') }
                    onClick={ hijoFiboHandleClick }>
                    Fibo
                </button>
            </div>

        </div>
    )
}