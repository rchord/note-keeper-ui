import React, {Component} from 'react';
import {connect} from 'react-redux';
import Note from './Note';


class NoteList extends Component {
    render() {
        return (
            <div>
                <h1 className="note_heading">All Notes</h1>
                {this.props.notes.map((note) => (console.log(note)))}
                {this.props.notes.map((note) => (<Note key={note.id} note={note}/>))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

export default connect(mapStateToProps)(NoteList);