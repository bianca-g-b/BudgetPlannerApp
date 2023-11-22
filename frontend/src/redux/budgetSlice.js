import { createSlice } from "@reduxjs/toolkit";

// create budget slice
export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budgetList: [],
        budgetById: {test:"test"},
    },
    reducers: 
    {
        setBudgetList: (state, action) => {
            state.budgetList = action.payload;
        },
        setBudgetById: (state,action) => {
            state.budgetById = action.payload;
        },
        createBudget: (state, action) => {
            state.budgetList.push(action.payload);
        },
    }
})

// export actions
export const { setBudgetList, createBudget, setBudgetById } = budgetSlice.actions;

// export reducer
export default budgetSlice.reducer;