import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { toggleTheme } from '../../redux/themeSlice';
import { handleLogout } from '../../helpers/authHelpers';
import { useHandleScreenSize } from '../../hooks/screenSizeHooks';
import { useHandleMenuStyle } from '../../hooks/menuHooks';
import { getAppBarSx, getMenuSx, getLinkSx } from '../../styles/menu/menuStyle';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [linkFontSize, setLinkFontSize] = useState('1.2rem');
  const [menuIconFontSize, setMenuIconFontSize] = useState('1.5rem');
  const [linkMargin, setLinkMargin] = useState('15px');
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

  // Hook for screen size
  useHandleScreenSize({screenWidth, setScreenWidth});

  // Hook for menu style
  useHandleMenuStyle({screenWidth, setLinkFontSize, setMenuIconFontSize, setLinkMargin});

  // toggle theme
  const handleTheme = () => {
    dispatch(toggleTheme());
  }

  // Styles
  const appBarSx = getAppBarSx(theme);
  const menuSx = getMenuSx(theme);
  const linkSx = getLinkSx(linkFontSize, linkMargin);

  return (
    <>
    <AppBar 
      position="absolute"
      sx = {appBarSx}
      >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', maxWidth: '100%', justifyContent: 'flex-start' }}>
            {isAuthenticated && <Button
            component={Link}
            href="/dashboard"
            sx={linkSx}
            >Budgets
            </Button>}

            {isAuthenticated && <Button
            component={Link}
            href="/chart"
            sx={linkSx}
            >Chart
            </Button>}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row'}}>
            <IconButton
              sx = {{marginRight: '10px', marginTop: '2px'}}
              onClick={handleTheme}
              color="inherit"
              aria-label="toggle theme">
              {theme === "light" ? <DarkModeRoundedIcon sx={{color: "#1a233a", fontSize: menuIconFontSize}}/> : <Brightness7RoundedIcon sx={{color: " #FDB813", fontSize: menuIconFontSize}}/>}
            </IconButton>

            <Tooltip title="Open menu">
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={{ p: 0 }}
                size="large"
                aria-label="menu for current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color= "inherit">
                <GridViewIcon sx={{fontSize: menuIconFontSize}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={menuSx}
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
                  onClick={() => handleLogout({logoutUser, dispatch, csrfToken, navigate, handleCloseUserMenu})}
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