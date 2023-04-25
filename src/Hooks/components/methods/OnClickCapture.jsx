import { centerStyle, evenStyle } from "../../styles"

export const OnClickCapture = () => {

    function handleclick(e) {
        console.log('Click primer botón');
        // e.stopPropagation();
    }

    function handlClickDos() {
        console.log('Click segundo botón');
    }

    function handleClickCapture(e) {
        console.log('Click Capture');
        // e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }



    return (
        <div
            className={ evenStyle + centerStyle }
            // onClick={ handleClickCapture }
            onClickCapture={ handleClickCapture }
        >
            <h3>onClickCapture:</h3>
            <button
                className="btn btn-outline-light"
                onClick={ handleclick }
            >
                Primer Botón</button>
            <button
                className="btn btn-outline-light"
                onClick={ handlClickDos }
            >Segundo Botón</button>
        </div>
    )
}