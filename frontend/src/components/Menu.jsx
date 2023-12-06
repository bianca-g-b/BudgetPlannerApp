import { useState } from 'react';
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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
          >
            <Button
            component={Link}
            href="/dashboard"
            sx={{ my: 2, color: 'white', display: 'block' }}
            >Budgets
            </Button>

            <Button
            component={Link}
            href="/dashboard"
            sx={{ my: 2, color: 'white', display: 'block' }}
            >Graph
            </Button>
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

                <MenuItem 
                    component = {Link}
                    href="/dashboard/addbudget"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>

                <MenuItem 
                    component = {Link}
                    href="/dashboard/addbudget"
                    onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  }