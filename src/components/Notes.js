import { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context; 
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes &&
          notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
      </div>
    </>
  );
}
