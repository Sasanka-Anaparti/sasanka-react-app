import React from 'react'
// export default function Button(){
//     return(
//         <div>
//             <button></button>
//         </div>
//     )
// }
const Button=(props)=><button  className={`btn btn-${props.color}`} onClick={props.handleCounter}>{props.title}</button>
export default  Button;
