import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
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
                // credentials: "include",
                // withCredentials: true,
            },
            credentials: "include",         
        });
        console.log(response);
        if (response.ok) {
            console.log("response: ",response);
            console.log(response.data);
            const budgetList = await response.json();
            return budgetList;
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

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

export const { setBudgetList } = budgetSlice.actions;

export default budgetSlice.reducer;