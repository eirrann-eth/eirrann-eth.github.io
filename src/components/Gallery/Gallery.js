import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    padding: theme.spacing(3),
  },
}));

function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gallery
      </Typography>
      <Typography variant="h6" component="h2">
        Coming soon™
      </Typography>
    </div>
  );
}

export default Gallery;
