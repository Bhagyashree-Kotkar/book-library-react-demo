import react from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material"

const Footers = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <AppBar position="fixed" color='secondary' sx={
                {
                    top:"auto",
                    bottom:0 ,
                    height: '10%'                 
                }
            }>
              <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       copyrights@2023
                    </Typography>                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Footers;