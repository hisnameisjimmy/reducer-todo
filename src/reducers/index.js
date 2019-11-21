

export const initialState = {
    todos: [
        {
            todo: "Learn about reducers",
            completed: false,
            id: Date.now()
        },
    ]
};



export const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return {...state, todos: [...state.todos, {todo: action.todo, completed: false, id: Date.now()}] };
        case "TOGGLE_DELETE":
            // return { ...state, completed: !state.completed };
            return {
                ...state,
                todos: state.todos.map(item => {
                    return item.id === action.id ? {
                        ...item, completed: !item.completed
                    } : item
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default: 
            return state;
    }
};