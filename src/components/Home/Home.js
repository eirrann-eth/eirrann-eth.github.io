import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// This code imports the necessary components from Material UI, as well as the makeStyles function to allow for styling. The useStyles function creates a custom hook that defines the styles for the layout, which is then used in the className prop of the main div element. The Typography component is used to display the page title.
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
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
    </div>
  );
}

export default Home;
