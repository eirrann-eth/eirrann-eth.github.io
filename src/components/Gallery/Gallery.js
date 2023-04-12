import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Airtable from 'airtable';
import { Skeleton } from '@material-ui/lab';
import Collection from './Collection';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';


const AIRTABLE_ACCESS_TOKEN = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const useStyles = makeStyles((theme) => ({
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
  backButton: {
    marginBottom: theme.spacing(2),
  },
}));

function Gallery() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState(null);

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

  const handleArtworkClick = (artworkId) => {
    navigate(`/gallery/:collection/${artworkId}`);
  };
    
  const handleBackToGalleryClick = () => {
    setSelectedCollection(null);
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
        <Grid container spacing={4} className={classes.gridContainer}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} className={classes.gridItem}>
              <Skeleton variant="rect" width="100%" height="100%" />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  if (selectedCollection) {
    const filteredArtworks = artworks.filter((artwork) => artwork.get('collection') === selectedCollection);

    return (
      <div className={classes.galleryContainer}>
        <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
          {selectedCollection}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToGalleryClick}
          className={classes.backButton}
        >
          Back to Gallery
        </Button>
        <Grid container spacing={4} className={classes.gridContainer}>
          {filteredArtworks.map((artwork) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={artwork.getId()} className={classes.gridItem}>
              <Card className={classes.artworkCard}>
                <CardActionArea onClick={() => handleArtworkClick(artwork.getId())}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={artwork.get('image')[0].url}
                    title={artwork.get('name')}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {artwork.get('name')}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        {collections.map((collection) => (
          <Collection key={collection} collection={collection} collectionArtwork={collectionArtwork[collection]} />
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;