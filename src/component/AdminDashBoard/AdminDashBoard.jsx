import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

export default function AdminDashBoard() {
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 200 }}>List of books</Typography>
        <Typography sx={{ minWidth: 200 }}>List of users</Typography>
        <Typography sx={{ minWidth: 200 }}>List of Orders</Typography>
        <Typography sx={{ minWidth: 200 }}>
            <Link href="/register" color="inherit" underline="none">Add Admin User</Link>
        </Typography>
        <Tooltip title="Account settings">
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            aria-haspopup="true"
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}