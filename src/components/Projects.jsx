import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { DATA } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary/50">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary/20 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 flex flex-col hover:-translate-y-2 shadow-lg"
            >
              {/* Gambar Project */}
              <div className="relative h-56 overflow-hidden"> {/* Tinggi gambar sedikit diperbesar (h-56) agar proporsional */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Konten Text */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Header Card: Judul & Icon Links */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-accent mb-2">
                        <Folder size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                  </div>

                  {/* Icon Links */}
                  <div className="flex gap-3">
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            title="View Source Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    
                    {project.link && project.link !== "#" && project.link !== "" && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-accent/80 bg-accent/10 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;