import React, { useState } from "react";
import { ArrowDown, Download, X } from "lucide-react";
import { DATA } from "../constants";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { title, message, cvLabel, cvUrl, cvFileName } = DATA.announcement;

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Site announcement"
      className="fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-80 rounded-2xl border border-white/10 bg-primary/95 backdrop-blur-md shadow-2xl p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <h2 className="text-sm font-semibold text-white">{title}</h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close announcement"
          className="-m-1 p-1 rounded-md text-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <p className="mt-1.5 sm:mt-2 text-sm text-gray-300 leading-relaxed">{message}</p>

      <div className="flex justify-center my-1 sm:my-2 text-accent" aria-hidden="true">
        <ArrowDown size={18} className="motion-safe:animate-bounce" />
      </div>

      <a
        href={cvUrl}
        download={cvFileName}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 sm:py-2.5 rounded-full bg-accent text-primary text-sm font-bold hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-300"
      >
        <Download size={16} />
        {cvLabel}
      </a>
    </aside>
  );
};

export default Announcement;
