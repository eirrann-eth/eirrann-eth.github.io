import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  // ... (unchanged styles)
}));

function Header() {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenNarrow, setIsScreenNarrow] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenNarrow(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setIsMenuOpen(false);
  };

  const renderNavLinks = () => {
    if (isScreenNarrow) {
      return (
        <div style={{ marginLeft: 'auto' }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/gallery" onClick={handleMenuClose}>
              Gallery
            </MenuItem>
            <MenuItem component={Link} to="/updates" onClick={handleMenuClose}>
              Updates
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
              Contact
            </MenuItem>
          </Menu>
        </div>
      );
    }

    return (
      <>
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
      </>
    );
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <div className={classes.logoWrapper}>
          <Button
            component={Link}
            to="/"
            color="inherit" className={classes.logoButton}
            >
              eirrann.eth
            </Button>
          </div>
          {renderNavLinks()}
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
