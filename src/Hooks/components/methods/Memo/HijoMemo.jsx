import { memo } from "react";

export const HijoMemo = memo(({ valor }) => {

    console.log('Soy el componente hijoMemo');

    return (
        <div>{ valor }</div>
    )
})