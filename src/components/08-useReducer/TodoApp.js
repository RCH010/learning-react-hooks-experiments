import React, { useEffect, useReducer } from 'react'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'
import TodoAdd from './TodoAdd';
import './styles.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, [], init) // puede recibir un init, que seria el edo inicial
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    // Con este useEffect, mantenemos los datos actualizados con el local storage,
    //  estos se actualizan cuando cambia el valor de la variable todos
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    // cuando se presiona el borrar
    const handleDelete = (todoid) => {
        const action = { type:'delete', payload:todoid };
        dispatch(action);
    }
    // cuando se da click en el parrafo
    const handleToggle = (todoid) => {
        const action = { type:'toggle', payload:todoid };
        dispatch(action);
    }

    const handleAddTodo = (newTodo) => {
        const action = { type: 'add', payload: newTodo };
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <br/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className='col'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
