import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "http://127.0.0.1:8000"

// get request
export const getBudgetList = createAsyncThunk(
    "api/budget", async(csrfToken,thunkAPI) => {
        const response = await fetch(`${baseUrl}/api/budget/`, {
            method: "GET",
            mode: "cors",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "CSRF-Token": csrfToken,
            },
            credentials: "include",         
        });
        if (response.ok) {
            const budgetList = await response.json();
            return budgetList;
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

// create budget slice
export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budgetList: null,
    },
    reducers: 
    {
        setBudgetList: (state, action) => {
            state.budgetList = action.payload;
        }
    }
})

// export actions
export const { setBudgetList } = budgetSlice.actions;

// export reducer
export default budgetSlice.reducer;