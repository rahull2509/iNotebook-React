import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  // limit description
  const truncateText = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card my-3 h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column">
          {/* Title + icons */}
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{note.title}</h5>
            <div>
              <i
                className="fa-solid fa-file-pen mx-2 text-primary"
                onClick={() => updateNote(note)}
                style={{ cursor: "pointer" }}
                title="Edit Note"
              ></i>
              <i
                className="fa-solid fa-trash mx-2 text-danger"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert("Note deleted successfully", "success");
                }}
                style={{ cursor: "pointer" }}
                title="Delete Note"
              ></i>
            </div>
          </div>

          <p className="card-text text-muted">
            {truncateText(note.description, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
