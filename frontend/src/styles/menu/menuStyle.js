// AppBar style
export const getAppBarSx = (theme) => ({
    backgroundColor: theme === "dark" ? "#0c1225" : "#1976d2",
    color: 'white',
    boxShadow: 0,
    position: 'fixed',
    borderBottom: theme === "dark" ? ' 1px solid #3f6de229' : '1px solid white',
    zIndex: (theme) => theme.zIndex.drawer + 1,    
})

// Menu style
export const getMenuSx = (theme) => ({
    mt: '45px',
    '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper' : {
      backgroundColor: theme === "dark" ? "#1a1a1a" : "#1976d2",
      border: theme === "dark" ? '1px solid black' : '1px solid white',
      color: 'white',    
    }
})

// Links style
export const getLinkSx = (linkFontSize, linkMargin) => ({
    my: 1, 
    color: 'white', 
    display: 'block', 
    fontSize: linkFontSize, 
    fontWeight: '600', 
    letterSpacing: '0.2rem', 
    marginLeft: linkMargin, 
    textTransform: 'uppercase', 
    '&:hover': {color: '#cfe2ff'}
})