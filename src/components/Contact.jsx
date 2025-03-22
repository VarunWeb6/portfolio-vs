import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_ai090gq", 
        "template_gjanxdq", 
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        "P0c5GEdEfTQq4FGOM"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => setStatus("Failed to send. Please try again.")
      );
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-blue-400">Contact Me </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4" />
        </button>

        {status && <p className="text-center mt-3 text-blue-400">{status}</p>}
      </form>
    </main>
  );
}
