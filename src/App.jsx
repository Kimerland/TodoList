import { useState } from "react";
import "./App.css";
import TaskTodo from "./components/TaskTodo/TaskTodo";
import Header from "./components/Header/Header";

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (todo) {
      const task = {
        id: Math.random(),
        value: todo,
        status: false,
      };
      setTasks((prev) => [task, ...prev]);
      setTodo("");
    }
  };

  const delTask = (id) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toogleTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (id, currentValue) => {
    setEditingId(id);
    setEditValue(currentValue);
  };

  const saveTask = (id) => {
    if (editValue.trim() === "") {
      alert("Cannot be empty!");
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, value: editValue };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingId(null);
    setEditValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="TodoWrapper">
      <Header />
      <input
        className="todo-input"
        placeholder="Your task..."
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        onKeyDown={handleKeyPress}
      />
      <button className="todo-btn" onClick={addTask}>
        ADD
      </button>
      <TaskTodo
        tasks={tasks}
        delTask={delTask}
        toogleTask={toogleTask}
        editTask={editTask}
        saveTask={saveTask}
        editValue={editValue}
        setEditValue={setEditValue}
        editingId={editingId}
      />
    </div>
  );
}

export default App;
