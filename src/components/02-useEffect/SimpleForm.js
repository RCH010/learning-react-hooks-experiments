import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './SimpleForm.css'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState;

    useEffect(() => {
        console.log('hey!');
    }, []);


    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };
    return (
        <>
            <h1>useEffect</h1>  
            <br />
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    className='form-control'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    placeholder='correo@gmail.com'
                    className='form-control'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            {(name === '123') && <Message />}
        </>
    )
}
