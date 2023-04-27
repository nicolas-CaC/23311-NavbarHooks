import { useId } from "react"
import { centerStyle, oddStyle } from "../styles";

export const UseId = () => {

    const id1 = useId()
    const id2 = useId()

    console.log(id1, id2);

    return (
        <div className={ oddStyle + centerStyle }>
            <h3>UseId:</h3>
            <div className="form-floating">
                <input
                    type="text"
                    name='algo'
                    id={ id2 }
                    className="form-control"
                    placeholder="Obligatorio para interacción con label bootstrap"
                />
                <label htmlFor={ id2 }>Ingresa algo</label>
            </div>
        </div>
    )
}