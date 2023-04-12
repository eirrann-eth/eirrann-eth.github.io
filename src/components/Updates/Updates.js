import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { createClient } from 'contentful';

const useStyles = makeStyles((theme) => ({
  updatesContainer: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  updatesTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(2),
  },
  updatesSubtitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    marginBottom: theme.spacing(3),
  },
}));

function Updates() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });

      const response = await client.getEntries({ content_type: 'pageBlogPost' });
      setPosts(response.items);
    };

    fetchPosts();
  }, []);

  return (
    <div className={classes.updatesContainer}>
      <Typography variant="h4" component="h1" className={classes.updatesTitle} gutterBottom>
        Updates
      </Typography>
      {posts.map((post, index) => (
        <div key={index}>
          <Typography variant="h6" component="h2">
            {post.fields.title}
          </Typography>
          <Typography>{post.fields.intro}</Typography>
        </div>
      ))}
    </div>
  );
}

export default Updates;
