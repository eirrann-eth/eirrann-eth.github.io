import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    margin: theme.spacing(0, 1),
    '&:hover': {
      textDecoration: 'underline',
    },
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
        Powered by React and Material UI, coded by GPT4
      </Typography>
    </footer>
  );
}

export default Footer;
