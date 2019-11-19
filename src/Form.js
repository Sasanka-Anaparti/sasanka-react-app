import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios'



export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            userName: '',
            email: '',
            password: '',
            gender: 'Male',
            branch: 'EEE',
            comment: '',
            check: '',
            terms: false,
            disable: false
        }
    }
    handleToggle = () => this.setState({ isLoggedIn: !this.isLoggedIn });
    // updateuserName=event=>{
    //     this.setState={userName:event.target.value}};
    // }
    // updateEmail=event=>{
    //     this.setState={email:event.target.value}};

    handluOnChange = event => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [input.name]: value })
    }

    handleSubmit = event => {
        this.setState({disable: true});
        event.preventDefault();
        const userData ={
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            branch: this.state.branch,
            comment: this.state.comment,
           
        }
        Axios.post("https://sasanka-d8dcf.firebaseio.com/userInfo.json", userData)
        .then(()=>{
            this.setState({disable: false,userName:'', email:'', password:'', gender:"Male", branch:'EEE', comment:'' });
        })
        .catch(()=>{
            this.setState({disable: false});
        })
        // const { userName, email, password, gender, branch, comment } = this.state;
        // // console.log(this.state);
        // if (!userName.length || !email.length || !password.length || !gender.length || !branch.length || !comment.length) {
        //     alert("please enter all fields")
        // } else {
        //     alert("Success")

        // }
    }



    render() {
        return (
            <div className="container">
                  <Navbar/>
                <h1 className="text-center mt-5">  Conditional rendering</h1>
                <hr />
                {/* <button className={`btn btn-lg btn-${this.state.isLoggedIn ? "danger": "success"}`} onClick={this.handleToggle}> {this.state.isLoggedIn ? "Logout": "Login"}</button>
                {this.state.isLoggedIn ? <p>Welcome Folks</p>:  <p>Hello, Please Login</p>} */}
                {/* <p>Hello, Please Login</p> 
                <p>Welcome Folks</p> */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input  onChange={this.handluOnChange} className="form-control" type="text" name="userName" placeholder="username" /></div>
                    <div className="form-group"><input  onChange={this.handluOnChange} className="form-control" type="email" name="email" placeholder="email" /></div>
                    <div className="form-group"><input onChange={this.handluOnChange} className="form-control" type="password" name="password"  placeholder="password" /></div>
                    <div className="form-group">
                        <input value="Male" defaultChecked={this.state.gender === 'Male'} onChange={this.handluOnChange} type="radio" name="gender" id="Male" />
                        <label htmlFor="Male">Male</label>
                        <input value="Female" defaultChecked={this.state.gender === 'Female'} onChange={this.handluOnChange} type="radio" name="gender" id="Female" />
                        <label htmlFor="Female">Female</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch">BRANCH</label>
                        <select defaultValue={this.state.branch} id="branch" name="branch" onChange={this.handluOnChange}>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="AURO">AURO</option>
                            <option value="CSE">CSE</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input  onChange={this.handluOnChange} className="form-control" type="textarea" name="comment" placeholder="Enter comments" height="350" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handluOnChange} type="checkbox" name="check" id="check" />  <label htmlFor="check">Agree terms and conditions.</label>
                    </div>
                    <div> <button  type="submit" name="submit" onClick={this.handleSubmit}> Submit</button></div>
                </form>

            </div>
        )
    }
}
