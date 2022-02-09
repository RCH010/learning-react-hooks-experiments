import React, { useRef } from 'react'
import '../02-useEffect/SimpleForm.css'

export const FocusScreen = () => {
    //este no es un caso normal, pero pues ejemplifica
    const inputRef = useRef()

    const handleClick = () => {
        // document.querySelector('#nombre').select();
        inputRef.current.select();
    }
    return (
        <div>
            <h1 className='h1'>Focus Screen</h1>
            <br/>
            <input
                ref = {inputRef}
                id='nombre'
                className='form-control'
                placeholder='Su nombre'
                type='text'
            />
            <br/>
            <button 
                className='btn btn-outline-primary'
                onClick={handleClick}
            >Focus</button>
        </div>
    )
}
