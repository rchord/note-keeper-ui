import React, { Component, createRef } from 'react';
import { addNote } from '../reducers/noteSlice';
import { connect } from 'react-redux'

class NewNote extends Component {

    _inputRef = createRef();
    _textAreaRef = createRef();

    render() {
        return (
            <div className="note-container">
                <h1 className="note_heading">Create Note</h1>
                <form className="form">
                    <input required type="text"
                        placeholder="Enter Note Title"
                        ref={this._inputRef} />
                    <br /><br />
                    <textarea required rows="5" cols="28"
                        placeholder="Enter Note" 
                        ref={this._textAreaRef}/>
                    <br /><br />
                    <button type="button" onClick={(event) =>{
                        event.preventDefault();
                        this.props.addNote({id: crypto.randomUUID(), title: this._inputRef.current.value, text: this._textAreaRef.current.value})
                    } }>Add Note</button>
                </form>

                <span>{}</span>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

const mapDispatchToProps = {addNote}
export default connect(mapStateToProps, mapDispatchToProps)(NewNote);

// export function NewNote() {
//     const note = useSelector((state) => state);
//     const dispatch = useDispatch();
//     render() {
//         return (
//             <div className="note-container">
//                 <h1 className="note_heading">Create Note</h1>
//                 <form className="form">
//                     <input required type="text"
//                         placeholder="Enter Note Title" />
//                     <br /><br />
//                     <textarea required rows="5" cols="28"
//                         placeholder="Enter Note" />
//                     <br /><br />
//                     <button onClick={(event) => {
//                         event.preventDefault();
//                         dispatch(addTodo(event.target.value));
//                     }}>Add Note</button>
//                 </form>
    
//                 <span>{}</span>
//             </div>
//         );
//     }
// }