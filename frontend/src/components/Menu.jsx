import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
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


export default function MenuAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const csrfToken = useSelector((state) => state.csrf.csrfToken);
  const user = useSelector((state) => state.user.username);
  console.log(user, "user in menu");
  
  const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);
  console.log(isAuthenticated, "isAuthenticated in menu");

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
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
              sx={{ mt: '45px' }}
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
  );
  }