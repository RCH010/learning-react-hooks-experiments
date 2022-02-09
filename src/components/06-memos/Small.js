import React, {memo} from 'react'

// React.memo --> para memorizar algo, y solo si las props cambian, se vuelve a dibujar.
export const Small = memo(({value}) => {
    console.log("Se llamo el componete")
    return (
        <small>
            {value}
        </small>
    )
})
