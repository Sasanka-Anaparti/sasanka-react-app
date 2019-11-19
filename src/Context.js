import React from 'react'
const Context=React.createContext({
    inputText: '',
        todos: [],
        handleUpdate:()=>{},
        handleDelete:()=>{},
        handleOnChange:()=>{},
        handleAddTodo:()=>{}

});
// export const Provider= Context.Provider;
// export const Consumer= Context.Consumer;

export default Context;