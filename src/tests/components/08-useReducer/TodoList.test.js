import { shallow } from 'enzyme';
import React from 'react';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixitures/demoTodos';


describe('Tests in TodoList', () => {
    const handelDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
    <TodoList 
        todos = {demoTodos}
        handleDelete = {handelDelete}
        handleToggle = {handleToggle}
    />)

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should have two <TodoListItem />', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    })
    test('should have functions as props', () => {
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function))
    })
    
    
}) 
