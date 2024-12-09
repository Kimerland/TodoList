import "./TaskTodo.css";
import "../../App.css";

const TaskTodo = ({
  tasks,
  delTask,
  toogleTask,
  editTask,
  saveTask,
  editValue,
  setEditValue,
  editingId,
}) => {
  return (
    <div className="todo-container">
      {tasks.map((el) => {
        return (
          <div key={el.id} className="todo-item">
            <input
              className="todo-checkbox"
              type="checkbox"
              onClick={() => toogleTask(el.id)}
            />
            {editingId === el.id ? (
              <>
                <input
                  className="todo-input-edit"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="btn-edit" onClick={() => saveTask(el.id)}>Save</button>
              </>
            ) : (
              <>
                <p className={el.status ? "complited" : ""}>{el.value}</p>
                <button
                  className="btn-edit"
                  onClick={() => editTask(el.id, el.value)}
                >
                  Edit
                </button>
              </>
            )}
            <button className="del-btn" onClick={() => delTask(el.id)}>
              Del
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskTodo;
