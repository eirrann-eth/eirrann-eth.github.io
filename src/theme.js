import { createTheme } from "@material-ui/core/styles";
import { grey, pink } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900], // Black header and footer
    },
    secondary: {
      main: pink[500], // Deep pink color for linked text
    },
    background: {
      default: grey[900], // Dark gray color for background
    },
    text: {
      primary: grey[300], // Light gray color for text
      secondary: grey[500],
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    h1: {
      textShadow: "2px 2px #000000",
    },
    h2: {
      textShadow: "2px 2px #000000",
    },
    h3: {
      textShadow: "2px 2px #000000",
    },
    h4: {
      textShadow: "2px 2px #000000",
    },
    h5: {
      textShadow: "2px 2px #000000",
    },
    h6: {
      textShadow: "2px 2px #000000",
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
      letterSpacing: "0.05rem",
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: "Raleway, sans-serif",
          color: grey[300],
          backgroundColor: grey[900],
        },
        a: {
          color: grey[300],
          textDecoration: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: pink[500],
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default theme;
