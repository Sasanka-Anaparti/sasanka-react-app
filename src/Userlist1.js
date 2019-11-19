import React from 'react'
import Item from './Item';

const List = () => {
    return (
        <div className="col-lg-5">
            <h1>Todo List</h1>
            <ul className="list-group">
                <Item />
            </ul>
        </div>
    )
}

export default List;

       
