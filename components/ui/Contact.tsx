"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");

    const contactEmail = "info@en-montxpert.com";
    const mailtoLink = `mailto:${contactEmail}?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitStatus("success");

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus("idle");
    }, 2000);
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#0a0c10] text-white overflow-hidden relative text-center"
    >
      {/* 🌌 Floating Glow */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-br from-[#ff7828]/30 to-[#ff5014]/10 blur-[150px] rounded-full pointer-events-none"
      />

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] sm:h-screen px-4 sm:px-6 text-center overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] border border-[#ff7828]/25 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] border border-[#ff7828]/10 rounded-full blur-[1px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            CONTACTEZ-NOUS
          </h1>
          <div className="w-28 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mx-auto mb-8" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-2xl mx-auto">
            Nous serions ravis de discuter de votre projet. Contactez-nous par email, téléphone
            ou directement via le formulaire ci-dessous.
          </p>
        </motion.div>
      </section>

      {/* === CONTACT CARDS === */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {[ 
            {
              icon: Mail,
              title: "EMAIL",
              value: "info@en-montxpert.com",
              action: "mailto:info@en-montxpert.com",
              linkText: "Envoyer un email",
            },
            {
              icon: Phone,
              title: "TÉLÉPHONE",
              value: "+41 76 700 45 86",
              action: "tel:+41767004586",
              linkText: "Appeler maintenant",
            },
            {
              icon: MapPin,
              title: "ADRESSE",
              value: "Muttacherstrasse 12, 1712 Tafers, Suisse",
              action:
                "https://www.google.com/maps?q=Muttacherstrasse+12,+1712+Tafers,+Switzerland",
              linkText: "Voir sur la carte",
            },
          ].map((contact, i) => (
            <motion.a
              key={i}
              href={contact.action}
              target="_blank"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
              className="group relative p-6 sm:p-8 border border-[#1f2429] bg-[#101215]/80 backdrop-blur-sm rounded-xl shadow-[0_0_18px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,120,40,0.25)] hover:border-[#ff7828]/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#ff7828]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <contact.icon className="w-9 h-9 sm:w-10 sm:h-10 text-[#ff7828]" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-lg sm:text-xl text-[#d4d7dd] mb-3 tracking-wide">
                  {contact.title}
                </h3>
                <p className="text-[#8a8d93] mb-3 sm:mb-4 text-sm sm:text-base">{contact.value}</p>
                <span className="text-[#ff7828] font-semibold group-hover:text-[#ff9b52] transition">
                  {contact.linkText}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* === FORM & MAP === */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] text-center px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
            className="space-y-5 text-left order-2 md:order-1"
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl font-bold mb-6 text-[#e1e4ea] text-center">
              ENVOYEZ UN MESSAGE
            </h2>

            {[ 
              { label: "NOM COMPLET", name: "name", type: "text", placeholder: "Jean Dupont" },
              { label: "EMAIL", name: "email", type: "email", placeholder: "jean@example.com" },
              { label: "TÉLÉPHONE", name: "phone", type: "tel", placeholder: "+41 76 700 45 86" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-bold mb-2 text-center">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.name !== "phone"}
                  placeholder={field.placeholder}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#ff7828] focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-bold mb-2 text-center">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Écrivez votre message ici..."
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#ff7828] focus:outline-none transition-colors resize-none text-sm sm:text-base"
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitStatus === "loading"}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                submitStatus === "success"
                  ? "bg-green-600 text-white"
                  : submitStatus === "loading"
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#ff7828] to-[#ff5014] text-white hover:scale-105 shadow-[0_0_25px_rgba(255,120,40,0.25)]"
              }`}
            >
              {submitStatus === "loading" && "ENVOI..."}
              {submitStatus === "success" && "MESSAGE ENVOYÉ !"}
              {submitStatus === "idle" && "ENVOYER LE MESSAGE"}
            </motion.button>
          </motion.form>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative order-1 md:order-2 rounded-lg overflow-hidden border border-[#ff7828]/30 shadow-2xl bg-gray-950 mt-6 md:mt-10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.929885425078!2d7.212201976432214!3d46.816548245929874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff4ce8fd30241%3A0xe4d0b4e64d2ab7f3!2sMuttacherstrasse%2012%2C%201712%20Tafers%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1731260000000!5m2!1sen!2sch"
              width="100%"
              height="400"
              loading="lazy"
              style={{
                border: 0,
                filter: "grayscale(100%) brightness(0.8) contrast(1.1)",
              }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/90 via-[#0a0c10]/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-3 sm:px-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Notre Adresse</h3>
              <p className="text-gray-300 mb-5 text-sm sm:text-lg max-w-xs sm:max-w-sm">
                Muttacherstrasse 12, 1712 Tafers, Suisse
              </p>
              <a
                href="https://www.google.com/maps?q=Muttacherstrasse+12,+1712+Tafers,+Switzerland"
                target="_blank"
                className="bg-gradient-to-r from-[#ff7828] to-[#ff5014] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Ouvrir sur Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
