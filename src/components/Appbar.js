import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            userSelect: "none",
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
            Pokédex
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
