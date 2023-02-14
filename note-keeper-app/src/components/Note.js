import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../reducers/noteSlice';

class Note extends Component {
    render() {
        return (
            <div className="note">
                <h2 className="note_title">{this.props.note.title}</h2>
                <p className="note_message">{this.props.note.text}</p>
                <div className="control-buttons">
                    <button className="edit">Edit</button>
                    <button className="delete" type="button" onClick={(event) =>{
                        event.preventDefault();
                        this.props.deleteNote({id: this.props.note.id});
                    } }>Delete</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

const mapDispatchToProps = {deleteNote}

export default connect(mapStateToProps, mapDispatchToProps)(Note);