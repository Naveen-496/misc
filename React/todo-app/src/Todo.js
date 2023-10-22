import React, { useState } from "react";
import { TiDelete, TiEdit, TiTick } from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [todoText, setTodoText] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setEditMode(false);
    setEditId(null);
    setTodoText("");
    setDueDate(new Date());
  };

  const handleAddTodo = () => {
    if (editMode) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return {
            ...todo,
            text: todoText,
            dueDate: dueDate.toLocaleDateString(),
          };
        }
        return todo;
      });

      setTodos(updatedTodos);
      setEditMode(false);
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        doeDate: dueDate.toLocaleDateString(),
      };

      setTodos([...todos, newTodo]);
    }
    handleCloseModal();
  };

  const handleTodoUpdate = (id, text, dueDate) => {
    setEditMode(true);
    setEditId(id);
    setTodoText(text);
    setDueDate((dueDate));
    setModalIsOpen(true);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <button className="add-button" onClick={handleOpenModal}>
        Add Todo
      </button>
      <hr></hr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{editMode ? "Edit Todo" : "Add Todo"}</h2>
        <input
          type="text"
          value={todoText}
          placeholder="Enter Todo"
          onChange={(e) => setTodoText(e.target.value)}
        />

        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        <div>
          <button onClick={handleAddTodo}>{editMode ? "Update" : "Add"}</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </Modal>
      {todos.length === 0 ? (
        <h4>No Todos Found</h4>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="todo-details">
                <span className="todo-text">{todo.text}</span>
                <span className="todo-dueDate">{todo.dueDate}</span>
              </div>
              <div className="todo-actions">
                <button
                  className="edit-button"
                  onClick={() =>
                    handleTodoUpdate(todo.id, todo.text, todo.dueDate)
                  }
                >
                  <TiEdit></TiEdit>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <TiDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodoApp;
