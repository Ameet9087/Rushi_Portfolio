import { motion } from "framer-motion";

const images = [
  { src: "/spiti.JPG", title: "Spiti Valley" },
  { src: "/kedarnath.JPG", title: "Kedarnath" },
  { src: "/himachal.jpg", title: "Himachal" },
  { src: "/chardham.JPG", title: "Char Dham" },
  { src: "/varanasi.jpg", title: "Varansi" },
  { src: "/ujjain.jpg", title: "Ujjain" },
  { src: "/dubai.jpg", title: "Dubai" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 px-6 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Travel Gallery</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full p-2">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
