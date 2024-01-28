import "../styles/MainChart.css";
import { useState, useEffect } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MainChart() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    const [totalPages, setTotalPages] = useState(0);

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
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-12px, 0)',
          },
            marginLeft: 3,
            marginRight: 3,
        },
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
                <BarChart
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
                /> 
                <Stack spacing={2} className="pagination-div">
                    <Pagination count={totalPages} 
                                color="primary"
                                size="large" 
                                onChange = {(event, value) => handlePageChange(value)}
                      />
                </Stack>
        </div>
    )
}

export default MainChart;
