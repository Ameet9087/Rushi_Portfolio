import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-xl">Avirath Parikrama</span>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg"
        >
          <a href="#home" className="block">Home</a>
          <a href="#gallery" className="block">Gallery</a>
          <a href="#experience" className="block">Experience</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}