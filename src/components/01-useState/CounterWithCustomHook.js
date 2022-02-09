import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {

    const{state: counter, increment, decrement, reset} = useCounter(10);

    
    return (
        <div>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>

            <button onClick = {() => increment(2)} className='btn btn-primary'>+ 1</button>
            <button onClick = {() => decrement(2)} className='btn btn-danger ml-1'>- 1</button>
            <button onClick = {reset} className='btn btn-warning ml-1'>reset</button>
        </div>
    )
}
