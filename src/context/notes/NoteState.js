import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZWJlNDA4Y2MxZjY2ZjZmMDlmMmFkIn0sImlhdCI6MTc1ODQ3NDM5Nn0.Zq4nqjnTQA2wqHSjlCi3LjbcOk_nd6FG3PBAELrfzPE",
      },
    });

    const json = await response.json();
    console.log("Fetched Notes:", json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZWJlNDA4Y2MxZjY2ZjZmMDlmMmFkIn0sImlhdCI6MTc1ODQ3NDM5Nn0.Zq4nqjnTQA2wqHSjlCi3LjbcOk_nd6FG3PBAELrfzPE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log("Added Note:", json);

    setNotes(notes.concat(json));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZWJlNDA4Y2MxZjY2ZjZmMDlmMmFkIn0sImlhdCI6MTc1ODQ3NDM5Nn0.Zq4nqjnTQA2wqHSjlCi3LjbcOk_nd6FG3PBAELrfzPE",
      },
    });

    setNotes(notes.filter((note) => note._id !== id));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZWJlNDA4Y2MxZjY2ZjZmMDlmMmFkIn0sImlhdCI6MTc1ODQ3NDM5Nn0.Zq4nqjnTQA2wqHSjlCi3LjbcOk_nd6FG3PBAELrfzPE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log("Updated Note:", json);

    setNotes(
      notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      )
    );
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
