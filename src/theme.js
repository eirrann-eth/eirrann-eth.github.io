import { createTheme } from "@material-ui/core/styles";
import { grey, pink } from "@material-ui/core/colors";

const darkerPink = pink[700]; // define a slightly darker shade of pink

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900], // Black header and footer
    },
    secondary: {
      main: darkerPink, // use the darker pink color for linked text
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
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
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
            color: darkerPink, // use the darker pink color on hover
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default theme;
