import React,{useState} from "react";
import {Button, Modal} from 'react-bootstrap'
import EditNote from "./EditNoteForm";
import { deleteNote } from "../action/noteActions";
import {connect} from 'react-redux'



function Note(props) {
    const note= props.note;

	const [showModal, setShowModal] = useState(false);

    function toggleModal() {
		//sets the showModal state the opposite of what
		//it currently is
		setShowModal(!showModal);
	}

    return(
        <>
        <div className="NoteDis">
        <h1>{note.Title}</h1>
        <p>{note.Note}</p>

<hr/>
        <Button variant="info" onClick={() => toggleModal()}>
				EditNote
			</Button>
            ****
			<Button variant="warning" onClick={() => props.deleteNote(note.id)}>
				DeleteNote
			</Button>
            </div>


        <Modal show={showModal} onHide={() => toggleModal()}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/*Component to edit user*/}
					<EditNote
						note={note}
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
    )
}

const mapDispatch = {
    deleteNote,
}

export default connect(null, mapDispatch) (Note);