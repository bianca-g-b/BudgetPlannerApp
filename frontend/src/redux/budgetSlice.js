import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
const baseUrl = "http://127.0.0.1:8000";

// post request - create a budget
export const addBudget = createAsyncThunk(
    "api/budget", async(details, thunkAPI) => {
        const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
        console.log("test in slice:", csrfToken);
        const response = await fetch(`${baseUrl}/api/budget/`, {
            method: "POST",
            mode: "cors",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            credentials: "include",
            body: JSON.stringify(details),
        });
        if (response.ok) {
            const newBudget = await response.json();
            console.log(newBudget);
            return newBudget;
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

// create budget slice
export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budgetList: [],
    },
    reducers: 
    {
        setBudgetList: (state, action) => {
            state.budgetList = action.payload;
        },
        createBudget: (state, action) => {
            state.budgetList.push(action.payload);
        },
    }
})

// export actions
export const { setBudgetList, createBudget } = budgetSlice.actions;

// export reducer
export default budgetSlice.reducer;