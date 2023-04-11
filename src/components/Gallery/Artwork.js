import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Airtable from 'airtable';
import { makeStyles, Typography } from '@material-ui/core';

const AIRTABLE_ACCESS_TOKEN = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const useStyles = makeStyles((theme) => ({
  artworkContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  artworkTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  artworkImage: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
  artworkInfo: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  artworkLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

function Artwork() {
  const classes = useStyles();
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airtable = new Airtable({ apiKey: AIRTABLE_ACCESS_TOKEN });
        const base = airtable.base(AIRTABLE_BASE_ID);
        const table = base('gallery');

        const record = await table.find(artworkId);
        setArtwork(record);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [artworkId]);

  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.artworkContainer}>
      <Typography variant="h4" component="h1" className={classes.artworkTitle}>
        {artwork.get('name')}
      </Typography>
      <img src={artwork.get('image')[0].url} alt={artwork.get('name')} className={classes.artworkImage} />
      <Typography className={classes.artworkInfo}>
        Collection: {artwork.get('collection')} <br />
        Artist: {artwork.get('artist')} <br />
        View on{' '}
        <a href={artwork.get('listing')} target="_blank" rel="noopener noreferrer" className={classes.artworkLink}>
          {artwork.get('platform')}
        </a>
      </Typography>
    </div>
  );
}

export default Artwork;
