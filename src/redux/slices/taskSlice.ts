import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TaskSliceState {

}

const initialState: TaskSliceState = {

}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        // addTask
    }

});

export default taskSlice.reducer;