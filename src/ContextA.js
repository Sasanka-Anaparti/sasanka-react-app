import React, { Component } from 'react';
import ContextB from './ContextB'

export default class ContextA extends Component {
    render() {
        return (
            <div>
                <h1>ContextA</h1>
                <ContextB />
            </div>
        )
    }
}
