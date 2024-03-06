import "../../styles/chart/MainChart.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setDataset, setChartData, setTotalPages, setDataCount, setPage } from "../../redux/chartSlice.js";
import { getBudgetList } from "../../actions/budgetActions.js";
import { setBudgetList } from "../../redux/budgetSlice.js";
import { getChartSettings, getChartPaginationStyle, getChartSeries } from "../../styles/chart/chartStyle.js";
import { useHandleScreenSize } from "../../hooks/screenSizeHooks.js";
import { useFetchBudgets } from "../../hooks/budgetHooks.js";
import { useHandleDataset, useHandleChart } from "../../hooks/chartHooks.js";
import { handlePageChange } from "../../helpers/chartHelpers.js";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MainChart() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [chartHeight, setChartHeight] = useState(800);
    const [paginationSize, setPaginationSize] = useState("large");
    const budgetList = useSelector((state)=> state.budget.budgetList);
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const theme = useSelector((state) => state.theme.theme);
    const dataset = useSelector((state) => state.chart.dataset);
    const chartData = useSelector((state) => state.chart.chartData);
    const totalPages = useSelector((state) => state.chart.totalPages);
    const dataCount = useSelector((state) => state.chart.dataCount);
    const page = useSelector((state) => state.chart.page);
    
    const dispatch = useDispatch();

    // Fetch budgets data
    useFetchBudgets({dispatch, getBudgetList, csrfToken, setBudgetList});

    // Custom hook to update dataset when budgetList changes
    useHandleDataset({budgetList, dispatch, setDataset});

    // Custom hook to handle screen size
    useHandleScreenSize({screenWidth, setScreenWidth});

    // Custom hook to handle chart data, data count, total pages, chart height and pagination size
    useHandleChart({screenWidth, setChartHeight, setPaginationSize, dispatch, setDataCount, setTotalPages, setChartData, page, budgetList, dataset});
     
    // Set the chart settings
    const chartSettings = getChartSettings(chartHeight, theme, axisClasses, screenWidth);

    // Set pagination style
    const paginationStyle = getChartPaginationStyle(theme);

    const valueFormatter = (value) => `£ ${value}`;

    // Set chart series
    const chartSeries = getChartSeries(valueFormatter);

    return (
        <div className= {`main-bar-chart-div ${theme==='dark' ? 'main-bar-chart-div-dark' : '' }`}>
                {budgetList.length===0 && <div>
                  <NavLink 
                    to="/dashboard/addbudget"
                    className="empty-budget-chart-message">Add a budget to see the chart &#x21F1;</NavLink>
                </div>}

                {budgetList.length > 0 && chartData.length > 0 && <BarChart
                    dataset={chartData}
                    xAxis={[{scaleType: 'band', dataKey: 'x'}]}
                    series={chartSeries}
                    {...chartSettings}
                />}

                {budgetList.length > 0 && chartData.length > 0 && <Stack spacing={2} className="pagination-div">
                    <Pagination count={totalPages} 
                                color="primary"
                                size={paginationSize}
                                onChange = {(event, value) => handlePageChange(value, {dispatch, setPage, setChartData, dataset, dataCount})}
                                sx={paginationStyle}
                      />
                </Stack>}
        </div>
    )
}

export default MainChart;

