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


//For gallery.js, I want to be able to easily add new parts to the page for each collection, and within each collection, include links to the listing pages on foundation and manifold and pull in thumbnail photos and the metadata to add to the description for each work

