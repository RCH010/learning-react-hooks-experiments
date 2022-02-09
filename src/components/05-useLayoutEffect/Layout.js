import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'

export const Layout = () => {
    const {state:id, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${id}`);
    // console.log(state);
    const {author, quote} = !!data && data[0];
    const pTag = useRef();

    useLayoutEffect(() => {
        console.log('hey')
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1 className='h1'>Breaking Bad Quotes</h1>
            <small>Layout Effect</small>
            <hr />
            <div>
                <blockquote className='blockquote w-50 m-auto'>
                    <p className='mb-0 text-center' ref={pTag}>{quote}</p>
                    <footer className='blockquote-footer text-right'>{author}</footer>
                </blockquote>
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-success' onClick={increment}>
                    Next Quote
                </button>
            </div>

        </div>
    )
}
