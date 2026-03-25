import React, { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', text: "Please fill in all fields." });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: 'error', text: data.error || "Failed to send. Please try again." });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ type: 'error', text: "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const InputField = ({ label, name, type = "text", isTextArea = false }) => {
    const isFocused = focusedField === name;
    const hasValue = formData[name].length > 0;
    
    return (
      <div className="relative mb-6">
        <label
          htmlFor={name}
          className={`absolute left-4 font-body transition-all duration-300 pointer-events-none ${
            isFocused || hasValue
              ? "-top-3 text-xs text-[var(--accent)] bg-[var(--bg-secondary)] px-2"
              : "top-4 text-sm text-[var(--text-secondary)]"
          }`}
        >
          {label}
        </label>
        {isTextArea ? (
          <textarea
            id={name}
            rows="5"
            className="w-full p-4 bg-[var(--bg-primary)] rounded-xl text-[var(--text-primary)] font-body border border-[var(--border)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none shadow-inner"
            value={formData[name]}
            onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
          />
        ) : (
          <input
            id={name}
            type={type}
            className="w-full p-4 bg-[var(--bg-primary)] rounded-xl text-[var(--text-primary)] font-body border border-[var(--border)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all shadow-inner"
            value={formData[name]}
            onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
          />
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden flex items-center justify-center p-6 select-none pt-32 pb-24">
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40 mix-blend-screen"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-8 bg-[var(--bg-secondary)]/50 backdrop-blur-xl border border-[var(--border)] rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10"
      >
        {/* Contact Info Side */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]">Talk</span>
            </h2>
            <p className="text-[var(--text-secondary)] font-body text-lg mb-10 leading-relaxed">
              Have a project in mind, looking for a developer, or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-6 md:mt-0 mb-8 md:mb-0">
            <div className="flex items-center gap-4 text-[var(--text-secondary)] font-body hover:text-[var(--accent)] transition-colors cursor-pointer group">
              <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] group-hover:border-[var(--accent)]/50 group-hover:shadow-[0_0_15px_var(--accent-muted)] transition-all">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform">vvarunsharma64@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-[var(--text-secondary)] font-body hover:text-[var(--secondary)] transition-colors cursor-pointer group">
              <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] group-hover:border-[var(--secondary)]/50 group-hover:shadow-[0_0_15px_var(--accent-muted)] transition-all">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform">Global (Remote)</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <form onSubmit={handleSubmit} className="md:col-span-3 bg-[var(--bg-primary)]/50 border border-[var(--border)] p-8 rounded-3xl">
          <InputField label="Name" name="name" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Subject" name="subject" />
          <InputField label="Message" name="message" isTextArea={true} />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-bold tracking-wide text-white transition-all duration-300 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl hover:bg-[var(--accent)] disabled:bg-[var(--bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_20px_var(--accent-muted)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10">{isLoading ? "Transmitting..." : "Send Secure Message"}</span>
            {!isLoading && <Send className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
          </button>

          {status && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center mt-6 font-body text-sm px-4 py-2 border rounded-lg ${status.type === 'error' ? 'text-red-400 border-red-500/30 bg-red-500/10' : 'text-green-400 border-green-500/30 bg-green-500/10'}`}
            >
              {status.text}
            </motion.p>
          )}
        </form>
      </motion.div>
    </main>
  );
}
