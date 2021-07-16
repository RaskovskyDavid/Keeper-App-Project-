import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChangeNote(event){
    const {name, value } = event.target;
    setNote( prevValue =>
      {
        return{
          ...prevValue,
          [name]:value
        }
       
      });
  }
  function addClick(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({title:"", content:""});
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChangeNote} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChangeNote} value={note.content} />
        <button onClick={ addClick }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
