import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-secondary/20 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            {/* Bagian Foto */}
            <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative w-64 h-80 md:w-full md:h-auto rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                <img 
                  src={DATA.profile.avatar} 
                  alt={DATA.profile.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>

            {/* Bagian Teks */}
            <div className="w-full md:w-2/3 flex flex-col">
              
              <h2 className="text-3xl font-bold text-white mb-2">
                {DATA.profile.name}
              </h2>

              {/* Menggunakan 2 paragraf deskripsi bahasa Inggris */}
              <div className="space-y-4 text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                {/* Paragraf kedua mengambil dari data profile.about yang baru */}
                <p>
                  {DATA.profile.about}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Skills & Technologies
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {DATA.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/40 border border-white/5 rounded-lg hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group cursor-default"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                      />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-start">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors duration-300 text-sm"
                >
                  Let's Connect
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;