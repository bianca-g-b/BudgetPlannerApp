import { useEffect } from "react";

export function useHandleDataset(budgetList, dispatch, setDataset) {
    useEffect(() => {
      // extract chosen data from all budgets and create a dataset
      const data = budgetList.map((budget, index)=> {
          return {
              x: `${index +1}. \n ${budget.date_from} - ${budget.date_to}`,
              income: parseFloat(budget.total_income),
              essential: parseFloat(budget.total_essential),
              non_essential: parseFloat(budget.total_non_essential),
              totalExpenses: parseFloat(budget.total_expenses),
              savings: parseFloat(budget.total_savings),
          }
      })  
      dispatch(setDataset(data));
    },[budgetList, dispatch, setDataset])
}

export function useHandleChart({screenWidth, setChartHeight, setPaginationSize, dispatch, setDataCount, setTotalPages, setChartData, page, budgetList, dataset}) {
    useEffect(() => {
        // calculate the new data count based on screen width and set the chart height and pagination size accordingly 
        let newDataCount;
        if (screenWidth <= 900) {
            newDataCount = 3;
            setChartHeight(600);
            setPaginationSize("small");
        } else if (screenWidth <= 1600) {
            newDataCount = 4;
            setChartHeight(700);
            setPaginationSize("medium");
        } else {
            newDataCount = 6;
            setChartHeight(800);
            setPaginationSize("large");
        }
    
        // dispatch the data count
        dispatch(setDataCount(newDataCount));

        // calculate the total number of pages based on the data count
        const newTotalPages = Math.ceil(budgetList.length / newDataCount);
        dispatch(setTotalPages(newTotalPages));

        // calculate the new chart data based on the data count and current page
        const firstIndex = (page - 1) * newDataCount;
        const lastIndex = firstIndex + newDataCount;
        const newChartData = dataset.slice(firstIndex, lastIndex);
        dispatch(setChartData(newChartData));
    }, [screenWidth, page, budgetList.length, dataset, dispatch, setChartHeight, setPaginationSize, setDataCount, setTotalPages, setChartData]);
}

export const handlePageChange = (value, {dispatch, setPage, setChartData, dataset, dataCount}) => {
    // dispatch the current page
    dispatch(setPage(value));
    const firstIndex = (value-1) * dataCount;
    const lastIndex = firstIndex + dataCount;
    // dispatch the new chart data
    dispatch(setChartData(dataset.slice(firstIndex, lastIndex)))
}