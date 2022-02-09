import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixitures/demoTodos";


describe('Tests in 08-useReducer, todoReducer', () => {

    test('should return dafault state', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });
    
    test('should add in todoReducer', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Aprender Vue',
                done: false
            }
        };
        const state = todoReducer(demoTodos, action);
        // expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, action.payload]);
    });

    test('should delete one todo', () => {
        const action = {
            type: 'delete',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
    })

    test('should update (toggle) of todo', () => {
        const action = {
            type: 'toggle',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);
        expect(state[1].done).toBe(true);
        expect(state[0]).toEqual(demoTodos[0]);
    })
    
})
