import React from 'react';
import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch"
import { useCounter } from '../../../hooks/useCounter';
jest.mock("../../../hooks/useFetch")
jest.mock("../../../hooks/useCounter")


describe('Tests in MultipleCustomHooks', () => {
    beforeEach(()=> {
        useCounter.mockReturnValue({
            increment: () => {},
            state: 1
        });
    })

    test('should dsiplay correctly', () => { 
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    })

    test('should display info when loaded', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Raúl Castellanos',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Raúl Castellanos');
    })
    
    
})
