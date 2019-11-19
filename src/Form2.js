import React from 'react';
import { connect } from 'react-redux';
import { sendInputText, addItem, completeInput } from './Store/Actions/Actions';

function Form2(props) {
    const { inputText, sendText, addItem, isUpdate, completeInput } = props;

    const handleOnChange = (e) => {
        sendText(e.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (inputText) {
            if (isUpdate) {
              completeInput();
            } else {
              addItem();
            }
        } else {
            alert("enter some thing")
        }
    };

    return (
        <div className="col-lg-4 mt-4">
            <form onSubmit={handleSubmit}>
                <input
                    value={inputText}
                    type="text"
                    placeholder="Enter some thing"
                    className="form-control"
                    onChange={handleOnChange}
                />
                <button
                    className={`btn btn-sm btn-${isUpdate ? 'primary' : 'success'} mt-1`}>
                    {isUpdate ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    inputText: state.inputText,
    isUpdate: state.update
});
const mapDispatchToProps = (dispatch) => ({
    sendText: (text) => dispatch(sendInputText(text)),
    addTodo: () => dispatch(addItem()),
    completeInput: () => dispatch(completeInput())
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Form2));