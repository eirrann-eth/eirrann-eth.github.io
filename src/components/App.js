import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Showcase from './components/Showcase/Showcase';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="eirrann.eth | AI x Art" />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
