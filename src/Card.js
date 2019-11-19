import React from 'react';


const Card =(props)=>{
    console.log(props.icon);
    return(
        <div className="col-lg-3">
           
            <div className="card card-body shadow m-3">
                <div className="row">
                    <div className="col-lg-4">
                        <i className= {`fa fa-${props.icon} text-${props.color} fa-3x text-primary `}></i>
                    </div>
                    <div className="col-lg-8">
                        <h3 >{props.count}</h3   >
                        <p className="m-0">{props.name}</p>
                    </div>

                </div>

            </div>
            
        </div>
    )
};
export default Card;

