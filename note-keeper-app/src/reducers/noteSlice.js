import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote(state, action) {
            state.push(action.payload)
        },
        deleteNote(state, action) {
            return state.filter(note => note.id !== action.payload.id)
        }
    }
})

// const noteReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_NOTE':
//             return state.concat([action.data]);
//         case 'DELETE_NOTE':
//             return state.filter((note) => note.id !== action.id);
//         case 'EDIT_NOTE':
//             return state.map((note) => note.id === action.id ? {...note, editing: !note.editing} : note);
//         case 'UPDATE':
//             return state.map((note) => {
//                 if (note.id === action.id) {
//                     return {
//                         ...note,
//                         title: action.data.newTitle,
//                         message: action.data.newMessage,
//                         editing: !note.editing
//                     }
//                 } else {
//                     return note;
//                 }
//             });
//         default:
//             return state;
//     }
// };

export const {addNote, deleteNote} = todosSlice.actions
export const noteReducer = todosSlice.reducer;  