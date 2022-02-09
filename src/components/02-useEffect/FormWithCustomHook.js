import React from 'react'
import { useForm } from '../../hooks/useForm';
import './SimpleForm.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1 className='h1'>FormWithCustomHook</h1>  
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
            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    placeholder='1234456'
                    className='form-control'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                ></input>
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}
