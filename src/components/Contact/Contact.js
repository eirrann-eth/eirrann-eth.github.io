import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
  },
  socialLinks: {
    marginTop: theme.spacing(2),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <Typography variant="h4" component="h1">
        Contact eirrann.eth
      </Typography>
      <Typography variant="body1" component="p">
        If you have any questions or feedback, please don't hesitate to get in touch! You can reach out with a message on Twitter.
      </Typography>
      <Link href="https://twitter.com/eirrann_eth" target="_blank">
        Message on Twitter
      </Link>
    </div>
  );
}

export default Contact;
