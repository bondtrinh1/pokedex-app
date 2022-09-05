import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from "@mui/material";

function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 1000 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700, 
            }}>
              My Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;