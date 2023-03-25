import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
        I am an emerging AI artist. My background is in photography, which heavily influences my style. I have been creating art since high schoool but only gained the confidence to become serious about art decades later in 2023. My work is inspired by the many ways that AI enables humanity and I strive to create glimpses into unseen worlds. Please feel free to contact me if you have any questions or are interested in my work.
      </Typography>
    </div>
  );
}

export default About;
