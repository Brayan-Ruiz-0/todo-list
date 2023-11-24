import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Task, TaskStatus } from "../Types";

const TasksBoard = () => { 
  const [list, setlist] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    status: TaskStatus.TODO,
    title: "",
    id: 654653216464,
  });

  // GENERATE ID
  const generateId = () => {
    const random = Math.random();
    const fecha = Date.now();
    return random + fecha;
  };

  // ADD TASK
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTask.title === "") {
      alert("Agregue una tarea");
      return;
    }

    const task: Task = {
      id: "",
      title: "",
      status: TaskStatus.TODO,
    };
    const temp = [newTask, ...list];
    task.id = generateId();
    setlist([...temp]);

    setNewTask({ status: TaskStatus.TODO, title: "", id: generateId() });
  };

  // CHANGE
  const handleInputChange = (e: any) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  // DELETE
  const handleDelete = (id: any) => {
    const deleteTask = list.filter((newTask) => newTask.id !== id);
    setlist(deleteTask);
  };

  return (
    <>
      <div>TasksBoard</div>
      <form className="mb-3">
        <input
          className="form-label"
          type="text"
          name="title"
          value={newTask.title}
          placeholder="Introduzca la tarea"
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Añadir tarea
        </button>
      </form>

      <div>
        Tasks List
        {list.map((Task: any) => (
          <li key={Task.id}>
            <h2>{Task.title}</h2>
            <button className="btn btn-primary">Edit</button>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleDelete(newTask.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default TasksBoard;
