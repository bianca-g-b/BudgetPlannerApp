import { createSlice } from "@reduxjs/toolkit";

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