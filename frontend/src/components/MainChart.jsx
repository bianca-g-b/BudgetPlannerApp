import "../styles/MainChart.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MainChart() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    const [totalPages, setTotalPages] = useState(0);
    const theme = useSelector((state) => state.theme.theme);

    // extract chosen data from all budgets and create a dataset, then reverse it so that the most recently added budget is first
    const dataset = budgetList.map((budget, index)=> {
        return {
            x: `${budgetList.length-index}\n ${budget.date_from} - ${budget.date_to}`,
            income: parseFloat(budget.total_income),
            essential: parseFloat(budget.total_essential),
            non_essential: parseFloat(budget.total_non_essential),
            totalExpenses: parseFloat(budget.total_expenses),
            savings: parseFloat(budget.total_savings),
        }
    })
    dataset.reverse();

    // set chartData to be the first 5 items in the dataset
    const [chartData, setChartData] = useState(dataset.slice(0, 5));

    const chartSettings = {
        yAxis: [
          {
            label: 'GBP (£)',
          },
        ],
        height:800,
        sx: {
          "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line": {stroke: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)'},
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {stroke: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)'},
          "& .MuiChartsLegend-series text tspan": {fill: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)'},
          "& .MuiChartsAxis-tickLabel": {fill: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)'},
          "& .MuiChartsAxis-tickLabel tspan": {fill: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)'},
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-12px, 0)',
            fill: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)',
          },
          marginLeft: 3,
          marginRight: 3,
        },
        slotProps: {
          popper : {
            style: {
              width: '40%',
              transform: 'translate3d(-2.1rem, -2expx)',
              
            },
            placement: 'auto',
            sx: {
              "& .css-1vz5lb3-MuiChartsTooltip-container": {
                backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'white',
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
          }
        }
    };

    const valueFormatter = (value) => `£ ${value}`;

    // use effect to set total number of pages in pagination
    useEffect(() => {
        setTotalPages(Math.ceil(budgetList.length/5));
    },[budgetList])

    // write function to handle page change and set chartData to be the correct 5 items from the dataset
    function handlePageChange(value) {
      const firstIndex = (value-1) * 5;
      const lastIndex = firstIndex + 5;
      setChartData(dataset.slice(firstIndex, lastIndex));
    }


    return (
        <div className="main-bar-chart-div">
                {budgetList.length===0 && 
                <div>
                  <NavLink 
                    to="/dashboard/addbudget"
                    className="empty-budget-chart-message">Add a budget to see the chart &#x21F1;</NavLink>
                </div>
                }
                {budgetList.length > 0 && <BarChart
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
                {budgetList.length > 0 && <Stack spacing={2} className="pagination-div">
                    <Pagination count={totalPages} 
                                color="primary"
                                size="large" 
                                onChange = {(event, value) => handlePageChange(value)}
                                sx={{ 
                                "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"}, 
                                "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
                            }}
                      />
                </Stack>}
        </div>
    )
}

export default MainChart;

