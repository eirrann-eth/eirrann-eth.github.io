import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  navLink: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconButton: {
    margin: theme.spacing(0, 1),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          eirrann.eth
        </Typography>
        <Button component={Link} to="/" color="inherit" className={classes.navLink}>
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit" className={classes.navLink}>
          About
        </Button>
        <Button component={Link} to="/gallery" color="inherit" className={classes.navLink}>
          Gallery
        </Button>
        <Button component={Link} to="/updates" color="inherit" className={classes.navLink}>
          Updates
        </Button>
        <Button component={Link} to="/contact" color="inherit" className={classes.navLink}>
          Contact
        </Button>
        <div className={classes.socialIcons}>
          <IconButton
            color="inherit"
            className={classes.iconButton}
            href="https://twitter.com/eirrann_eth"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.iconButton}
            href="https://linktr.ee/eirrann_eth"
            target="_blank"
            rel="noopener"
          >
            <LinkIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
