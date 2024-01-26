import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useSelector } from 'react-redux';

function MainChart() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    console.log(budgetList);

    const dataset = budgetList.map((budget, index)=> {
        return {
            x: index,
            income: parseFloat(budget.total_income),
            essential: parseFloat(budget.total_essential),
            non_essential: parseFloat(budget.total_non_essential),
            totalExpenses: parseFloat(budget.total_expenses),
            savings: parseFloat(budget.total_savings),
            date: `${budget.date_from} - ${budget.date_to}`,
        }
    })
    dataset.reverse();
    console.log(dataset);

    const chartSettings = {
        yAxis: [
          {
            label: 'GBP (£)',
          },
        ],
        height:800,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
        },
      };

    const valueFormatter = (value) => `£ ${value}`;


    return (
        <div>
                <BarChart
                    dataset={dataset}
                    xAxis={[{scaleType: 'band', dataKey: 'x', label: 'Dates'}]}
                    
                    series={[
                        {dataKey: 'income', label: 'Income', valueFormatter},
                        {dataKey: 'essential', label: 'Essential', valueFormatter},
                        {dataKey: 'non_essential', label: 'Non-essential', valueFormatter},
                        {dataKey: 'totalExpenses', label: 'Total Expenses', valueFormatter},
                        {dataKey: 'savings', label: 'Savings', valueFormatter},
                    ]}
                    {...chartSettings}
                /> 
        </div>
    )
}

export default MainChart;

