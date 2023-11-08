import { createSlice } from "@reduxjs/toolkit";

// create user slice
export const userSlice = createSlice({
    name: "user",
    initialState: {
       username: null, 
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload;
        },
    }
});

//export actions
export const {setUser} = userSlice.actions;

//export reducer
export default userSlice.reducer;