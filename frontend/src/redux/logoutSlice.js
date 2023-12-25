import { createSlice } from "@reduxjs/toolkit";

// create slice
export const logoutSlice  =createSlice({
    name: "logout",
    initialState: {
        logout: false,
    },
    reducers: {
        setLogout: (state, action) => {
            state.logout = action.payload;
        },
    }
})

// export actions
export const {setLogout} = logoutSlice.actions;

//export reducer
export default logoutSlice.reducer;