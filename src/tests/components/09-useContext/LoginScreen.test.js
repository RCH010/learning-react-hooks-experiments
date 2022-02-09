import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen />', () => {
    // const user = {
    //     id: 0,
    //     name: '',
    //     email: ''
    // }
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen/>
        </UserContext.Provider>
    );
    test('should match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not setUser if form is empty', () => {
        let inputs = wrapper.find('input');
        inputs.forEach(input => {
            input.simulate('change', {target: {name: input.prop('name'), value:'h'}})
        })
        wrapper.find('button').simulate('click');
        inputs = wrapper.find('input');
        inputs.forEach(input => {
            expect(input.prop('value')).toBe('h');
        })
    });

    // test('should change user values when form is submited', () => {
    //     const inputs = wrapper.find('input');
    //     inputs.forEach(input => {
    //         input.simulate('change', {target: {name: input.prop('name'), value:'hello'}})
    //     })
    //     const formsubmit = wrapper.find('form').prop('onSubmit');
    //     formsubmit({preventDefault(){}});
    //     expect(wrapper.find('pre').text()).toBe('');

    // })

})
