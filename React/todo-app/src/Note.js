import React, { useState } from "react";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import "./Note.css";

 export default function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const [noteFontSize, setNoteFontSize] = useState("16");
  const [noteBgColor, setNoteBgColor] = useState("#f0f0f0");
  const [editMode, setEditMode] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      const newNote = {
        id: Date.now(),
        heading: noteHeading,
        text: noteText,
        fontSize: noteFontSize,
        bgColor: noteBgColor,
      };

      setNotes([...notes, newNote]);
      setNoteText("");
      setNoteHeading("");
      setNoteFontSize("16");
      setNoteBgColor("#f0f0f0");
    }
  };

  const handleEditNote = (id, heading, text, fontSize, bgColor) => {
    setEditMode(true);
    setEditNoteId(id);
    setNoteHeading(heading);
    setNoteText(text);
    setNoteFontSize(fontSize);
    setNoteBgColor(bgColor);
  };

  const handleUpdateNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === editNoteId) {
        return {
          ...note,
          heading: noteHeading,
          text: noteText,
          fontSize: noteFontSize,
          bgColor: noteBgColor,
        };
      }
      return note;
    });

    setNotes(updatedNotes);
    setEditMode(false);
    setEditNoteId(null);
    setNoteText("");
    setNoteHeading("");
    setNoteFontSize("16");
    setNoteBgColor("#f0f0f0");
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Note-Taking App</h1>
      <div className="note-form">
        <input
          type="text"
          placeholder="Enter a heading"
          value={noteHeading}
          onChange={(e) => setNoteHeading(e.target.value)}
        />
        <textarea
          placeholder="Enter a note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <div className="note-options">
          <label>Font Size:</label>
          <select
            value={noteFontSize}
            onChange={(e) => setNoteFontSize(e.target.value)}
          >
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
          <label>Background Color:</label>
          <input
            type="color"
            value={noteBgColor}
            onChange={(e) => setNoteBgColor(e.target.value)}
          />
        </div>
        {editMode ? (
          <button onClick={handleUpdateNote}>Update Note</button>
        ) : (
          <button onClick={handleAddNote}>Add Note</button>
        )}
      </div>
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <ul className="note-list">
          {notes.map((note) => (
            <li
              key={note.id}
              className="note-item"
              style={{ backgroundColor: note.bgColor }}
            >
              <h3 style={{ fontSize: `${note.fontSize}px` }}>{note.heading}</h3>
              <p>{note.text}</p>
              <div className="note-actions">
                <button
                  className="edit-button"
                  onClick={() =>
                    handleEditNote(
                      note.id,
                      note.heading,
                      note.text,
                      note.fontSize,
                      note.bgColor
                    )
                  }
                >
                  <RiEdit2Line />
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
