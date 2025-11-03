import React from "react";
import {J, validateProps } from "../utils/validation";
import { FiCheckCircle } from "react-icons/fi";

const noteInputPropsSchema = J.object({
  addNote: J.func().required(),
})

class NoteInput extends React.Component {
  constructor(props){
    super(props);

    const validatedProps = validateProps(noteInputPropsSchema, props, 'NoteInput');

    this.state = {
      title: '',
      body: '',
      validatedProps
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onBodyChangeEventHandler(event){
    this.setState(() => {
      return {
        body: event.target.innerHTML
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    const { addNote } = this.state.validatedProps;
    const { title, body } = this.state;

    console.log("Data dikirimkan dari Note Input", { title, body });

    addNote({ title, body})
  }

  render(){
    return(
      <>
        <form onSubmit={this.onSubmitEventHandler}>
          <input 
            type="text" 
            placeholder="Title" 
            value={this.state.title} 
            onChange={this.onTitleChangeEventHandler}
            className="add-new-page__input__title"
          />

          <div 
            data-placeholder="Write your note here..."
            contentEditable
            onInput={this.onBodyChangeEventHandler}
            className="add-new-page__input__body"
          />

          <button type="submit" className="action"><FiCheckCircle /></button>

        </form>
      </>
    )
  }
}

export default NoteInput