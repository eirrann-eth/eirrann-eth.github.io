import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: '#111111',
    padding: theme.spacing(3),
  },
  link: {
    marginLeft: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body1">
        © {new Date().getFullYear()} eirrann.eth
      </Typography>
      <Typography variant="body2" component="p">
        Powered by React and Material UI
      </Typography>
      <Typography variant="body2" component="p">
        Contact eirrann.eth
        <br />
        If you have any questions or feedback, please don't hesitate to get in touch! You can reach out with a message on Twitter.
        <br />
        <Link href="https://twitter.com/eirrann_eth" target="_blank" rel="noopener" className={classes.link}>
          Message on Twitter
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
