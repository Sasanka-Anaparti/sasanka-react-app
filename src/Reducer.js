import * as ActionTypes from './Store/Actions/ActionTypes'

const initialState = {
    inputText: '',
    todos: ["hello"],
    updateIndex: null,
    update: false
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEND_INPUT_ITEM: return {
            ...state,
            inputText: action.payload
        }
        case ActionTypes.ADD_ITEM: return {
            ...state,
            todos: state.todos.concat(state.inputText),
            inputText: ''
        }
        case ActionTypes.DELETE_ITEM: return {
            ...state,
            todos: state.todos.filter((_, i) => i !== action.payload)
        }
        case ActionTypes.UPDATE_ITEM: return {
            ...state,
            updateIndex: action.index,
            inputText: action.text,
            update: true
        }
        case ActionTypes.ADD_COMPLETE_ITEM: {
            const updatedTodos = [...state.todos]
            updatedTodos[state.updateIndex] = state.inputText;
            return {
                ...state,
                updateIndex: null,
                update: false,
                todos: updatedTodos,
                inputText: ''
            }
        }
        default: return state;
    }
};


export default itemReducer;