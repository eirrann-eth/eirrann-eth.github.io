// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
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
import { BrowserRouter } from 'react-router-dom';

// Define main component
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Home />
        <About />
        <Gallery />
        <Showcase />
        <Contact />
        <Privacy />
        <Terms />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Render main component to DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
