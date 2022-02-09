import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem 
                        todo={todo} 
                        key={todo.id}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}

export default TodoList

