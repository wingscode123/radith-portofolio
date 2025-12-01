import React from "react";
import { DATA } from "../constants";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/10 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-accent">{DATA.profile.name}</span>. 
          All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React JS, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;