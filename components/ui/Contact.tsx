"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-[#0a0c10] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-24 overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-6 sm:top-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 border border-orange-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-10 right-6 sm:bottom-20 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 border border-orange-500/20 rotate-12 animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              CONTACTEZ-NOUS
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Nous serions ravis de discuter de votre projet. Contactez-nous par email, téléphone ou directement via le formulaire ci-dessous.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-6 sm:px-10 lg:px-24 py-16 sm:py-20 text-left">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
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
              linkText: "Appeler",
            },
            {
              icon: MapPin,
              title: "ADRESSE",
              value: "Muttacherstrasse 12, 1712 Tafers, Suisse",
              action:
                "https://www.google.com/maps?q=Muttacherstrasse+12,+1712+Tafers,+Switzerland",
              linkText: "Voir sur la carte",
            },
          ].map((contact, idx) => (
            <a
              key={idx}
              href={contact.action}
              target="_blank"
              className="steel-texture group relative p-6 sm:p-8 border border-white/10 rounded-lg hover:border-[#ff7828]/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7828]/0 to-[#ff7828]/0 group-hover:from-[#ff7828]/5 group-hover:to-[#ff5014]/5 transition-all duration-500" />
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] border border-white/10 group-hover:border-[#ff7828]/50 rounded-lg">
                  <contact.icon className="w-8 h-8 text-[#ff7828]" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-lg sm:text-xl text-[#d4d7dd] mb-3 tracking-wide">
                  {contact.title}
                </h3>
                <p className="text-[#8a8d93] text-sm sm:text-base leading-relaxed mb-4">{contact.value}</p>
                <span className="text-[#ff7828] font-semibold group-hover:text-[#ff9b52] transition-colors text-sm sm:text-base">
                  {contact.linkText}
                </span>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff7828]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* FORM + MAP */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">ENVOYEZ UN MESSAGE</h2>

            {[ 
              { label: "NOM COMPLET", name: "name", type: "text", placeholder: "Jean Dupont" },
              { label: "EMAIL", name: "email", type: "email", placeholder: "jean@example.com" },
              { label: "TÉLÉPHONE", name: "phone", type: "tel", placeholder: "+41 76 700 45 86" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-bold mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  required={field.name !== "phone"}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-bold mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                submitStatus === "success"
                  ? "bg-green-600 text-white"
                  : submitStatus === "loading"
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:scale-105 hover:shadow-2xl"
              }`}
            >
              {submitStatus === "loading" && "ENVOI..."}
              {submitStatus === "success" && "MESSAGE ENVOYÉ !"}
              {submitStatus === "idle" && "ENVOYER LE MESSAGE"}
            </button>
          </form>

          {/* MAP */}
          <div className="relative order-1 md:order-2 rounded-lg overflow-hidden border border-[#ff7828]/30 shadow-2xl bg-gray-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.929885425078!2d7.212201976432214!3d46.816548245929874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff4ce8fd30241%3A0xe4d0b4e64d2ab7f3!2sMuttacherstrasse%2012%2C%201712%20Tafers%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1731260000000!5m2!1sen!2sch"
              width="100%"
              height="450"
              loading="lazy"
              style={{
                border: 0,
                filter: "grayscale(100%) brightness(0.8) contrast(1.1)",
              }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/80 via-[#0a0c10]/60 to-transparent"></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 sm:px-10 lg:px-16 text-left">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                Notre Adresse
              </h3>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-3 sm:mb-4">
                Muttacherstrasse 12, 1712 Tafers, Suisse
              </p>
              <a
                href="https://www.google.com/maps?q=Muttacherstrasse+12,+1712+Tafers,+Switzerland"
                target="_blank"
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Ouvrir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION — Metallic Style */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0c10] via-[#0f1115] to-[#0a0c10] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93]/50 to-transparent" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff7828]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#ff5014]/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <h2 className="font-[family-name:var(--font-orbitron)] font-black text-4xl sm:text-6xl md:text-7xl text-[#d4d7dd] mb-6">
            PRÊTS À <span className="text-[#ff7828]">COLLABORER</span> ?
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#ff7828] to-transparent mb-10" />
          <p className="text-[#8a8d93] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            Discutons de la manière dont{" "}
            <span className="text-[#ff7828] font-semibold">EN MONTXPERT</span>{" "}
            peut transformer vos idées en solutions concrètes, alliant{" "}
            <span className="text-white">précision</span>,{" "}
            <span className="text-white">sécurité</span> et{" "}
            <span className="text-white">performance durable</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a
              href="/contact"
              className="relative group px-8 py-3 sm:px-10 sm:py-4 font-[family-name:var(--font-orbitron)] text-base sm:text-lg text-[#d4d7dd] border border-white/10 bg-gradient-to-br from-[#2a2d35] to-[#1a1d24] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#ff7828]/60"
            >
              <span className="relative z-10 group-hover:text-white">
                CONTACTEZ-NOUS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7828]/0 via-[#ff7828]/10 to-[#ff5014]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="/about"
              className="relative group px-8 py-3 sm:px-10 sm:py-4 font-[family-name:var(--font-orbitron)] text-base sm:text-lg text-[#ff7828] border border-[#ff7828]/50 bg-transparent rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-[#ff7828]/10"
            >
              <span className="relative z-10 group-hover:text-white">
                EN SAVOIR PLUS
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8a8d93]/50 to-transparent" />
      </section>
    </div>
  );
}
