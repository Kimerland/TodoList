import "./App.css";
import TaskTodo from "./components/TaskTodo/TaskTodo";
import Header from "./components/Header/Header";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todo,
    setTodo,
    tasks,
    setTasks,
    editingId,
    setEditingId,
    editValue,
    setEditValue,
    addTask,
    delTask,
    toogleTask,
    editTask,
    saveTask,
    handleKeyPress,
  } = useTodo();

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
