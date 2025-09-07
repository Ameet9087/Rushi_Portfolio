import { motion } from "framer-motion";

const experiences = [
  { year: "June(2024)-Present", role: "Tour Guide", company: "Avirath Parikrama" },
  // { year: "2023-Present", role: "Travel Consultant", company: "XYZ Tourism" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gradient-to-r from-orange-200 via-yellow-100 to-orange-100"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
