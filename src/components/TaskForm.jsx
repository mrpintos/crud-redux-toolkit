import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import {v4 as uuid} from "uuid"
import { useNavigate, useParams } from "react-router-dom";
function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const tasks = useSelector(state=>state.tasks)
  const handledChange = (e) => {
    //console.log(e.target.name, e.target.value)
    //setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    // Evita que se recargue la página...
    //console.log("Evento:", e);
    if(!params.id){
    const elements = e.target;
    //let elements = document.getElementById("formTask").elements;
    //console.log(elements);
    let newTask = {};
    for (let i = 0, element; (element = elements[i++]); ) {
      if (element.name) {
        //console.log(element.name, element.value)
        newTask[element.name] = element.value;
      }
    }
    // Generamos el id único.
    newTask.id = uuid()
    newTask.completed = false
    console.log("Tarea nueva: ",newTask)
    setTask(newTask);
    dispatch(addTask(newTask));
  }else{
    dispatch(editTask(task));
  }

    navigate("/")
    // Otra forma de obener los valores
    //console.log("Titulo: ", document.getElementsByName('title'))
  };
  useEffect(()=>{
    if (params.id){
      setTask(tasks.find((task) => task.id === params.id));
    }
  },[])
  return (
    <form id="formTask" onSubmit={handledSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handledChange}
        value={task.title}
      ></input>
      <textarea
        name="description"
        placeholder="Description"
        onChange={handledChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
