import { configureStore } from "@reduxjs/toolkit";
import registration from './slices/registrationSlice';
import tasks from './slices/taskSlice'
export const store = configureStore({
    reducer:{
        registration,
        tasks,
    }
})

export type RootState = ReturnType<typeof store.getState>