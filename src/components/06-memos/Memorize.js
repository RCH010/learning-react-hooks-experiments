import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state:counter, increment} = useCounter(10);
    
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1 className='h1'>Memorize</h1>
            <h2 className='h3'>Counter: <Small value={counter}/></h2>
            <br/>
            <button 
                className='btn btn-success'
                onClick={increment}
            >+1</button>

            <button 
                className='btn btn-primary ml-3'
                onClick= {() => (setShow(!show))}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
