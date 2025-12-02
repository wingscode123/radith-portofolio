import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";
import { DATA } from "../constants";

const ExperienceCard = ({ item }) => {
  // Jika datanya kosong (misal jumlah work & org tidak sama), return div kosong
  if (!item) return <div className="hidden md:block"></div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // KUNCI PERBAIKAN: h-full
      className="bg-secondary/20 p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300 group flex flex-col sm:flex-row gap-4 items-start h-full"
    >
      {/* LOGO (Tanpa Frame) */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
        {item.logo ? (
          <img 
            src={item.logo} 
            alt={item.company} 
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
               <Briefcase className="text-accent w-8 h-8" />
          </div>
        )}
      </div>

      {/* KONTEN */}
      <div className="flex-grow flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
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

        <p className="text-gray-400 leading-relaxed text-sm line-clamp-4">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  // MENGHITUNG JUMLAH DATA TERBANYAK
  // Agar kita bisa melakukan looping baris demi baris
  const maxItems = Math.max(DATA.workExperiences.length, DATA.organizationExperiences.length);
  const rows = Array.from({ length: maxItems });

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* JUDUL UTAMA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-accent">Organizations</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        {/* HEADER KOLOM (Hanya Tampil di Desktop) */}
        <div className="hidden md:grid grid-cols-2 gap-12 mb-8">
            <div className="flex items-center gap-3">
              <Briefcase className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-white">Organizations</h3>
            </div>
        </div>

        {/* JUDUL UNTUK MOBILE  */}
        <div className="md:hidden flex items-center gap-3 mb-6">
            <Briefcase className="text-accent" size={24} />
            <h3 className="text-2xl font-bold text-white">Work & Organizations</h3>
        </div>

        {/* LOOPING SYSTEM BARIS DEMI BARIS */}
        <div className="space-y-6 md:space-y-8">
          {rows.map((_, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch">
              
              {/* Kiri: Work Experience */}
              <div className="h-full">
                {DATA.workExperiences[index] && (
                   <ExperienceCard item={DATA.workExperiences[index]} />
                )}
              </div>

              {/* Kanan: Organization Experience */}
              <div className="h-full">
                 {DATA.organizationExperiences[index] && (
                   <ExperienceCard item={DATA.organizationExperiences[index]} />
                 )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;