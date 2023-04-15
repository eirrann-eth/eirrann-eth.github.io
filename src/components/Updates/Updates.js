import React, { useState, useEffect } from 'react';
import contentfulClient from '../../contentfulClient';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  Grid,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  expandedContent: {
    marginTop: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

function Updates() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'pageBlogPost',
      });
      setPosts(response.items);
    };

    fetchPosts();
  }, []);

  const handleExpandClick = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <Grid container direction="column" alignItems="center">
      {posts?.map((post, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.cardRoot}>
            <CardActionArea onClick={() => handleExpandClick(post.sys.id)}>
              <CardMedia
                className={classes.media}
                featuredImage={post.fields.featuredImage.fields.file.url}
                title={post.fields.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.fields.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.fields.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Collapse in={expandedPost === post.sys.id} timeout="auto" unmountOnExit>
              <CardContent>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => handleExpandClick(post.sys.id)}
                  aria-label="close"
                  className={classes.closeButton}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6">Author: {post.fields.author}</Typography>
                <Typography className={classes.expandedContent}>{post.fields.content}</Typography>
                <Typography variant="h6">Related Blog Posts:</Typography>
                <ul>
                  {post.fields.relatedBlogPosts.map((relatedBlogPost) => (
                    <li key={relatedBlogPost.sys.id}>{relatedBlogPost.fields.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Updates;
