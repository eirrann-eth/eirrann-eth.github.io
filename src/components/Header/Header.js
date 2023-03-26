import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Logo Here
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/gallery" color="inherit">Gallery</Button>
        <Button component={Link} to="/showcase" color="inherit">Showcase</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
