import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h4">Pokedex</Typography>
      </Toolbar>
    </AppBar>
  );
};
