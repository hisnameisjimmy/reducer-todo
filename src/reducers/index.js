

export const initialState = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return {...state, todo: action.payload };
        case "TOGGLE_DELETE":
            return { ...state, completed: !state.completed };
        default: 
            return state;
    }
};