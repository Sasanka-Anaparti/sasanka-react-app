import React, { Component } from 'react';
import Form2 from './Form2';
import Userlist1 from './Userlist1';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Form2 />
        <hr />
        <Userlist1 />
      </div>
    )
  }
}