import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  updatesContainer: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  updatesTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(2),
  },
  updatesSubtitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    marginBottom: theme.spacing(3),
  },
}));

function Updates() {
  const classes = useStyles();

  return (
    <div className={classes.updatesContainer}>
      <Typography variant="h4" component="h1" className={classes.updatesTitle} gutterBottom>
        Updates
      </Typography>
      <Typography variant="h6" component="h2" className={classes.updatesSubtitle}>
        Coming soon™
      </Typography>
    </div>
  );
}

export default Updates;
