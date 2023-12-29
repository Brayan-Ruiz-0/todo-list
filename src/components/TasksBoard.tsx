import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Task, TaskStatus } from "../Types";

const TasksBoard = () => {
  const [list, setlist] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState<Task>({
    status: TaskStatus.TODO,
    title: "",
    id: "",
  });

  const generateId = () => {
    const random = Math.random();
    const fecha = Date.now();
    return random + fecha;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title === "") {
      alert("Agregue una tarea");
      return;
    }

    if (editingTask) {
      const updatedList = list.map((task) =>
        task.id === editingTask.id ? newTask : task
      );
      setlist(updatedList);
      setEditingTask(null);
    } else {
      newTask.id = generateId();
      setlist([newTask, ...list]);
    }

    setNewTask({
      status: TaskStatus.TODO,
      title: "",
      id: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };

  const handleEdit = (task: Task) => {
    setNewTask(task);
    setEditingTask(task);
  };

  const handleDelete = (id: string) => {
    const tasksUpdated = list.filter((task) => task.id !== id);
    setlist(tasksUpdated);
    setEditingTask(null);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80px",
          alignContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "40px",
          }}
        >
          <h2>TasksBoard</h2>
          <ul className="list-group">
            {list.map((task: any) => (
              <li className="list-group-item" key={task.id}>
                <h2>{task.title}</h2>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  className="form-label"
                  type="text"
                  name="title"
                  value={newTask.title}
                  placeholder="Enter a task"
                  onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">
                  {editingTask ? "Update Task" : "Add New Task"}
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div>
          <h2>TaskInProgress</h2>
        </div>
      </div>
    </>
  );
};

export default TasksBoard;
