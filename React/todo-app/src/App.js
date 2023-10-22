import React, { useState } from "react";
import { TiDelete, TiEdit, TiTick } from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [todoText, setTodoText] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditMode(false);
    setEditTodoId(null);
    setTodoText("");
    setDueDate(new Date());
  };

  const handleAddTodo = () => {
    if (editMode) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editTodoId) {
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
      setEditTodoId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        dueDate: dueDate.toLocaleDateString(),
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }

    closeModal();
  };

  const handleEditTodo = (id, text, dueDate) => {
    setEditMode(true);
    setEditTodoId(id);
    setTodoText(text);
    setDueDate(new Date(dueDate));
    setModalIsOpen(true);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <button className="add-button" onClick={openModal}>
        Add Todo
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{editMode ? "Edit Todo" : "Add Todo"}</h2>
        <input
          type="text"
          placeholder="Enter todo text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        <button onClick={handleAddTodo}>{editMode ? "Update" : "Add"}</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <div className="todo-details">
                <span className="todo-text">{todo.text}</span>
                <span className="due-date">Due Date: {todo.dueDate}</span>
              </div>
              <div className="todo-actions">
                {!todo.completed ? (
                  <button
                    className="complete-button"
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    <TiTick />
                  </button>
                ) : null}
                <button
                  className="edit-button"
                  onClick={() =>
                    handleEditTodo(todo.id, todo.text, todo.dueDate)
                  }
                >
                  <TiEdit />
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
}

export default App;
