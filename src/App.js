import React,{useState} from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
const [notes, setNotes] = useState([]);

   

     function addNote(note) {
       setNotes([...notes, note]);
     }


     function editNote(newNote, noteId) {
       const u = notes.map((note) => {
         if(noteId === note.id) {
           return newNote;
         } else {
           return note;
         }
       })
       setNotes(u)
     }


     function deleteNote(noteId) {
       const filteredNotes = notes.filter((note) => {
         return noteId !== note.id;
       })
       setNotes(filteredNotes);
     }

  return (
    <>
    <Container>
  <Row>
    <Col>    
    <NoteForm addNote ={addNote}/>
</Col>
    <Col>   
     <NoteList notes={notes}  deleteNote={deleteNote} editNote={editNote} />
</Col>
  </Row>
  </Container>
    </>
  );
}

export default App;
