// este es el initial state
const tareas = [
    {
        id:1,
        todo: 'comprar leche',
        done: false
    }
]
// función para editar el arreglo, reducer
const todoReducer = (state = tareas, action) => {
    if(action?.type === 'add'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

//NO modificar directamente el arreglo
//  por ejemplo no usar push

const newTarea = {
    id:2,
    todo: 'comprar café',
    done: false
}
// esta es la acción a hacer, que seria agregar el payload (los nuevos datos)
const action = {
    type: 'add',
    payload: newTarea
}

todos = todoReducer(tareas, action);

console.log(todos);