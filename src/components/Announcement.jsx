import React from "react";
import { ArrowDown, Download } from "lucide-react";
import { DATA } from "../constants";

const Announcement = () => {
  const { title, message, cvLabel, cvUrl, cvFileName } = DATA.announcement;

  return (
    <main className="min-h-screen bg-primary text-white flex items-center justify-center px-4 py-12">
      <section
        aria-labelledby="announcement-title"
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-secondary/20 shadow-2xl p-6 sm:p-8"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
          {DATA.profile.name}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <h1 id="announcement-title" className="text-lg font-semibold text-white">
            {title}
          </h1>
        </div>

        <p className="mt-3 text-sm text-gray-300 leading-relaxed">{message}</p>

        <div className="flex justify-center my-3 text-accent" aria-hidden="true">
          <ArrowDown size={20} className="motion-safe:animate-bounce" />
        </div>

        <a
          href={cvUrl}
          download={cvFileName}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-accent text-primary text-sm font-bold hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-300"
        >
          <Download size={16} />
          {cvLabel}
        </a>
      </section>
    </main>
  );
};

export default Announcement;
