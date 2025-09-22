import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "68d0f69a04292166e16a1961",
      "user": "68cebe408cc1f66f6f09f2ad",
      "title": "My New Title",
      "description": "Please wake up.",
      "tag": "Personal",
      "date": "2025-09-22T07:11:22.062Z",
      "__v": 0
    },
    {
      "_id": "68d1630858a3c775bbf2873f",
      "user": "68cebe408cc1f66f6f09f2ad",
      "title": "My 2nd New Title",
      "description": "Please wake up early",
      "tag": "Health",
      "date": "2025-09-22T14:54:00.957Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
