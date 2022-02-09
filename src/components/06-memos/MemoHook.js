import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'

export const MemoHook = () => {

    const {state:counter, increment} = useCounter(2000);
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1 className='h1'>Memorize</h1>
            <small>Memo Hook</small>
            <h2 className='h3'>Counter: {counter}</h2>
            <br/>
            <p>{memoProcesoPesado}</p>
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
