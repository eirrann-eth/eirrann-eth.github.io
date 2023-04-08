// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Updates from './components/Updates/Updates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Update this line

// Define main component
function Main() {
  return (
    <div>
      <Header />
      <main style={{ margin: '0 auto', maxWidth: '960px', padding: '1em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Render main component to DOM
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router> {/* Replace BrowserRouter with Router */}
      <Main />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
