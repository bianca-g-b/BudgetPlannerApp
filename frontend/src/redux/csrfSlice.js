import { createSlice } from '@reduxjs/toolkit';

// create csrf slice
export const csrfSlice = createSlice({
    name: "csrf",
    initialState: {
        csrfToken: null,
    },
    reducers: {
        setCSRFToken: (state, action) => {
            state.csrfToken = action.payload;
        }
    }
})

// export actions
export const { setCSRFToken } = csrfSlice.actions;

// export reducer
export default csrfSlice.reducer;