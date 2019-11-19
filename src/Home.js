import React, { Component } from 'react';
import Navbar from './Navbar';
// import {Redirect} from 'react-router-dom';
// import Sample from './Sample';


class Home extends Component {
    // state={
    //     data:[]
    // }
    // state={
    //     disabled: false,
    //     redirect: false
    // }
    // handleRedirect=()=>{
    //     this.setState({disabled:true});
    //     setTimeout(()=>{
    //         // this.props.history.push("./Home");
    //         this.setState({redirect: true});

    //     },3000);
    // }
    // getData=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res=>res.json())
    //     .then(responce=> {this.setState({data:responce})})
    //     .catch(err=> console.log(err))
        
    // }
    render() {
        // console.log(this.props);
        return (
            <div>
<Navbar/>
             <h1>Hello Home</h1>
            </div>
            
            
    //         <div className="container-fluid">
    //             {/* {this.state.redirect && <Redirect to="./Class" />     } */}
    //         <Navbar/>
    //         <button className='btn btn-danger' onClick={this.getData()}> Click Me </button>
    //             {/* <h1>Hello Home</h1>
    // //             <Sample {...this.props}/> */}
    //             <ul className='list-group'>
    //                 {
    //                     this.state.data&&this.state.data.map((user, i)=>
    //                     <li key={user.id} className='list-group-item'> {user.name}
    //                     <button className='btn btn-danger'>Delete</button></li>)
    //                 }
                    
    //             </ul>
    //         </div>
        )
    }
}
export default Home;
 