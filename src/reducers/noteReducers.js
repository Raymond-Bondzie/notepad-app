const initialState = {
    notes: [],
}

const noteReducers = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NOTE":
        return {...state.notes, notes: [...state.notes, action.payload]};

        case "DELETE_NOTE":
            const filteredNotes = state.notes.filter(
                (note) => note.id !== action.payload
            );
            return{...state, notes: filteredNotes}


         case "EDIT_NOTE": 
           const updatedNote= state.notes.map((note) => {
               if(note.id === action.payload.noteId) {
                   return action.payload.updatedNote;
               }
               return note;
           });
           return {...state, notes: updatedNote} 
           
           
           default:
               return state;
    }
}

export default noteReducers;