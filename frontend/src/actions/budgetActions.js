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

// get request - get a budget by id
export const getBudgetById = createAsyncThunk(
    "api/budget", async(id, thunkAPI)=>{
        const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
        const response = await fetch(`${baseUrl}/api/budget/${id}/`, {
            method: "GET",
            mode: "cors",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            credentials: "include",
        });
        if (response.ok) {
            const budgetById = await response.json();
            return budgetById
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

// post request - create a budget
export const addBudget = createAsyncThunk(
    "api/budget", async(details, thunkAPI) => {
        const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
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
            return newBudget;
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

// patch request - edit a budget
export const editBudget = createAsyncThunk(
    "api/budget", async(/*id, */details, thunkAPI) => {
        const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
        const response = await fetch(`${baseUrl}/api/budget/${details.id}/`, {
            method: "PATCH",
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
            const editedBudget = await response.json();
            return editedBudget;
        } else {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

// delete request - delete a budget
export const deleteBudget = createAsyncThunk(
    "api/budget", async(id, thunkAPI) => {
        const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
        const response = await fetch(`${baseUrl}/api/budget/${id}/`,{
            method: "DELETE",
            mode: "cors",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            credentials: "include",
        });
        if (response.ok) {
            return {"status": 204}
        } else {
            return thunkAPI.rejectWithValue({"status": 400});
        }
    }
)