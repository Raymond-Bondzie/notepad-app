import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';
import {connect} from 'react-redux'
import {Form} from 'react-bootstrap'
import { addNote } from "../action/noteActions";




function NoteForm(props) {
    const [Title , steTitle] = useState("");
    const [Note , steNote] = useState("");

   function handleSubmit(e) {
       e.preventDefault();

       if (Title && Note) {
           let freshNote ={
               Title: Title,
               Note: Note,
               id: uuid(),
           };
           props.addNewNote(freshNote);
           props.toggleModal()
           steTitle("");
           steNote("");
       }
   }



    return (
        <>

<Form onSubmit={(e) => handleSubmit(e)}> 
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title Of Note</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Title" 
    value={Title}
    onChange={(e) => steTitle(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Note</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3}
    placeholder="Enter Note"
    value = {Note}
    onChange= {(e) => steNote(e.target.value)}
     />

  </Form.Group>
  <input type="submit"/>
</Form>
            </>
          
        
    )
}

const mapDispatch = {
    addNewNote: addNote
}

export default connect(null, mapDispatch) (NoteForm);