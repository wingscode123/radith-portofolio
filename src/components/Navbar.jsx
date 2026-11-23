import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-accent tracking-tighter cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          RFA.
        </div>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <li>
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;