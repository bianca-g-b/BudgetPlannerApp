import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "http://127.0.0.1:8000"

// get request
export const getBudgetList = createAsyncThunk(
    "api/budget",
    async() => {
        const response = await fetch(`${baseUrl}/api/budget`);
        console.log(response);
        if (response.ok) {
            const budgetList = await response.json();
            return budgetList;
        }
    }
)

export const budgetSlice = createSlice({
    name: "budget",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getBudgetList.fulfilled]: (state, action) => {
            state.budgetList = action.payload;
        }
    }
})

export default budgetSlice.reducer;