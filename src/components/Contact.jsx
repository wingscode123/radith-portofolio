import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in <span className="text-accent">Touch</span>
          </h2>
          
          {/* Copywriting Profesional (English) */}
          <p className="text-gray-400 text-lg leading-relaxed">
            I am currently looking for new opportunities. Whether you have a project in mind, 
            a question about my work, or just want to say hi, feel free to reach out!
          </p>

          {/* Social Media Links (Github, LinkedIn, Email) */}
          <div className="flex justify-center gap-8 pt-6">
            {DATA.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-secondary/50 border border-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                aria-label={social.label}
              >
                {/* Icon */}
                <social.icon 
                  size={28} 
                  className="text-gray-400 group-hover:text-accent transition-colors duration-300" 
                />
                
                {/* Tooltip (Muncul saat hover) */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;