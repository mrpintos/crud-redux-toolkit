import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";



function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (e,id)=>{
    
    console.log("Delete", e, id)
    dispatch(deleteTask(id));
  }
  
  console.log("Tareas: ", tasks);
  return (
    <div>
      <header>
        <h2> Lista de tareas: {tasks.length} </h2>
        <Link to ='/create-task'> Crear Tarea</Link>
      </header>
      
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p> {task.description}</p>
          <button onClick={(e)=>{handleDelete(e,task.id)}}>Eliminar</button>
          <Link to ={`/edit-task/${task.id}`}> Editar Tarea</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
