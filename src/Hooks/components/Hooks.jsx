import { HooksPrincipales, UseCallback, UseContext, UseDeferredValue, UseEffect, UseId, UseInsertionEffect, UseLayoutEffect, UseMemo, UseReducer, UseRef, UseState, UseSyncExternalStore, UseTransition, UseImperativeHandle } from "./"
import { ForwardRef, Memo, OnClickCapture, PropTypesComponent } from "./methods"
import { HooksLayout } from "../layout";



const propType = () => 'funcion';

export const Hooks = () => {

    return (
        <HooksLayout>
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
            <UseContext />
            <UseReducer />
            <UseImperativeHandle />
            {/* <UseTransition /> */ }
            {/* <UseDeferredValue /> */ }
            <UseId />
            <UseSyncExternalStore />
        </HooksLayout>
    )
}

