import { createSlice } from '@reduxjs/toolkit';

// create crrf slice
export const csrfSlice = createSlice({
    name: "csrf",
    initialState: {
        csrfToken: null,
    },
    reducers: {
        setSCRSToken: (state, action) => {
            state.csrfToken = action.payload;
        }
    }
})

// export actions
export const { setSCRSToken } = csrfSlice.actions;

// export reducer
export default csrfSlice.reducer;