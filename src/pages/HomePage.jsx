import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import { Link } from "react-router-dom";

class Homepage extends React.Component{
  constructor(props){
    super(props);

    const notes = getAllNotes(); 
    // const notes = []; // simulasi jika notes kosong
    this.state = {
      notes: notes
    } 
  }

  render(){
    const { notes } = this.state
    const isEmpty = notes.length === 0

    return(
      <section>
      
        <h2>Note List</h2>
        <div className={isEmpty ? 'notes-list-empty' : 'notes-list'}>
        {
          notes.length > 0 ? (
            <NoteList notes={notes} />
          ) : (
            
            <p>Tidak ada catatan</p>
          )
        }
        </div>
        {/* <Link to="/archived" className="action">+</Link> */}
        
        
      </section>
    )
  }
}



export default Homepage

