import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { toggleTheme } from '../../redux/themeSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import GridViewIcon from '@mui/icons-material/GridView';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';



export default function MenuAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const csrfToken = useSelector((state) => state.csrf.csrfToken);
  const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);
  const theme = useSelector((state) => state.theme.theme);  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // logout user and clear states for user and isAuthenticated
  const handleLogout = async () => {
    const response  = await logoutUser(dispatch, csrfToken);
    if (response.status === 202) {
        console.log("logout successful");
        handleCloseUserMenu();
        navigate("/login"); 
    } else {
        alert("Logout failed. Please try again.");
        throw new Error("Logout failed");
    }
}

// toggle theme
const handleTheme = () => {
  dispatch(toggleTheme());
}

  return (
    <>
    <AppBar 
      position="absolute"
      sx = {{
        backgroundColor: theme === "dark" ? "#0c1225" : "#1976d2",
        color: 'white',
        boxShadow: 0,
        position: 'fixed',
        borderBottom: theme === "dark" ? ' 1px solid #3f6de229' : '1px solid white',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box 
          sx={{ flexGrow: 1, display: 'flex', maxWidth: '100%', justifyContent: 'flex-start' }}
          >

            {isAuthenticated && <Button
            component={Link}
            href="/dashboard"
            sx={{ my: 1, color: 'white', display: 'block', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0.2rem', textTransform: 'uppercase', '&:hover': {color: '#cfe2ff'}}}
            >Budgets
            </Button>}

            {isAuthenticated && <Button
            component={Link}
            href="/chart"
            sx={{ my: 1, color: 'white', display: 'block', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0.2rem', marginLeft: '15px' ,textTransform: 'uppercase', '&:hover': {color: '#cfe2ff'}}}
            >Chart
            </Button>}

          </Box>

          <Box sx={{ flexGrow: 0 }}>

          <IconButton
            sx = {{marginRight: '10px', marginTop: '2px'}}
            onClick={handleTheme}
            color="inherit"
            aria-label="toggle theme"
          >
            {theme === "light" ? <DarkModeRoundedIcon sx={{color: "#1a233a"}}/> : <Brightness7RoundedIcon sx={{color: " #FDB813"}}/>}
          </IconButton>

            <Tooltip title="Open menu">
              <IconButton 
              onClick={handleOpenUserMenu} 
              sx={{ p: 0 }}
              size="large"
              aria-label="menu for current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color= "inherit"
              >
                <GridViewIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ 
                mt: '45px',
                '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper' : {
                  backgroundColor: theme === "dark" ? "#1a1a1a" : "#1976d2",
                  border: theme === "dark" ? '1px solid black' : '1px solid white',
                  color: 'white',
                  }
                }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 

                <MenuItem 
                    component = {Link}
                    href="/"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>     

                {isAuthenticated && <MenuItem 
                    component = {Link}
                    href="/account"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>}

                <MenuItem 
                    component = {Link}
                    href="/calculator"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Calculator</Typography>
                </MenuItem>

                {isAuthenticated && <MenuItem 
                    onClick={handleLogout}
                    >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>}

                {!isAuthenticated && <MenuItem 
                    component = {Link}
                    href="/register"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>}

                {!isAuthenticated && <MenuItem 
                    component = {Link}
                    href="/login"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>}
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Outlet />
    </>
  );
  }