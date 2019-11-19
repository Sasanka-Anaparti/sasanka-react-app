import React from 'react'


export default function Card1(props) {
    console.log(props)
    return (

        <div className="col-lg-3 mt-3" >
            <div className="card card-body shadow">
                <div className="row">
                    <div className="col-lg-4">
                    <i className= {`fa fa-${props.icon} fa-3x text-${props.color}`}></i> 
                    </div>
                    <div className="col-lg-8">
                        <h3>{props.text}</h3>
                        <p className="m-0">
                        {props.name}</p>
                    </div>

                </div>

            </div>
            
           
        </div>
    )
}
