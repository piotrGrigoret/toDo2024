import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


type SnackBarStatus = 'default' | 'error' | 'success' | 'warning' | 'info';
interface RegistrationSliceState {
    name: string;
    isAuth: boolean;
    snackBarMsg: string;
    snackBarStatus: SnackBarStatus;
}

export const initialState: RegistrationSliceState = {
    name: '',
    isAuth: false,
    snackBarMsg: '',
    snackBarStatus: 'default',
}
  


const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers:{

        setName(state, action: PayloadAction<string>){
            state.name = action.payload;
        },

        checkAuth(state){
            if(state.name.length > 2 && state.name.length <= 10){
                state.snackBarMsg = 'Successful authorization';
                state.snackBarStatus = 'success';
                state.isAuth = true;
            }else{
                state.snackBarMsg = 'Your nickname must be from 3 to 10 characters';
                state.snackBarStatus = 'error';
                state.isAuth = false;
            }
        },

    }
});

export const selectRegistration  = (state: RootState) => state.registration;

export const {setName, checkAuth} = registrationSlice.actions;
export default registrationSlice.reducer;
