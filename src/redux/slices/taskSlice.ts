import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { nanoid } from 'nanoid';

interface Task {
    id: string;
    name: string;
    description: string;
    isChecked: boolean;
}
interface TaskSliceState {
    allTasks: Task[]; 
    tasks: Task[];
    task: Task;
    filter: FilterStatus;
}

export type FilterStatus = 'all' | 'active' | 'completed' | 'clear';


// const initialState: TaskSliceState = {
const createInitialState = (): TaskSliceState => ({

    allTasks:    
    [{
        id: nanoid(),
        name:'Invite the creator for an interview',             
        description: 'Your first task: send an interview invite to the developer who built this handy to-do list! He tried very hard and he needs a job:)',   
        isChecked: false
    }],         
    tasks: [],  
    
    task:{
        id: '',
        name: '',
        description: '',
        isChecked: false
    },
    filter: 'all', 

})
const initialState = createInitialState();
initialState.tasks = [...initialState.allTasks];

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
        setIsCheked(state, action: PayloadAction<string>){
            const task = state.tasks.find(task => task.id === action.payload);
            const alTask = state.allTasks.find(task => task.id === action.payload);
            if (task) {
              task.isChecked = !task.isChecked;
            //   alTask.isChecked = !alTask.isChecked;
            }
            if (alTask) {
                alTask.isChecked = !alTask.isChecked;
              }
        },
        addTask(state){
            const newTask = {
                id: nanoid(),
                name: state.task.name,
                description: state.task.description,
                isChecked: false 
            }
            state.allTasks = [...state.tasks, newTask];
            if(state.filter === 'all' ){
                state.tasks = [...state.allTasks];
            }else if(state.filter === 'active' || state.filter === 'clear'){
                state.tasks = [...state.allTasks].filter((t) => t.isChecked === false);
            }
            state.task.name = '';
            state.task.description = '';
        },
        filterTasks(state, action: PayloadAction<FilterStatus>){
            console.log(action.payload);
            state.filter  = action.payload;
            
            switch (state.filter) {
                case 'all':
                  state.tasks = state.allTasks;
                  break;
                case 'active':
                  state.tasks = state.allTasks.filter(t => !t.isChecked);
                  break;
                case 'completed':
                  state.tasks = state.allTasks.filter(t => t.isChecked);
                  break;
                case 'clear':
                  state.allTasks = state.allTasks.filter(t => !t.isChecked);
                  state.tasks = state.allTasks;
                  break;
            }
        }

    }

});

export const selectTask =  (state: RootState) => state.tasks;
export const{setTaskName, setTaskDescription, setIsCheked, addTask, filterTasks} = taskSlice.actions;
export default taskSlice.reducer;