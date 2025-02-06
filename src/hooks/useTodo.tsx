import { useState } from "react";

export interface ITask {
  id: number;
  value: string;
  status: boolean;
}

export const useTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

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

  const delTask = (id: number) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toogleTask = (id: number) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (id: number, currentValue: string) => {
    setEditingId(id);
    setEditValue(currentValue);
  };

  const saveTask = (id: number) => {
    if (editValue.trim() === "") {
      alert("Cannot be empty!");
      return;
    }

    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, value: editValue } : task
    );

    setTasks(updatedTask);
    setEditingId(null);
    setEditValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return {
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
  };
};
