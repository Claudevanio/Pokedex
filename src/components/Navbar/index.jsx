import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const Navbar = ({ pokemonFilter }) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Box component="img" src="/assets/pokemon_logo.png" height="6em" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
