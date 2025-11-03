import React from "react";
import { J, validateProps } from "../utils/validation";

const  noteDetailPropsSchema = J.object({
  id: J.string().required(),
  title: J.string().required(),
  body: J.string().required(),
  createdAt: J.string().required(),
  archived: J.boolean().required(),
})

function NoteDetail(props){
  const validatedProps = validateProps(noteDetailPropsSchema, props, "NoteDetail");

  const { title, body, createdAt, archived } = validatedProps;

  return(
    <div className="note-detail">
      <h3 className="note-detail__title">{title}</h3>
      <p className="note-detail__createdAt">{createdAt}</p>
      <p className="note-detail__body">{body}</p>
      <p className="note-detail__archived">Archived: {archived.toString()}</p>
    </div>
  )
}

export default NoteDetail