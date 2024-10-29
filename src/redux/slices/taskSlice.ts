import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AddTask } from "@mui/icons-material";


interface Task {
    name: string;
    description: string;
    isChecked: boolean;
}
interface TaskSliceState {
    tasks: Task[];
    task: Task;
}



const initialState: TaskSliceState = {
    tasks: 
    [{
        name:'Invite the creator for an interview',             
        description: 'Your first task: send an interview invite to the developer who built this handy to-do list! He tried very hard and he needs a job:)',   
        isChecked: false
    }],  
    task:{
        name: '',
        description: '',
        isChecked: false
    } 
}



const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        setTaskName(state, action: PayloadAction<string>){
            state.task.name = action.payload;
        },
        setTaskDescription(state, action: PayloadAction<string>){
            state.task.description = action.payload;
        },
        setIsCheked(state, action: PayloadAction<number>){
            const task = state.tasks[action.payload];
            if (task) {
              task.isChecked = !task.isChecked;
            }
        },
        addTask(state){
            const newTask = {
                name: state.task.name,
                description: state.task.description,
                isChecked: false 
            };
            state.tasks = [...state.tasks, newTask];
            state.task.name = '';
            state.task.description = '';
        },

    }

});

export const selectTask =  (state: RootState) => state.tasks;
export const{setTaskName, setTaskDescription, setIsCheked, addTask} = taskSlice.actions;
export default taskSlice.reducer;