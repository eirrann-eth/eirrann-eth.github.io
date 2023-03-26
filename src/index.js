// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Showcase from './components/Showcase/Showcase';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Render main component to DOM
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
