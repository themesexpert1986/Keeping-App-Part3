import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //note & NoteList
  const [noteItems, setNodeItems] = useState([]);

  function AddNote(note) {
    setNodeItems(preItems => {
      return [...noteItems, note];
    });
    // console.log("Add Done");
  }
  function DeleteNote(note) {
    // console.log(note);

    setNodeItems(prevNotes => {
      // console.log(prevNotes);

      return prevNotes.filter((noteItem, index) => {
        return noteItem.title !== note.title;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {noteItems.map((noteItem, index) => {
        // console.log(noteItem);
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            onDelete={DeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
