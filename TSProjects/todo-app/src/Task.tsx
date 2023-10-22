import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
export default function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const addTask = (): void => {
    setTasks([...tasks, newTask]);
    setNewTask({
      id: newTask.id + 1,
      title: "",
      description: "",
      completed: false,
    });
  };

  const toggleComplete = (taskId: number) => {
    const updatedTasks: Task[] = tasks.map((task): Task => {
      return task.id == taskId ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const remainingTasks = tasks.filter((task) => task.id != id);
    setTasks(remainingTasks);
    // or //
    // setTasks(tasks.filter(task => task.id != id));
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={newTask.title}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="description"
          placeholder="description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
