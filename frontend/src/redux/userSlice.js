import { createSlice } from "@reduxjs/toolkit";

// create user slice
export const userSlice = createSlice({
    name: "user",
    initialState: {
       username: null,
       user_id: null,
       email: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload;
        },
        setUserId: (state, action) => {
            state.user_id = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

//export actions
export const {setUser, setUserId, setEmail} = userSlice.actions;

//export reducer
export default userSlice.reducer;