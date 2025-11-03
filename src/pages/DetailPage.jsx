import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";

function DetailPageWrapper(){
  const { id } = useParams();
  return(
    <DetailPage id={id} />
  )
}

class DetailPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      note: getNote(props.id)
    }
  }

  render(){
    console.log("Detail Page", this.state.note);
    if (this.state.note === null){
      return(
        <p>Tidak ada catatan</p>)
    }
    return(
      <>
        <NoteDetail {...this.state.note} />
      </>
    )
  }
}

export default DetailPageWrapper