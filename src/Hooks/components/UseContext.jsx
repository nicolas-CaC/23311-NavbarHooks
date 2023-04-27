import { useContext } from "react";
import { HooksContext } from "../context/HooksContext";
import { centerStyle, oddStyle } from "../styles";


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