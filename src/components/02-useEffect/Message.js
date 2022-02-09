import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords;

    useEffect(() => {
        console.log('Componente montado')
        const mouveMove = (e) => {
            const coor = {x: e.x, y: e.y};
            setCoords(coor);
        }
        window.addEventListener('mousemove', mouveMove);
        //LIMPIEZA
        return () => {  
            console.log('Componente morido');
            // remover el listener porque sino puede crecer drasticamnete
            window.removeEventListener('mousemove', mouveMove);
        }
    }, [])

    return (
        <div>
            <h1>Eres genial!</h1>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    )
}
