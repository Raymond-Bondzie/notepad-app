
export const addNote = (note) => {
    console.log("addNote" , note);

    return {
        type: "ADD_NOTE",
        payload: note,
    }
}


export const deleteNote = (noteId) => {
    return {
        type: "DELETE_NOTE",
        payload: noteId,
    };
}


export const editNote = (noteId, updatedNote) => {
    return {
        type: "EDIT_NOTE",
        payload: {noteId ,updatedNote},
    }
}