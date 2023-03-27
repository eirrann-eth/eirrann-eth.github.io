import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
      marginBottom: theme.spacing(10),
    },
  },
  body: {
    maxWidth: '50ch',
    textAlign: 'center',
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '1.5',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.body2.fontSize,
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.body1.fontSize,
      marginBottom: theme.spacing(10),
    },
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      '& > *': {
        marginRight: theme.spacing(4),
      },
    },
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
        I am an emerging AI artist. My background is in photography, which heavily influences my style. <br /><br />
        I became interested in the intersectionality of AI and art through my identical twin, <a href="https://twitter.com/scizors_eth" target="_blank" rel="noopener noreferrer">scizors.eth</a>, who started exploring the space about a year before me. You can find their work at <a href="https://www.scizors.wtf/" target="_blank" rel="noopener noreferrer">scizors.wtf</a>. <br /><br />
        I have been creating art since high school but only gained the confidence to become serious about art decades later in 2023. <br /><br />
        My work is inspired by the many ways that AI enables humanity and I strive to create glimpses into unseen worlds. <br /><br />
        Please feel free to <Link to="/contact">contact me</Link> if you have any questions or are interested in my work. <br /><br />
        Also check out my collections in <Link to="/gallery">Gallery</Link> and what I've been working on lately in <Link to="/updates">Updates</Link>.
      </Typography>
      <div className={classes.ctaContainer}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/gallery"
          >
            Gallery
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/updates"
          >
            Updates
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://twitter.com/eirrann_eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Button>
        </div>
      </div>
    );
  }
  
  export default About;
  
