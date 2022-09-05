import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";

function Appbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700
            }}>
              My Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;