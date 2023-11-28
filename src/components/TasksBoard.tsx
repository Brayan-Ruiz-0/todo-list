import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Task, TaskStatus } from '../Types';

const TasksBoard = () => {
  const [list, setlist] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState<Task>({
    status: TaskStatus.TODO,
    title: "",
    id: "",
  });
  

  // GENERATE ID
  const generateId = () => {
    const random = Math.random();
    const fecha = Date.now();
    return random + fecha;
  };

  // ADD TASK
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title === "") {
      alert("Agregue una tarea");
      return;
    }

    if (editingTask) {
      // If there is a task in edit, update that task instead of adding a new one
      const updatedList = list.map((task) =>
        task.id === editingTask.id ? newTask : task
      );
      setlist(updatedList);
      setEditingTask(null);
    } else {
      // Add new task
      newTask.id = generateId();
      setlist([newTask, ...list]);
      console.log(list)
    }

    // Clear input field after adding/updating task
    setNewTask({
      status: TaskStatus.TODO,
      title: "",
      id: "",
    });
  };

  // CHANGE
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };

  // EDIT
  const handleEdit = (task: Task) => {
    setNewTask(task);
    setEditingTask(task);
  };

  // DELETE
  const handleDelete = (id: string) => {
    const tasksUpdated = list.filter((task) => task.id !== id);
    setlist(tasksUpdated);
    setEditingTask(null); // Clear task in edit if deleted
  };

  return (
    <>
      <div>TasksBoard</div>
      <form className="mb-3" onSubmit={handleSubmit}>
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

      <div>
        Tasks List
        {list.map((task:any) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <button
              className="btn btn-primary"
              onClick={() => handleEdit(task)}
            >
              Edit
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleDelete((task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default TasksBoard;