import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
            Pokédex
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
