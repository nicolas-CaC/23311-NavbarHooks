import { useReducer } from "react"
import { centerStyle, oddStyle } from "../styles"

const initialState = { contador: 0 }

function reducer(state, action) {

    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 }
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'multiplicar':
            return { contador: state.contador * 2 }
        default:
            throw new Error('No conozco ese valor')
    }
}

export const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const style = oddStyle + centerStyle

    return (
        <div className={ style }>
            <h3>useReducer:</h3>
            <h4>Count: { state.contador }</h4>
            <Button dispatch={ dispatch } type='incrementar' nombre='Sumar' />
            <Button dispatch={ dispatch } type='decrementar' nombre='Resta' />
            <Button dispatch={ dispatch } type='multiplicar' nombre='Multiplicación' />
            <Button dispatch={ dispatch } type='dividir' nombre='División' />
        </div>
    )
}

const Button = ({ dispatch, type, nombre }) =>
    <button className="btn btn-secondary"
        onClick={ () => dispatch({ type }) }>
        { nombre }
    </button>