import React from 'react';
import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('HookApp Tests', () => {
    test('should HookApp match with snapshot', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
})
