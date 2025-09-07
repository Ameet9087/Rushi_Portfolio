import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Replace YOUR_NUMBER with your WhatsApp number including country code, no +
    const whatsappNumber = "919359732710";  

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hi, my name is ${name}. My phone number is ${phone}. Message: ${message}`
    )}`;

    window.open(whatsappLink, "_blank");
    setStatus("WhatsApp chat opened!");
    form.current.reset();
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <motion.form
        ref={form}
        onSubmit={sendMessage}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gradient-to-b from-white to-orange-50 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors"
        >
          Send via WhatsApp
        </button>
        {status && <p className="text-center mt-2 text-green-600">{status}</p>}
      </motion.form>
    </section>
  );
}
