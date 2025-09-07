import { motion } from "framer-motion";
import { MapPin, Compass, Calendar } from "lucide-react";

const services = [
  {
    icon: <MapPin className="w-10 h-10 text-white" />,
    title: "Travel Consultancy",
    desc: "Helping you design custom travel plans tailored to your preferences and budget.",
  },
  {
    icon: <Compass className="w-10 h-10 text-white" />,
    title: "Guided Tours",
    desc: "Offering guided tours with local experiences and hidden gems.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-white" />,
    title: "Itinerary Planning",
    desc: "End-to-end planning for solo travelers, families, and corporate trips.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-6 bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-50"
    >
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-orange-400 to-orange-600 p-8 rounded-2xl shadow-lg text-center text-white hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
