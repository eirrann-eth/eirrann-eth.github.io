import { createTheme } from '@material-ui/core/styles';
import { grey, blueGrey } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[900],
    },
    background: {
      paper: grey[800],
      default: grey[900],
    },
    text: {
      primary: grey[50],
      secondary: grey[300],
    },
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    h1: {
      textShadow: '2px 2px #000000',
    },
    h2: {
      textShadow: '2px 2px #000000',
    },
    h3: {
      textShadow: '2px 2px #000000',
    },
    h4: {
      textShadow: '2px 2px #000000',
    },
    h5: {
      textShadow: '2px 2px #000000',
    },
    h6: {
      textShadow: '2px 2px #000000',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      letterSpacing: '0.05rem',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
    },
  },
});

export default theme;
