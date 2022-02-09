import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';

describe('Tests in useForm hook', () => {
    const initialValues = {
        name: 'Raúl',
        email: 'ra@ca.com'
    };

    test('should return default form', () => {
        const {result} = renderHook(() => useForm(initialValues));
        const [values, handleInputChange, reset] = result.current

        expect(values).toBe(initialValues);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should change values in form (name)', () => {
        const {result} = renderHook(() => useForm(initialValues));
        const [, handleInputChange] = result.current;
        const obj = {
            target: {
                name: 'name',
                value: 'Uva'
            }
        }
        act(() => {
            handleInputChange(obj);
        })
        const [values] = result.current;
        expect(values.name).toBe('Uva');
        expect(values).toEqual({...initialValues, name:'Uva'});
    })
    
    test('should reset form with reset function', () => {
        const {result} = renderHook(() => useForm(initialValues));
        const [, handleInputChange, reset] = result.current;
        const obj = {
            target: {
                name: 'name',
                value: 'Uva'
            }
        }
        act(() => { 
            handleInputChange(obj);
            reset();
        })
        const [values] = result.current;
        expect(values).toBe(initialValues);
    })
    
    
})
