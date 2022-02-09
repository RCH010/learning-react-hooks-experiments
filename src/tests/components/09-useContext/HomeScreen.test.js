import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <HomeScreen />', () => {
    const user = {
        id: 1,
        name: 'Raúl',
        email: 'ra@ca.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('should HomeScreen match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
