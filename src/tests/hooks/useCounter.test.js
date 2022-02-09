import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Tests in useCounter, custom hook', () => {

    test('should return default values', () => {
        const {result} = renderHook( () => useCounter() );

        expect(result.current.state).toBe(0)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })
    
    test('should return specific value', () => {
        const {result} = renderHook( () => useCounter(100) );

        expect(result.current.state).toBe(100)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('should increment counter in 1', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {increment} = result.current;
        act(() => {
            increment();
        })
        const counter = result.current.state;
        expect(counter).toBe(101);
    })
    test('should decrement counter in 1', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {decrement} = result.current;
        act(() => {
            decrement();
        })
        const counter = result.current.state;
        expect(counter).toBe(99);
    })
    test('should reset counter in initial value', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {increment, reset} = result.current;
        act(() => {
            increment();
            reset();
        })
        const counter = result.current.state;
        expect(counter).toBe(100);
    })
    
    
})
