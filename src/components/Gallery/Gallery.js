import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Modal } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  // Add your existing styles here

  // New styles
  imageInfo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
}));

function Gallery() {
  const classes = useStyles();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Fetch data from Airtable API
  useEffect(() => {
    const fetchData = async () => {
      const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN });
      const base = airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID);
      const table = base('gallery');

      const records = await table.select().all();
      setArtworks(records);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleClose = () => {
    setSelectedArtwork(null);
  };

  if (loading) {
    return (
      <div className={classes.galleryContainer}>
        <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
          Gallery
        </Typography>
        <Skeleton variant="rect" width={'100%'} height={200} />
      </div>
    );
  }

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        {artworks.map((artwork) => {
          const hasImage = artwork.get('image') && artwork.get('image').length > 0;

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={artwork.id} className={classes.gridItem}>
              {hasImage && (
                <img
                  src={artwork.get('image')[0].url}
                  alt={artwork.get('name')}
                  className={classes.img}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              )}
              <Typography variant="subtitle1" className={classes.imageInfo}>
                {artwork.get('name')}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      {selectedArtwork && selectedArtwork.get('image') && selectedArtwork.get('image').length > 0 && (
        <Modal
          open={!!selectedArtwork}
          onClose={handleClose}
          className={classes.modal}
        >
          <div className={classes.modalContent}>
            <img
              src={selectedArtwork.get('image')[0].url}
              alt={selectedArtwork.get('name')}
              className={classes.img}
            />
            <Typography variant="h5" gutterBottom>{selectedArtwork
            .get('name')}</Typography>
            </div>
          </Modal>
        )}
      </div>
    );
  }
  
  export default Gallery;
  