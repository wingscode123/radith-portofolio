import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <--- Import Contact
import Footer from './components/Footer';   // <--- Import Footer

function App() {
  return (
    <div className="bg-primary min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact /> {/* <--- Tambahkan */}
      <Footer />  {/* <--- Tambahkan */}
    </div>
  );
}

export default App;