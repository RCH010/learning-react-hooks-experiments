import React, { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {
    // const [counter, setCounter] = useState(10);
    //
    // const [{counterA, counterB}, setCounter] = useState({
    //     counterA : 10,
    //     counterB : 20
    // })
    const [state, setstate] = useState({
        counterA : 10,
        counterB : 20
    })
    const {counterA, counterB} = state;
    const addCounter = () => { 
        setstate({
            ...state,
            counterA: counterA + 1,
        });
    }
    return (
        <div>
            <h1>Counter {counterA}</h1>
            <h1>Counter {counterB}</h1>
            <hr />
            <button 
                className='btn btn-primary'
                onClick={addCounter}
            
            >+1</button>
        </div>
    )
}
