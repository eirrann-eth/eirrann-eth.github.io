import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Collection from './components/Collection/Collection';
import Artwork from './components/Gallery/Artwork';
import Updates from './components/Updates/Updates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header title="eirrann.eth | AI x Art" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/gallery/:collection" component={Collection} exact />
          <Route path="/gallery/:collection/:artworkId" component={Artwork} />
          <Route path="/updates" component={Updates} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
