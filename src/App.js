import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
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
          <Route index element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Updates />} path="/updates" />
          <Route element={<Contact />} path="/contact" />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
