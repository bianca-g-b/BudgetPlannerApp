import { createSlice } from "@reduxjs/toolkit";

// create slice
export const authenticatedSlice  =createSlice({
    name: "authenticated",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    }
})

// export actions
export const {setIsAuthenticated} = authenticatedSlice.actions;

//export reducer
export default authenticatedSlice.reducer;