import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddNotePage(){
  const navigate = useNavigate();
  function onAddNoteHandler(note){
    console.log("Data diterima di AddNotePage", note);
    addNote(note);
    navigate("/");
  }
  return(
    <>
      <div className="add-new-page__input">
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </>
  )
}

export default AddNotePage