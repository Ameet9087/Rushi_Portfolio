import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding + Logo */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <img src="/logo.png" alt="Company Logo" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-xl font-bold">Rushikesh Dahatonde 
                <br />
                (Avirath Parikrama)
            </h3>
            <p className="text-sm mt-1">🌍 Exploring the world</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://wa.me/9359732710"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-green-500 hover:text-green-700 transition-colors"
          >
            <MessageCircle size={28} />
          </motion.a>
          <motion.a
            href="mailto:rushi@avirathparikrama.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            <Mail size={28} />
          </motion.a>
          <motion.a
            href="https://instagram.com/rushidahatonde.00"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <Instagram size={28} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/rushikesh.dahatonde.568?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Facebook size={28} />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-6 text-sm">
        &copy; {new Date().getFullYear()} Ameet9087. All rights reserved.
      </p>
    </footer>
  );
}
