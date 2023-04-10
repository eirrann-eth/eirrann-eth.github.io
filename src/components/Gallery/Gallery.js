import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';
import { Skeleton } from '@material-ui/lab';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  IconButton,
  Button,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
const AIRTABLE_ACCESS_TOKEN = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const useStyles = makeStyles((theme) => ({
  // Add or modify your existing styles here
  galleryContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  galleryTitle: {
    textAlign: 'center',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  collectionCard: {
    backgroundColor: theme.palette.grey[800],
    width: '100%',
    textAlign: 'center',
  },
  artworkCard: {
    backgroundColor: theme.palette.grey[800],
    width: '100%',
    textAlign: 'center',
  },
  cardMedia: {
    height: 0,
    paddingTop: '100%',
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
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  backButton: {
    marginBottom: theme.spacing(2),
  },
  expandedCard: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.grey[800],
  },
  platformLink: {
    textDecoration: 'underline',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, // or any other high number greater than the z-index value of the page content
  },
 
}));

function Gallery() {
  const classes = useStyles();
  const [collections, setCollections] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Fetch data from Airtable API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const airtable = new Airtable({ apiKey: AIRTABLE_ACCESS_TOKEN });
        const base = airtable.base(AIRTABLE_BASE_ID);
        const table = base('gallery');

        const records = await table.select().all();
        const uniqueCollections = new Set(records.map((record) => record.get('collection')));
        setCollections(Array.from(uniqueCollections));
        setArtworks(records);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleClose = () => {
    setSelectedArtwork(null);
    setSelectedCollection(null);
  };

  const handleBackClick = () => {
    setSelectedCollection(null);
  };
  
  const renderExpandedCard = () => {
    if (!selectedArtwork) return null;

    const artwork = selectedArtwork;
    const hasImage = artwork.get('image') && Array.isArray(artwork.get('image')) && artwork.get('image').length > 0;

    return (
      <Card className={classes.expandedCard}>
        {hasImage && (
          <CardMedia
            component="img"
            alt={artwork.get('name')}
            image={artwork.get('image')[0].url}
            title={artwork.get('name')}
          />
        )}
        <CardContent>
          <Typography variant="h5">{artwork.get('name')}</Typography>
          <Typography variant="subtitle1">Collection: {artwork.get('collection')}</Typography>
          <Typography variant="subtitle1">Artist: {artwork.get('artist')}</Typography>
          <Typography variant="subtitle1">
            View on{' '}
            <a
              href={artwork.get('listing')}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.platformLink}
            >
              {artwork.get('platform_link')}
            </a>
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const collectionArtwork = artworks.reduce((result, artwork) => {
    if (!result[artwork.get('collection')]) {
      result[artwork.get('collection')] = artwork;
    }
    return result;
  }, {});

  if (loading) {
    return (
      <div className={classes.galleryContainer}>
        <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
          Gallery
        </Typography>
        <Grid container spacing={2} className={classes.gridContainer}>
          {[1, 2, 3, 4].map((index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} className={classes.gridItem}>
              <Skeleton variant="rect" width="100%" height={0} paddingTop="100%" />
              <Skeleton variant="text" width="60%" />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  if (selectedCollection) {
    // Make sure that the artwork has a valid 'image' property before trying to access it
    const hasImage = (artwork) => 
      artwork.get('image') && 
      Array.isArray(artwork.get('image')) && 
      artwork.get('image').length > 0 &&
      artwork.get('image')[0].thumbnails &&
      artwork.get('image')[0].thumbnails.large;

    const filteredArtworks = artworks.filter((artwork) => artwork.get('collection') === selectedCollection);



    return (
      <div className={classes.galleryContainer}>
        <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
          {selectedCollection}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleBackClick} className={classes.backButton}>
          Back to Gallery
        </Button>
        <Grid container spacing={2} className={classes.gridContainer}>
          {filteredArtworks.map((artwork) => {            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={artwork.id} className={classes.gridItem}>
                <Card className={classes.artworkCard}>
                  <CardActionArea onClick={() => handleArtworkClick(artwork)}>
                    {hasImage(artwork) && (
                      <CardMedia
                        className={classes.cardMedia}
                        image={artwork.get('image')[0].thumbnails.large.url}
                        title={artwork.get('name')}
                      />
                    )}
                    <CardContent>
                      <Typography variant="subtitle1" color="textPrimary">
                        {artwork.get('name')}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        {collections.map((collection) => {          const randomArtwork = artworks
            .filter((artwork) => artwork.get('collection') === collection)
            .sort(() => 0.5 - Math.random())[0];

          // Make sure that the artwork has a valid 'image' property before trying to access it
          const hasImage = randomArtwork.get('image') && Array.isArray(randomArtwork.get('image')) && randomArtwork.get('image').length > 0;

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={collection} className={classes.gridItem}>
              <Card className={classes.collectionCard}>
                <CardActionArea onClick={() => handleCollectionClick(collection)}>
                  {hasImage && (
                    <CardMedia
                      className={classes.cardMedia}
                      image={randomArtwork.get('image')[0].thumbnails.large.url}
                      title={collection}
                    />
                  )}
                  <CardContent>
                    <Typography variant="subtitle1" color="textPrimary">
                      {collection}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Modal open={!!selectedArtwork} onClose={handleClose} className={classes.modal}>
        <div className={classes.modalContent}>
          <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
          {renderExpandedCard()}
        </div>
      </Modal>
    </div>
  );
}

export default Gallery;