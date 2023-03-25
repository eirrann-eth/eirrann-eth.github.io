import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  linkButton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(2),
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Logo Here
        </Typography>
        <Button component={Link} to="/" color="inherit" className={classes.linkButton}>Home</Button>
        <Button component={Link} to="/about" color="inherit" className={classes.linkButton}>About</Button>
        <Button component={Link} to="/gallery" color="inherit" className={classes.linkButton}>Gallery</Button>
        <Button component={Link} to="/showcase" color="inherit" className={classes.linkButton}>Showcase</Button>
        <Button component={Link} to="/contact" color="inherit" className={classes.linkButton}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;


//In this code, I added the makeStyles hook to define styles for the title and linkButton classes. Using Material UI's theme.breakpoints.up function, I added a media query for screens that are wider than sm (600px).

//For screens wider than sm, the title class displays as a block element and the linkButton class displays as block elements with a left margin.



