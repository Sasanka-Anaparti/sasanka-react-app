import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            title:"hello world",
            count: 0
        }
    }
    handleClick=(message)=>{
        this.setState({title:message})}

        increment=()=>{
            this.setState({count: this.state.count+1})
        }
        decrement=()=>{
            this.setState({count: this.state.count-1})
        }
        reset=()=>{
            this.setState({count: 0})
        }
        
        
    
    render() {
        return (
            <div className="m-5">
                <h2>Counter {this.state.count}</h2>
                <h1 style= {{Color:'red'}}> {this.state.title}</h1>
                <Button  color="danger" title="Increment" handleCounter={this.increment} />&nbsp;
                <Button color="primary" title="Decrement" handleCounter= {this.decrement}/>&nbsp;
                <Button color="success" title="Reset" handleCounter= {this.reset}/>&nbsp;
                {/* <img src={require('./Assets/Pic.jpg')} height="300" width="300" alt="Sasi" /> */}

                {/* <button className="btn btn-success" onClick={this.increment} >INC</button>&nbsp;
                <button className="btn btn-primary" onClick= {this.decrement}>DEC</button>&nbsp;
                <button className="btn btn-danger" onClick= {this.reset}>RESET</button>&nbsp; */}
                {/* <button onClick={()=>this.handleClick("Get started")}>Update</button> */}
                
            </div>
        )
    }
}

