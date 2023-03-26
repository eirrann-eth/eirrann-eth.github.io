import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  body: {
    maxWidth: '50ch',
    textAlign: 'center',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        About eirrann.eth
      </Typography>
      <Typography variant="body1" className={classes.body}>
        I am an emerging AI artist. My background is in photography, which heavily influences my style. 
        
        I have been creating art since high schoool but only gained the confidence to become serious about art decades later in 2023. 
        
        My work is inspired by the many ways that AI enables humanity and I strive to create glimpses into unseen worlds. 
        
        Please feel free to <Link to="/contact">contact me</Link> if you have any questions or are interested in my work.

        Also check out my collections in the <Link to="/gallery">Gallery</Link> and what I've been working on lately in the <Link to="/showcase">Showcase</Link>.
      </Typography>
    </div>
  );
}

export default About;
