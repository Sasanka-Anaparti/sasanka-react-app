import React from 'react';
import {withRouter} from 'react-router-dom'

 function Sample(props) {
    const handleRedirect=()=>{
        console.log(props);
        props.history.push("./Home");
       

    }
    return (
        <div>
           <button onClick={handleRedirect}>Go to Home</button> 
        </div>
    )
}export default withRouter(Sample);

