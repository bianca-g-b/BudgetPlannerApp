/*MAIN CHART HELPER FUNCTIONS*/

export const handlePageChange = (value, {dispatch, setPage, setChartData, dataset, dataCount}) => {
    // dispatch the current page
    dispatch(setPage(value));
    const firstIndex = (value-1) * dataCount;
    const lastIndex = firstIndex + dataCount;
    // dispatch the new chart data
    dispatch(setChartData(dataset.slice(firstIndex, lastIndex)))
}