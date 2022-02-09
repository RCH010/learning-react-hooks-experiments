import { shallow } from 'enzyme';
import React from 'react';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('Tests in TodoAdd', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

    test('should match with snapshot with default props', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should not call handleAddTodo in form', () => {
        const formsubmit = wrapper.find('form').prop('onSubmit');
        formsubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    
    test('should call handleAddTodo and reset form', () => {
        const input = wrapper.find('input');
        const value = {
            target: {
                name: 'description',
                value: 'Hola mundo!'
            }
        }
        input.simulate('change', value);
        const formsubmit = wrapper.find('form').prop('onSubmit');
        formsubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // {}, puede ser un obj vacio y pasaria, hay que ser más precisos
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value.target.value,
            done: false
        })
        // expect now that reset has ben called
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
