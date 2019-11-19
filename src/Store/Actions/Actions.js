import * as ActionTypes from './ActionTypes'

export const sendInputText= (text)=>({
    type: ActionTypes.SEND_INPUT_ITEM,
    payload: text
});
export const addItem= (text)=>({
    type: ActionTypes.ADD_ITEM,
    
});
export const updateItem= (text, index)=>({
    type: ActionTypes.UPDATE_ITEM,
    text,
    payload: index

});
export const deleteItem= (text, index)=>({
    type: ActionTypes.DELETE_ITEM,
    text,
    index
});
export const completeInput= (text)=>({
    type: ActionTypes.ADD_COMPLETE_ITEM,
    payload: text
});