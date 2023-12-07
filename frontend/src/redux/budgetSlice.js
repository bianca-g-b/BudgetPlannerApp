import { createSlice } from "@reduxjs/toolkit";

// create budget slice
export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budgetList: [],
        budgetById: null,
        id: null,
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
        updateBudget: (state, action) => {
            const index = state.budgetList.findIndex((budget) => budget.id === action.payload.id);
            state.budgetList[index] = action.payload;
        },
        setId: (state, action) => { //
            state.id = action.payload;
        },
        removeBudget: (state, action) => {
            state.budgetList = state.budgetList.filter((budget) => budget.id !== action.payload);
        },    
    }
})

// export actions
export const { setBudgetList, createBudget, setBudgetById, updateBudget, setId, removeBudget } = budgetSlice.actions;

// export reducer
export default budgetSlice.reducer;