import React, { useState } from 'react'
import '../02-useEffect/SimpleForm.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1 className='h1'>Real Example useRef</h1>
            <br />
            {show&& <MultipleCustomHooks />}
            <button 
                className='btn btn-primary'
                onClick={() => {setShow(!show)}}
            >Show/Hide</button>
        </div>
    )
}
