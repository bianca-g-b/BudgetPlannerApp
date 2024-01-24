import { createSlice } from "@reduxjs/toolkit";

// calculate todays date
const today = new Date();

// create budget fields slice
export const budgetFieldsSlice = createSlice({
    name: "budgetFields",
    initialState: {
        dateFrom: today.toLocaleDateString(),
        // dateFrom: today.toISOString().split('T')[0],
        // dateTo: new Date(today.setDate(today.getDate() + 30)).toISOString().split('T')[0],
        dateTo:new Date(today.setDate(today.getDate() + 30)).toLocaleDateString(),
        income: 0.0,
        housing: 0.0,
        utilities: 0.0,
        food: 0.0,
        transport: 0.0,
        household: 0.0,
        childcare: 0.0,
        cleaning: 0.0,
        otherEssential: 0.0,
        luxury: 0.0,
        leisure: 0.0,
        holidays: 0.0,
        otherNonEssential: 0.0,
        unsecuredDebt: 0.0,
        totalEssential: 0.0,
        totalNonEssential: 0.0,
        totalExpenses: 0.0,
        totalSavings: 0.0,
    },
    reducers: {
        setDateFrom: (state, action) => {
            state.dateFrom = action.payload;
        },
        setDateTo: (state, action) => {
            state.dateTo = action.payload;
        },
        setIncome: (state, action) => {
            state.income = action.payload;
        },
        setHousing: (state, action) => {
            state.housing = action.payload;
        },
        setUtilities: (state, action) => {
            state.utilities = action.payload;
        },
        setFood: (state, action) => {
            state.food = action.payload;
        },
        setTransport: (state, action) => {
            state.transport = action.payload;
        },
        setHousehold: (state, action) => {
            state.household = action.payload;
        },
        setChildcare: (state, action) => {
            state.childcare = action.payload;
        },
        setCleaning: (state, action) => {
            state.cleaning = action.payload;
        },
        setOtherEssential: (state, action) => {
            state.otherEssential = action.payload;
        },
        setLuxury: (state, action) => {
            state.luxury = action.payload;
        },
        setLeisure: (state, action) => {
            state.leisure = action.payload;
        },
        setHolidays: (state, action) => {
            state.holidays = action.payload;
        },
        setOtherNonEssential: (state, action) => {
            state.otherNonEssential = action.payload;
        },
        setUnsecuredDebt: (state, action) => {
            state.unsecuredDebt = action.payload;
        },
        setTotalEssential: (state, action) => {
            state.totalEssential = action.payload;
        },
        setTotalNonEssential: (state, action) => {
            state.totalNonEssential = action.payload;
        },
        setTotalExpenses: (state, action) => {
            state.totalExpenses = action.payload;
        },
        setTotalSavings: (state, action) => {
            state.totalSavings = action.payload;
        },
    }
})

// export actions
export const { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt, setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings } = budgetFieldsSlice.actions;

// export reducer
export default budgetFieldsSlice.reducer;