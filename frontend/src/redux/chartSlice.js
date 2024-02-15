import { createSlice } from "@reduxjs/toolkit";

// create chart slice
export const chartSlice = createSlice({
    name: "chart",
    initialState: {
        dataset: [],
        chartData: [],
        totalPages: 0,
        dataCount: 6,
        page: 1,
    },
    reducers: 
    {
        setDataset: (state, action) => {
            state.dataset = action.payload;
        },
        setChartData: (state, action) => {
            state.chartData = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setDataCount: (state, action) => {
            state.dataCount = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    }
})

// export actions
export const { setDataset, setChartData, setTotalPages, setDataCount, setPage } = chartSlice.actions;

// export reducer
export default chartSlice.reducer;