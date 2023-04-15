import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ImageContext from "./ImageContext";
import { Grid, Card, CardMedia, Typography, Button } from "@material-ui/core";
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
  backButton: {
    margin: theme.spacing(2),
  },
}));

const Collection = () => {
  const classes = useStyles();
  const { collectionId } = useParams();
  const { collections } = useContext(ImageContext);

  const collection = collections[collectionId];

  return (
    <>
      <Button
        className={classes.backButton}
        variant="contained"
        color="secondary"
        component={Link}
        to="/gallery"
      >
        back to gallery
      </Button>
      <Grid container className={classes.gridContainer} spacing={3}>
        {collection.map((artwork) => (
          <Grid item key={artwork.id}>
            <Link to={`/gallery/artwork/${artwork.id}`}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={artwork.fields.image[0].url}
                  title={artwork.fields.name}
                />
                <Typography variant="h6" align="center">
                  {artwork.fields.name}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Collection;
