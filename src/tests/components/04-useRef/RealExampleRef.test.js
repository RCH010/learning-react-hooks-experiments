import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Tests in UseRef realExample', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test('should display component <MultipleCustomHooks/>', () => {
        const btn = wrapper.find('button');
        btn.simulate('click');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
})
