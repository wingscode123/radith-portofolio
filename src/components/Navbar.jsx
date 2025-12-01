import React from 'react';
import { MessageCircle } from 'lucide-react'; 

const Navbar = () => {
  // Link WhatsApp dengan pesan otomatis
  const whatsappUrl = "https://wa.me/6281317212214?text=Halo%20Radith,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20bekerja%20sama";

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
        
        {/* Tombol WhatsApp */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-primary font-bold text-sm hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;