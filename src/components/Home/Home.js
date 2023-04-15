import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, IconButton } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: theme.typography.h2.textShadow,
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
  },
  iconButton: {
    margin: theme.spacing(0, 1),
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: theme.spacing(4),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        eirrann.eth | AI x Art 
      </Typography>
      <Typography variant="h6" className={classes.description}>
        Exploring the intersection of artificial intelligence and art. Discover unique creations and learn more about the technology behind them.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="secondary" href="/gallery">
          view gallery
        </Button>
        <Button variant="contained" color="secondary" href="/updates">
          view updates
        </Button>
      </div>
      <div className={classes.socialIcons}>
        <IconButton
          color="secondary"
          className={classes.iconButton}
          href="https://twitter.com/eirrann_eth"
          target="_blank"
          rel="noopener"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="secondary"
          className={classes.iconButton}
          href="https://linktr.ee/eirrann_eth"
          target="_blank"
          rel="noopener"
        >
          <LinkIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
