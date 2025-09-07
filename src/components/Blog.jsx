import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Domestics Tours",
    date: "Dec 2019",
    excerpt: "An unforgettable trekking experience through snow-capped peaks and peaceful monasteries.",
  },
  {
    id: 3,
    title: "International Tours",
    date: "June 2023",
    excerpt: "Tips on budget travel while enjoying the culture and cuisine across Globe",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-16 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-50"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Travel Stories</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-white to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="mt-4 text-gray-700">{post.excerpt}</p>
            <a
              href="#"
              className="text-orange-600 mt-4 inline-block font-medium hover:underline"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
