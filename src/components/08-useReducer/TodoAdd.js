import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {
    const [formValues, handleInputChange, reset] = useForm({
        description: ''
    });

    const getNewID = () => {
        return new Date().getTime();
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.description.trim().length <= 1) { return; }

        const newTodo = {
            id: getNewID(),
            desc: formValues.description,
            done: false
        };

        handleAddTodo(newTodo)
        reset();
    }

    return (
        <>
            <h2>Agregar</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='description'
                    placeholder='Hacer...'
                    autoComplete='off'
                    className='form-control'
                    value={formValues.description}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary btn-block'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd
