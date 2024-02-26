// sx for alerts
export const successAlertStyle = (theme) => ({
    width: '100%',
    bgcolor: theme === "dark" ? 'rgb(12, 19, 13)' : 'rgb(237, 247, 237);',
    color: theme === "dark" ?  'rgb(204, 232, 205)' : 'rgb(30, 70, 32)',
})

export const warningAlertStyle = (theme) => ({
    width: '100%',
    bgcolor: theme === "dark" ? 'rgb(25, 18, 7)' : 'rgb(255, 244, 229)',
    color: theme === "dark" ?  'rgb(255, 226, 183)' : 'rgb(102, 60, 0)',
})

export const errorAlertStyle = (theme) => ({
    width: '100%',
    bgcolor: theme === "dark" ? 'rgb(22, 11, 11)' : 'rgb(253, 237, 237)',
    color: theme === "dark" ?  'rgb(244, 199, 199)' : 'rgb(95, 33, 32)',
})