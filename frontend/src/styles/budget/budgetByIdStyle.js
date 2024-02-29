import { createTheme } from '@mui/material/styles';

export const getListStyle = {
    padding: '0',
}

export const getListTypeStyle = (theme) =>({
    borderBottom: theme === 'dark' ? '1px solid rgba(5,815,313,0.6)' : '1px solid rgba(1,115,113,0.5)',
    borderTop: theme === 'dark' ? '1px solid rgba(5,815,313,0.6)' : '1px solid rgba(1,115,113,0.5)',
    textTransform: 'uppercase',
    color: theme === 'dark' ? 'rgba(5,815,313,0.8)' : 'rgb(1, 115, 113)',
    textAlign: 'center',
    marginTop: '2px',
    marginBottom: '2px',
    paddingTop: '3px',
})

export const getItemTextColour = (theme, itemFontSize) => ({
    color: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)',
    fontSize: itemFontSize,
})

export const getEssentialIconStyle = (theme, iconSize) => ({
    color: '#ec3e94',
    backgroundColor: theme==='dark' ? '#0a0a1e' : 'white',
    border: '1px solid #ec3e94',
    width: iconSize,
    height: iconSize,
})

export const getNonEssentialIconStyle = (theme, iconSize) => ({
    color: '#fd7e14',
    backgroundColor: theme==='dark' ? '#0a0a1e' : 'white',
    border: '1px solid #fd7e14',
    width: iconSize,
    height: iconSize,
})

export const getIncomeIconStyle = (theme, iconSize) => ({
    color: '#36a67e',
    backgroundColor: theme==='dark' ? '#0a0a1e' : 'white',
    border: '1px solid #36a67e',
    width: iconSize,
    height: iconSize,
})

export const getSavingsIconStyle = (theme, iconSize) => ({
    color: '#2394d0',
    backgroundColor: theme==='dark' ? '#0a0a1e' : 'white',
    border: '1px solid #2394d0',
    width: iconSize,
    height: iconSize,
})

export const getTotalSpendingIconStyle = (theme, iconSize) => ({
    color: '#dc3545',
    backgroundColor: theme==='dark' ? '#0a0a1e' : 'white',
    border: '1px solid #dc3545',
    width: iconSize,
    height: iconSize,
})

export const getIconSx = (iconFontSize) => ({
    fontSize: iconFontSize,
})

export const getFontTheme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
})

export const getListItemStyle = {
    paddingBottom: '1px',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
}

export const getPrimaryTypographyProps  = (itemFontSize) => ({
    fontSize: itemFontSize,
})

export const getTotalsPadding = (sidesPadding, verticalPadding) => ({
    padding: `${verticalPadding} ${sidesPadding}`,
})

export const getBarChartSx = (theme) => ({
    "& .css-1rbllhb-MuiChartsAxis-root .MuiChartsAxis-line": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {stroke: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
    "& .MuiChartsLegend-series text tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
    "& .MuiChartsAxis-tickLabel": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
    "& .MuiChartsAxis-tickLabel tspan": {fill: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0, 0, 0, 1)'},
})

export const getBarChartData = [
    'Housing',
    'Utilities',
    'Food and drinks',
    'Transport',
    'Household',
    'Childcare',
    'Cleaning and toiletries',
    'Other essential',
    'Luxury and gifts',
    'Leisure and entertainment',
    'Holidays',
    'Charity',
    'Other non-essential',
    'Unsecured debt',
]

export const getPopperSx = (theme) => ({
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
    },
})