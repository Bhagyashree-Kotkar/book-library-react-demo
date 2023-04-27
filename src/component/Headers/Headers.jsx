import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Headers() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
          {/*<IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
              <Link href="/menuListAccount" color="inherit" underline="none">Menu</Link>
    </IconButton> */}
            <IconButton href="/home" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              < HomeIcon/>
            </IconButton>
            <IconButton href="/cart" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              < ShoppingCartCheckoutIcon/>
            </IconButton>
            <Typography variant="h4" align="center" component="div" sx={{ flexGrow: 1 }}>
              Book Library
            </Typography>

            <IconButton href="/collections" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              collections
            </IconButton>
            {/*<IconButton href="/about" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              About
            </IconButton> 
            <IconButton href="/donate" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              Donate
            </IconButton> */}
            <IconButton href="/login" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              SignIn
            </IconButton>
            <IconButton href="/register" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              SignUp
            </IconButton>
            
            {/*<IconButton href="/login" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <LoginIcon/>
            </IconButton>
            <IconButton href="/register" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <AppRegistrationIcon/>
  </IconButton>*/}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }