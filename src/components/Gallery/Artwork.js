import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ImageContext from "./ImageContext";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  artworkInfo: {
    marginBottom: theme.spacing(2),
  },
}));

const Artwork = () => {
  const classes = useStyles();
  const { artworkId } = useParams();
  const { images } = useContext(ImageContext);

  const artwork = images.find((image) => image.id === artworkId);

  if (!artwork) return null;

  const { name, image, collection, artist, platform, listing } = artwork.fields;

  return (
    <>
      <Button
        className={classes.backButton}
        variant="contained"
        color="secondary"
        component={Link}
        to={`/gallery/collection/${collection}`}
      >
        back to collection
      </Button>
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.artworkInfo}>
          {name}
        </Typography>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={image[0].url} title={name} />
        </Card>
        <Box className={classes.artworkInfo}>
          <Typography variant="h6">collection: {collection}</Typography>
          <Typography variant="h6">artist: {artist}</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          href={listing}
          target="_blank"
          rel="noopener noreferrer"
        >
          view on {platform}
        </Button>
      </Container>
    </>
  );
};

export default Artwork;
