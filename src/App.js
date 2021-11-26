import React,{useState} from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import {Container, Row, Col, Button,Modal} from 'react-bootstrap'

function App() {
const [notes, setNotes] = useState([]);


const [showModal, setShowModal] = useState(false);

    function toggleModal(props) {
		//sets the showModal state the opposite of what
		//it currently is
		setShowModal(!showModal);
	}


   

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
    <Col md={2}>    
    <Button variant="primary" onClick={() => toggleModal()}>
				+ Note
			</Button>
    {/* <NoteForm addNote ={addNote}/> */}
</Col>
    <Col md={10}>   
     <NoteList notes={notes}  deleteNote={deleteNote} editNote={editNote} />
</Col>
  </Row>
  </Container>


  <Modal show={showModal} onHide={() => toggleModal()}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/*Component to edit user*/}
					<NoteForm
						addNote={addNote}
						// editUser={props.editUser}
						toggleModal={toggleModal}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => toggleModal()}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
            
    </>
  );
}

export default App;
