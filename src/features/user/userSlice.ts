import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserType {
    role: string;
    name: string;
    email: string;
    password: string;
    subscribed?: boolean;
}

const initialValue: UserType = {
    role: '',
    name: '',
    email: '',
    password: '',
    subscribed: false
}

export const userSlice = createSlice({
    name:'user',
    initialState: initialValue,
    reducers: {
        updateState: (state:any, action:PayloadAction<UserType>)=>{
            // console.log(state, action.payload);
            Object.assign(state, action.payload);
            
        }
    }

});

export const { updateState } = userSlice.actions;

export default userSlice.reducer;