import React from 'react'
import { Task, TaskStatus } from '../Types';


const TasksBoard = () => {
	// a. funcionalidad con react
	// b. diseño de ui

	// montar un estado
	// dos estados
	// 1. lista de tareas
	// 2. creacion de la tarea
	const [list, setList] = React.useState<Task[]>([]);
	const [newTask, setNewTask] = React.useState<Task>({
		status: TaskStatus.TODO,
		title: ''
	});


	// 3. ui para agregar una tarea
	// 4. change handler para el input name
	// 5. click handler para el boton - agregar tarea -> list
	return (
		<>
			<div>TasksBoard</div>
			<input
			style={{width:300, height: 25  }}  
			type="text" name="title" value={newTask.title} placeholder='Introduzca un titulo para la tarea' />
			<button
			type='button'
			onClick={() => setNewTask(newTask)}>Añadir tarea</button>
			<button>Editar tarea</button>
		</>
	)
}

export default TasksBoard