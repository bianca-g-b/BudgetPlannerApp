// Style for the input fields
export const getInputFieldStyle = (theme) => ({
    border: `1px solid ${theme === 'dark' ? '#3f8be236' : '#0173714a'}`,
    backgroundColor: theme === 'dark' ? '#1d14a711' : '',
    color: theme === 'dark' ? 'white' : '',
})

// Style for the form labels
export const getFormLabelStyle = (labelFontSize) => ({
    fontSize: labelFontSize,
})