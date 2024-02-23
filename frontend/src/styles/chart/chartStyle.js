// chart settings
export const getChartSettings = (chartHeight, theme, axisClasses, screenWidth) => ({
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
})

// chart pagination style
export const getChartPaginationStyle = (theme) => ({
    "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"}, 
    "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"},
    "& .css-1hxrwmy-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"},
    "& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
    "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
    "& .css-1hxrwmy-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
})

// chart series
export const getChartSeries = (valueFormatter) => ([
    {dataKey: 'income', label: 'Income', valueFormatter},
    {dataKey: 'essential', label: 'Essential Expenses', valueFormatter},
    {dataKey: 'non_essential', label: 'Non-Essential Expenses', valueFormatter},
    {dataKey: 'totalExpenses', label: 'Total Expenses', valueFormatter},
    {dataKey: 'savings', label: 'Savings', valueFormatter},
])