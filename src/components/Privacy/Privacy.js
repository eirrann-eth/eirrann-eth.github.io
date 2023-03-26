import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

function Privacy() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" component="p">
        We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information and your choices about the collection and use of your information.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        Information We Collect
      </Typography>
      <Typography variant="body1" component="p">
        We may collect personal information such as your name, email address, and mailing address when you provide it to us through our website.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" component="p">
        We use your personal information to respond to your inquiries and provide you with information about our services. We may also use your information to improve our website and services.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        Information Sharing
      </Typography>
      <Typography variant="body1" component="p">
        We do not sell, rent, or trade your personal information to third parties. We may share your information with third-party service providers who assist us in operating our website and providing services to you.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        Cookies
      </Typography>
      <Typography variant="body1" component="p">
        Our website may use cookies to improve your experience. You can choose to disable cookies through your browser settings.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        Changes to This Policy
      </Typography>
      <Typography variant="body1" component="p">
        We may update this privacy policy from time to time. We will notify you of any changes by amending this page to reflect the new policy.
      </Typography>
      <Typography variant="h6" component="h3" className={classes.sectionTitle}>
        Contact Us
      </Typography>
      <Typography variant="body1" component="p">
        If you have any questions or concerns about this privacy policy, please <Link to="/contact">contact us</Link>.
      </Typography>
    </div>
  );
}

export default Privacy;
