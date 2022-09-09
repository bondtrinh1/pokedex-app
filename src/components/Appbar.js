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
            sx={{ fontWeight: 700 }}>
              Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;