import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import { editNote } from "../action/noteActions";



function EditNote(props) {
    const [Title , setTitle] = useState(props.note.Title);
    const [Note , setNote]  = useState(props.note.Note);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }


    function handleSubmit() {
      let  editedNote = {
          Title: Title,
          Note: Note,
          id: props.note.id,
      }
      props.editNote(props.note.id, editedNote);
      props.toggleModal();
    }

    return (
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title Of Note</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Title" 
    value={Title}
    onChange={(e) => handleTitleChange(e)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3}
    value = {Note}
    onChange= {(e) => handleNoteChange(e)}
     />
             <Button onClick={() => handleSubmit()}>Save</Button>

  </Form.Group>
</Form>
    )
}

const mapDispatch = {
    editNote,
}


export default connect(null, mapDispatch) (EditNote);