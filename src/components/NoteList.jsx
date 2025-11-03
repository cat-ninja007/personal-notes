import React from "react";
import NoteItem from "./NoteItem";
import {J, validateProps} from "../utils/validation";

const noteListPropsSchema = J.object({
  notes: J.array().required(),
})

function NoteList(props){
  const {notes} = validateProps(noteListPropsSchema, props, 'NoteList');
  return(
    <>
      {notes.map((note) => (
        <NoteItem 
          key={note.id}
          {...note}
        />
      ))}
    </>
  )

}

export default NoteList