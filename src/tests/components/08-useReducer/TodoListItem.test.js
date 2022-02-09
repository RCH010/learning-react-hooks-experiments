import React from 'react';
import { shallow } from "enzyme"
import { demoTodos } from "../../fixitures/demoTodos"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"

describe('Tests in <TodoListItem />', () => {
    const handelDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow (
        <TodoListItem 
            todo = {demoTodos[0]}
            index = {1}
            handleDelete = { handelDelete }
            handleToggle = { handleToggle }
        />)

    test('should match with snapshot, all default', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call errase function', () => {
        wrapper.find('button').simulate('click');
        expect(handelDelete).toHaveBeenCalledWith(demoTodos[0].id);
    })

    test('should call handleToggle function', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    })

    test('should display todo correctly', () => {
        const text = wrapper.find('p').text();
        expect(text).toBe(`2. ${demoTodos[0].desc}`);
    })
    
    test('should have class complete, when todo.done is true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow (
            <TodoListItem 
                todo = {todo}
                index = {1}
                handleDelete = { handelDelete }
                handleToggle = { handleToggle }
            />)
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
})
