import "../styles/MainChart.css";
import { setDataset, setChartData, setTotalPages, setDataCount, setPage } from "../redux/chartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MainChart() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    const theme = useSelector((state) => state.theme.theme);
    // const [totalPages, setTotalPages] = useState(0);
    // const [dataCount, setDataCount] = useState(6);
    // const [page, setPage] = useState(1);
    const dataset = useSelector((state) => state.chart.dataset);
    const chartData = useSelector((state) => state.chart.chartData);
    const totalPages = useSelector((state) => state.chart.totalPages);
    const dataCount = useSelector((state) => state.chart.dataCount);
    const page = useSelector((state) => state.chart.page);


    const dispatch = useDispatch();

    // extract chosen data from all budgets and create a dataset
    const data = budgetList.map((budget, index)=> {
        return {
            x: `${budgetList.length-index}. \n ${budget.date_from} - ${budget.date_to}`,
            income: parseFloat(budget.total_income),
            essential: parseFloat(budget.total_essential),
            non_essential: parseFloat(budget.total_non_essential),
            totalExpenses: parseFloat(budget.total_expenses),
            savings: parseFloat(budget.total_savings),
        }
    })

    console.log(data, "data");
    console.log(dataset, "dataset");
    console.log(chartData, "chartData");
    console.log(totalPages, "totalPages");
    console.log(dataCount, "dataCount");
    console.log(page, "page");


    // set dataset to be the data

      async function allChartData() {
        dispatch(setDataset(data));
        dispatch(setChartData(data.slice(0, dataCount)));
        setTotalPages(Math.ceil(budgetList.length/dataCount));
      }

      useEffect(() => {
        allChartData();
      }, []);

    // set chartData to be the first 6 items in the dataset
    // const [chartData, setChartData] = useState(dataset.slice(0, dataCount));

    const chartSettings = {
        yAxis: [
          {
            label: 'GBP (£)',
          },
        ],
        height:800,
        sx: {
          "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsLegend-series text tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickLabel": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
          "& .MuiChartsAxis-tickLabel tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
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
          }
        }
    };

    const valueFormatter = (value) => `£ ${value}`;

    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    console.log(dataCount);

    // use effect to set total number of pages in pagination
    // useEffect(() => {
    //     setTotalPages(Math.ceil(budgetList.length/dataCount));
    // },[budgetList, dataCount])

    // write function to handle page change and set chartData to be the correct 5 items from the dataset
    function handlePageChange(value) {
      setPage(value);
      const firstIndex = (value-1) * dataCount;
      const lastIndex = firstIndex + dataCount;
      setChartData(dataset.slice(firstIndex, lastIndex));
    }



    // useEffect(() => {
    //   const firstIndex = (page-1) * dataCount;
    //   const lastIndex = firstIndex + dataCount;
    //   if (screenWidth <= 600) {
    //     setDataCount(3);
    //     setChartData(dataset.slice(firstIndex, lastIndex));
    //     // window.location.reload();
    //   } else if (screenWidth <= 900) {
    //     setDataCount(4);
    //     setChartData(dataset.slice(firstIndex, lastIndex));
    //     // window.location.reload();
    //   } else if (screenWidth <= 1200) {
    //     setDataCount(5);
    //     setChartData(dataset.slice(firstIndex, lastIndex));
    //     // window.location.reload();
    //   } else if (screenWidth > 1200) {
    //     setDataCount(6);
    //     setChartData(dataset.slice(firstIndex, lastIndex));
    //     // window.location.reload();
    //   }
    // }, [screenWidth, page,])

    return (
        <div className= {`main-bar-chart-div ${theme==='dark' ? 'main-bar-chart-div-dark' : '' }`}>
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

