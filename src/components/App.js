import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Showcase from './components/Showcase/Showcase';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header title="eirrann.eth | AI x Art" />
      <main className={classes.main}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
