import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";
import { DATA } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Utama Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-accent">Organizations</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* KOLOM 1: WORK EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {DATA.workExperiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/20 p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {item.role}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400 mb-4">
                    <span className="font-medium text-gray-300">{item.company}</span>
                    <span className="hidden sm:block text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KOLOM 2: ORGANIZATIONS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-white">Organizations</h3>
            </div>

            <div className="space-y-6">
              {DATA.organizationExperiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/20 p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300 group"
                >
                   <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {item.role}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400 mb-4">
                    <span className="font-medium text-gray-300">{item.company}</span>
                    <span className="hidden sm:block text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;