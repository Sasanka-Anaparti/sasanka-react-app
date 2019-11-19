import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'




class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg  bg-light">
                <NavLink exact={true} activeClassName="active-route" className="nav-link" to="/" >Home</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> 
                            <NavLink activeClassName="active-route" className="nav-link" to="./Form" >Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active-route" className="nav-link" to="./Class" >Cards</NavLink>

                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;