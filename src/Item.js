import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from './Store/Actions/Actions';

const Item = (props) => {
    const { todos, deleteItem, updateItem } = props;

    const handleDelete = (index) => {
        deleteItem(index);
    };
    const handleUpdate = (todo, index) => {
        updateItem(todo, index);
    };

    return (
        <React.Fragment>
            {
                todos && todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>{todo}
                        <span className="float-right">
                            <button className="btn btn-sm btn-danger mr-2" onClick={() => handleDelete(index)}>Delete</button>
                            <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(todo, index)}>Update</button>
                        </span>
                    </li>
                ))
            }
            {
                todos.length === 0 && <p className="text-danger text-center">No todo's found</p>
            }
        </React.Fragment>
    )
};
const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch(deleteItem(index)),
    updateItem: (text, index) => dispatch(updateItem(text, index))
})
export default connect(mapStateToProps, mapDispatchToProps)(Item);
