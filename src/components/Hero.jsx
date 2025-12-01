import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react"; // Import icon Download
import { DATA } from "../constants"; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8 }}  
          className="max-w-3xl mx-auto space-y-6"
        >
          
          {/* Status Badge */}
          <div className="flex justify-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
              DATA.profile.status.isAvailable 
                ? "bg-green-500/10 border-green-500/20 text-green-400" 
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}>
              {DATA.profile.status.isAvailable && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              
              <span className="text-sm font-medium">
                {DATA.profile.status.isAvailable 
                  ? DATA.profile.status.availableText 
                  : DATA.profile.status.unavailableText}
              </span>
            </div>
          </div>

          {/* Nama */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">{DATA.profile.heroName}</span>
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-2xl md:text-4xl text-gray-400 font-light min-h-[40px]">
            <span className="text-accent font-semibold">
              <Typewriter
                words={DATA.profile.roles}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {DATA.profile.description}
          </p>

          {/* ----- BUTTON ACTIONS ----- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Tombol Download CV */}
            <a
              href={DATA.profile.resume}
              download
              className="px-6 py-3 rounded-full bg-white text-primary font-bold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Download size={20} />
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {DATA.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-accent hover:text-primary transition-all duration-300 text-gray-300 ring-1 ring-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;