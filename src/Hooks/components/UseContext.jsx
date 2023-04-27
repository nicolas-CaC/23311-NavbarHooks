import { useContext } from "react";
import { centerStyle, oddStyle } from "../styles";
import { HooksContext } from "../context";


export const UseContext = () => {

    const { value, changeValue } = useContext(HooksContext)

    return (
        <div className={ oddStyle + centerStyle }>
            <h3>useContext:</h3>
            <h3>{ value }</h3>
            <button
                className="btn btn-secondary"
                onClick={ changeValue }
            >Cambiar valor</button>
        </div>
    )
}