import React, { useContext, useEffect } from "react";
import ImageContext, { ImageProvider } from "./ImageContext";
import { BrowserRouter as Router, Route, Swtich } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Collection from "./Collection";
import Artwork from "./Artwork";
import axios from "axios";
import { Grid, Card, CardMedia, Typography, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const { setImages, collections, setCollections } = useContext(
    ImageContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/gallery`;
        const response = await axios.get(API_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN}`,
          },
        });
        const data = response.data.records;
        setImages(data);
  
        // Group images by collection
        const collectionGroups = data.reduce((acc, cur) => {
          if (!acc[cur.fields.collection]) {
            acc[cur.fields.collection] = [];
          }
          acc[cur.fields.collection].push(cur);
          return acc;
        }, {});
        setCollections(collectionGroups);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setCollections, setImages]);
  
  const GalleryView = () => (
    <Grid container className={classes.gridContainer} spacing={3}>
      {Object.keys(collections).map((collection) => (
        <Grid item key={collection}>
          <Link to={`/gallery/collection/${collection}`}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={collections[collection][0]?.fields.image[0].url}
                title={collection}
              />
              <Typography variant="h6" align="center">
                {collection}
              </Typography>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Switch>
      <Route exact path="/gallery" component={GalleryView} />
      <Route path="/gallery/collection/:collectionId" component={Collection} />
      <Route path="/gallery/artwork/:artworkId" component={Artwork} />
    </Switch>
  );
};

const WrappedGallery = () => (
  <ImageProvider>
    <Gallery />
  </ImageProvider>
);

export default WrappedGallery;
