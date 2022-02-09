import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/SimpleForm.css'

export const MultipleCustomHooks = () => {
    const {state:id, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${id}`);
    // console.log(state);
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1 className='h1'>Breaking Bad Quotes</h1>
            <hr />
            {
                loading? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ): (
                <>
                    <div>
                        <blockquote className='blockquote w-50 m-auto'>
                            <p className='mb-0 text-center'>{quote}</p>
                            <footer className='blockquote-footer text-right'>{author}</footer>
                        </blockquote>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success' onClick={increment}>
                            Next Quote
                        </button>
                    </div>
                </>
                )
            }
        </div>
    )
}
