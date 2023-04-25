import { HooksPrincipales, UseCallback, UseEffect, UseInsertionEffect, UseLayoutEffect, UseMemo, UseRef, UseState } from "./"
import { ForwardRef, Memo, OnClickCapture, PropTypesComponent } from "./methods"

const style = {
    margin: '2em 0em',
    // height: '80vh',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    gap: 20,
    boxSizing: 'content-box'
}

const propType = () => 'funcion';

export const Hooks = () => {

    return (
        <div style={ style }>
            {/* <HooksPrincipales /> */ }
            <PropTypesComponent
                name='Nico'
                age={ 50 }
                dev={ true }
                array={ ['primer', 'segundo'] }
                objeto={ { a: 1 } }
                funcion={ propType }
            />
            <UseState />
            <UseEffect />
            <UseRef />
            <UseLayoutEffect />
            <UseInsertionEffect />
            <OnClickCapture />
            <Memo />
            <UseMemo />
            <UseCallback />
            <ForwardRef />
        </div>
    )
}