import "../styles/MainChart.css";
import { setDataset, setChartData, setTotalPages, setDataCount, setPage } from "../redux/chartSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MainChart() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [chartHeight, setChartHeight] = useState(800);
    const [paginationSize, setPaginationSize] = useState("large");
    const budgetList = useSelector((state)=> state.budget.budgetList);
    const theme = useSelector((state) => state.theme.theme);
    const dataset = useSelector((state) => state.chart.dataset);
    const chartData = useSelector((state) => state.chart.chartData);
    const totalPages = useSelector((state) => state.chart.totalPages);
    const dataCount = useSelector((state) => state.chart.dataCount);
    const page = useSelector((state) => state.chart.page);
    
    const dispatch = useDispatch();

    // have dataset updated when budgetList changes
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
    },[budgetList, dispatch])


    // console.log(data, "data");
    console.log(dataset, "dataset");
    console.log(chartData, "chartData");
    console.log(totalPages, "totalPages");
    console.log(dataCount, "dataCount");
    console.log(page, "page");


    useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);


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
    }, [screenWidth, page, budgetList.length, dataset, dispatch]);

    // write function to handle page change and set chartData to contain the right items from the dataset
    function handlePageChange(value) {
      // dispatch the current page
      dispatch(setPage(value));
      const firstIndex = (value-1) * dataCount;
      const lastIndex = firstIndex + dataCount;
      // dispatch the new chart data
      dispatch(setChartData(dataset.slice(firstIndex, lastIndex)));
    }
    
    // set the chart settings
    const chartSettings = {
        yAxis: [
          {
            label: 'GBP (£)',
          },
        ],
        height: chartHeight,
        sx: {
          "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsLegend-series text tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickLabel": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickLabel tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .css-1u0lry5-MuiChartsLegend-root .MuiChartsLegend-series text tspan": {fontSize: '.9rem'},
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-12px, 0)',
            fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 0.6)',
          },
          marginLeft: 3,
          marginRight: 3,
        },
        slotProps: {
          popper : {
            placement: 'auto',
            sx: {
              "& .css-1vz5lb3-MuiChartsTooltip-container": {
                backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
                },
              "& .css-2hvfka-MuiChartsTooltip-table" : {
                borderSpacing: '5px'
              },
              "& .css-s3y5yc-MuiChartsTooltip-cell" : {
                color: theme === 'dark' ? 'white' : 'black',
              },
              "& .css-s3y5yc-MuiChartsTooltip-cell.MuiChartsTooltip-valueCell" : {
                color: theme === 'dark' ? 'white' : 'black',
              }
            }     
          },
          legend: {
            position: { vertical: 'top', horizontal: 'middle' },
            itemGap: 20,
            marginBottom: 20,
            hidden: (screenWidth <= 900 ? true : false),
          }
        }
    };

    const valueFormatter = (value) => `£ ${value}`;

    return (
        <div className= {`main-bar-chart-div ${theme==='dark' ? 'main-bar-chart-div-dark' : '' }`}>
                {budgetList.length===0 && 
                <div>
                  <NavLink 
                    to="/dashboard/addbudget"
                    className="empty-budget-chart-message">Add a budget to see the chart &#x21F1;</NavLink>
                </div>
                }
                {budgetList.length > 0 && chartData.length > 0 && <BarChart
                    dataset={chartData}
                    xAxis={[{scaleType: 'band', dataKey: 'x'}]}
                    series={[
                        {dataKey: 'income', label: 'Income', valueFormatter},
                        {dataKey: 'essential', label: 'Essential Expenses', valueFormatter},
                        {dataKey: 'non_essential', label: 'Non-Essential Expenses', valueFormatter},
                        {dataKey: 'totalExpenses', label: 'Total Expenses', valueFormatter},
                        {dataKey: 'savings', label: 'Savings', valueFormatter},
                    ]}
                    {...chartSettings}
                /> }
                {budgetList.length > 0 && chartData.length > 0 && <Stack spacing={2} className="pagination-div">
                    <Pagination count={totalPages} 
                                color="primary"
                                size={paginationSize}
                                onChange = {(event, value) => handlePageChange(value)}
                                sx={{ 
                                "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"}, 
                                "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"},
                                "& .css-1hxrwmy-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"},
                                "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
                                "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
                                "& .css-1hxrwmy-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
                            }}
                      />
                </Stack>}
        </div>
    )
}

export default MainChart;

