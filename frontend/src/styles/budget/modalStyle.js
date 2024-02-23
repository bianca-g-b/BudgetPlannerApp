// modals main style
export const modalStyle = (theme, modalWidth) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: modalWidth,
    bgcolor: theme === "dark" ? 'black' : 'white',
    color: theme === "dark" ?  'white' : 'black',
    border: theme === "dark" ? '1px solid #3f8be2a3' : '1px solid rgba(1, 115, 113, 0.144)',
    boxShadow: theme === "dark" ? '0 0 10px   #3f8be25a' : '0 0 10px #0173714a',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: 'center',
})

export const accountButtonStyle = {
    width: '100%',
    marginBottom: '4%',
    textAlign: 'center',
}