import { createSlice } from "@reduxjs/toolkit";

const initialState=[
{
    id:'1',
    title: 'Task 1',
    description: 'Descripción tarea 1',
    completed: false,
},
{
    id:'2',
    title: 'Task 2',
    description: 'Descripción tarea 2',
    completed: false,
},
{
    id:'3',
    title: 'Task 3',
    description: 'Descripción tarea 3',
    completed: false,
},
]
export const taskSlice = createSlice({
    name:'tasks',
    // Es lo mismo:
    //initialState: initialState,
    initialState,
    reducers: {
        addTask: (state, action)=>{
            //console.log(state,action)
            state.push(action.payload)
        },
        editTask: (state, action)=>{
            
          console.log(action)
        },
        deleteTask: (state, action)=>{
            
            const taskFound = state.findIndex(task => task.id===action.payload)
            if (taskFound!==-1) {
                state.splice(taskFound,1)
            }
        }
    }
})

export const {addTask,deleteTask,editTask} = taskSlice.actions
export default taskSlice.reducer