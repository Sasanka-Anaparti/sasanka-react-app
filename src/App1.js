import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import * as actions from './Store/Actions/Action'
import Card1 from './Card1'


class App1 extends Component {
    constructor(){
        super();
      this.state  ={
            data: [{ icon:"user" ,color:"success" ,text:"12054" ,name:"USERS"},
            {icon:"facebook" ,color:"danger", text:"58112", name:"POSTS"},
            {icon:"twitter", color:"secondary" ,text:"78551" ,name:"LIKES"},
            {icon:"instagram", color:"primary", text:"96222", name:"SHARES" } ]
            // count: 0
        }}
    // }
    // increment=()=>{this.props.increment()}
    // decrement=()=>{this.props.decrement()}
    // reset=()=>{this.reset()}
    render() {
        return (
    //         <div>
    //             <h1>Count: {this.props.count}</h1>
    //             <hr/>
    //             <button className="btn btn-primary btn-sm m-3" onClick={this.increment}> Increment</button>
    //             <button className="btn btn-primary btn-sm m-3"onClick={this.decrement}>Decrement</button>
    //             <button className="btn btn-primary btn-sm"onClick={this.reset }>Reset</button>
    //         </div>
        <div className="container-fluid">
            <div className=" row ">
                {
                    this.state.data.map((val,index)=> 
                    {
                        return (
                            
                        <Card1 
                        key={index}
                        icon={val.icon}
                        color={val.color}
                        text={val.text}
                        name={val.name}
                        />
                    )
                })
                }
               
            </div>
         </div>

       
    
        )}}
// const mapStateToProps=state=>{
//     console.log(state);
//     return{
//         count: state.count
//     }
// }
// const mapDispatchToProps=dispatcher=>({
//     increment:()=>dispatcher(actions.incrementCount()),
//     decrement:()=>dispatcher(actions.decrementCount()),
//     reset:()=>dispatcher(actions.resetCount())
    
// })

// export default connect(mapStateToProps,mapDispatchToProps ) (App1);
export default App1;


