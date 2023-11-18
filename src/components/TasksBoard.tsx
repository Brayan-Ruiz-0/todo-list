import React from "react";
import { Task, TaskStatus } from "../Types";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const TasksBoard = () => {
  // a. funcionalidad con react
  // b. diseño de ui

  // montar un estado
  // dos estados
  // 1. lista de tareas
  // 2. creacion de la tarea
  const [list, setList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    status: TaskStatus.TODO,
    title: "",
  });


  const handleInputChange = (e:any) =>{
	console.log(e.target.value);
	setNewTask({
		...newTask,
		[e.target.name] : e.target.value
	})
  }

  const addList = (e:any) =>{
	e.preventDefault();
	}

  // 3. ui para agregar una tarea
  // 4. change handler para el input name
  // 5. click handler para el boton - agregar tarea -> list
  return (
    <>
      <div>TasksBoard</div>
	  <form
	  
	  className="mb-3">
	  <input
        className="form-label"
        type="text"
        name="title"
        placeholder="Introduzca un titulo para la tarea"
		onClick={handleInputChange}
      />
      <button
	  	onClick={addList}
	    className="btn btn-primary" 
		type="button" >
        Añadir tarea
      </button>
    
	  </form>
     
    </>
  );
};

export default TasksBoard;
