import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeImage from '../../images/HomeImage.jpg';

export default function UserDashBoard() {
  
  return (
    <React.Fragment>
      <br/><br/>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconButton href="/profile" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 10, textAlign: 'center' }}>
         Profile
        </IconButton>
      
        <IconButton href="/cart" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 10, textAlign: 'center' }}>
          Cart
        </IconButton>

        <Typography sx={{ minWidth: 200 }}>Order History</Typography>
        <Typography sx={{ minWidth: 200 }}>Favourites</Typography>
        <IconButton href="/" size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 10, textAlign: 'right' }}>
          < LogoutIcon/>
        </IconButton>
      </Box>
      <div>
        <br/><br/>
        <img src={HomeImage} height={500} width={'100%'} alt='not found'></img>
      </div>
    </React.Fragment>
  );
}