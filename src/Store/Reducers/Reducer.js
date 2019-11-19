// import React from 'react'
const initialState ={
    count:0

}

const counterReducer=(state=initialState, action)=> {
  switch(action.type){
      case "INCREMENT_COUNT":return{
          ...state,
          count:state.count+1
      }
      case "DECREMENT_COUNT":return{
        ...state,
        count:state.count-1
    }
    case "RESET_COUNT":return{
        ...state,
        count:0
    } ;
    default : return state
  } 
}
export default counterReducer;
