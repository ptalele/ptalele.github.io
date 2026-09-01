import React from 'react';
import './theme.css';
import useReveal from './useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Writing />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
