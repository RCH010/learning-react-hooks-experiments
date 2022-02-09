import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/SimpleForm.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( () => {
        setCounter(c => c + 1);
    }, [setCounter],)

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <h1>Use Callback hook</h1>
            <br />
            <h2>Counter: {counter}</h2>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
