import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://127.0.0.1:8000";

// get request - view the budgets
export const getBudgetList = createAsyncThunk(
    "api/budget", async(csrfToken,thunkAPI) => {
        const response = await fetch(`${baseUrl}/api/budget/`, {
            method: "GET",
            mode: "cors",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                'X-CSRFToken': csrfToken,
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