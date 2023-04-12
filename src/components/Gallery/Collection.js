import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // Add or modify your existing styles here
  collectionContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  collectionTitle: {
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
  cardMedia: {
    height: 0,
    paddingTop: '100%',
  },
}));

function Collection({ collection, collectionArtwork }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCollectionClick = () => {
    navigate(`/gallery/${collection}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
      <Card className={classes.collectionCard}>
        <CardActionArea onClick={handleCollectionClick}>
          <CardMedia
            className={classes.cardMedia}
            image={collectionArtwork.get('image')[0].url}
            title={collection}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {collection}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Collection;
