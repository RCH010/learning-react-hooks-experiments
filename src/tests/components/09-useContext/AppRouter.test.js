import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {
    const user = {
        id: 123,
        name: 'raul',
        email: 'rc@hd.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    )
    test('should match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
