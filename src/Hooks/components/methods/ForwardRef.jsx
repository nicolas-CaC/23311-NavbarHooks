import { forwardRef, useRef } from "react"
import { centerStyle, evenStyle } from "../../styles"

export const ForwardRef = () => {

    const forwardReftoDiv = useRef('ForwardRef')
    const forwardReftoSpan = useRef('ForwardRef')


    const handleClick = () =>
        forwardReftoDiv.current.style.backgroundColor =
        forwardReftoSpan.current.style.backgroundColor = 'green'

    return (
        <div className={ evenStyle + centerStyle }>
            <button onClick={ handleClick }>{ forwardReftoDiv.current }</button>
            <ForwardReftoDiv ref={ forwardReftoDiv } />
            <ForwardReftoSpan ref={ forwardReftoSpan } />
        </div>
    )
}

const ForwardReftoDiv = forwardRef((_, ref) =>
    <div
        className="btn btn-warning"
        ref={ ref }>
        Soy un div hijo
    </div>)

const ForwardReftoSpan = forwardRef((_, ref) =>
    <div
        className="btn btn-primary"
        ref={ ref }>
        Soy un span hijo
    </div>)





