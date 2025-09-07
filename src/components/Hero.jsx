import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6"
      style={{
        backgroundImage: "url('/images.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.img
        src="/me.jpg"
        alt="Me"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl mb-6 md:mb-0 md:mr-12 object-cover z-10"
      />
      <div className="relative text-center md:text-left max-w-xl text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Hi, I’m Rushikesh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg"
        >
          Working in tourism and sharing my adventures around the globe.
        </motion.p>
        <motion.a
          href="#gallery"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700"
        >
          Explore Gallery
        </motion.a>
      </div>
    </section>
  );
}
