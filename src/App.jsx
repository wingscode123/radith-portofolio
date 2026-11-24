import React from 'react';
// Import komponen-komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Announcement from './components/Announcement';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Announcement />
    </div>
  );
}

export default App;