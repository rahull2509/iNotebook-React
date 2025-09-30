import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from "react";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            required
          />
          {note.title.length > 0 && note.title.length < 4 && (
            <small className="text-danger">
              Title must be at least 4 characters
            </small>
          )}
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={note.description}
            onChange={onChange}
            required
          />
          {note.description.length > 0 && note.description.length < 5 && (
            <small className="text-danger">
              Description must be at least 5 characters
            </small>
          )}
        </div>

        {/* Tag */}
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            required
          />
          {note.tag.length > 0 && note.tag.length < 2 && (
            <small className="text-danger">Tag must be at least 2 characters</small>
          )}
        </div>

        {/* Button */}
        <button
          disabled={
            note.title.length < 4 ||
            note.description.length < 5 ||
            note.tag.length < 2
          }
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
