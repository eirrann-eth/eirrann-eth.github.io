import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './Showcase.css';

const useStyles = makeStyles((theme) => ({
  showcaseContainer: {
    padding: theme.spacing(3),
  },
}));

function Showcase() {
  const classes = useStyles();

  return (
    <div className={classes.showcaseContainer}>
      <Typography variant="h4" component="h1" gutterBottom>
        Showcase
      </Typography>
      <Typography variant="h6" component="h2">
        Coming soon™
      </Typography>
    </div>
  );
}

export default Showcase;
