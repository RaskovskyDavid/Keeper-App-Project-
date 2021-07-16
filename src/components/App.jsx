import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  function addItem(item){
    setItems((prevItems) =>{
      return [...prevItems, item];
    });
    
  }

  function deleteItem(id){
    setItems((prevItems) =>{
      return prevItems.filter(
        (item, index) =>{
          return index !== id
        }
        )
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {items.map((note, index )=> {
        return(<Note key={index} id={index} title={note.title} content={note.content} onDeleted={deleteItem} />)
      })}
      
      <Footer />
    </div>
  );
}

export default App;
