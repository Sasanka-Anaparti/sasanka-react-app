import React from 'react';
import UserContext from './UserContext';

export default function ContextB(props) {
    return (
        <div>
            <h1>ContextB</h1>
            <UserContext.Consumer>
                {
                    (userData)=><h1>{userData.username}</h1>
                        
                }
            </UserContext.Consumer>
            
        </div>
    )
}
