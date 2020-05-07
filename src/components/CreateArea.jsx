import React, { useState } from "react";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded,setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        { isExpanded && <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isExpanded ? true : false}>
        <Fab className="modifier"
          onClick={() => {
            props.onAdd(note);
            //reset Empty
            setNote({
              title: "",
              content: ""
            });
          }}
        >        
          <AddIcon />         
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
