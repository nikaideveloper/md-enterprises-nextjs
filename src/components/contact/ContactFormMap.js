"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

const ContactFormMap = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  });

  // Validation & Status States
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "sending", "success", "error"
  const [resultMsg, setResultMsg] = useState("");

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
        setResultMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation Logic
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,12}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter valid phone (10-12 digits)";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSend = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");
    setResultMsg("Sending your message...");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject, // Key used in template {{subject}}
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_o65pbkr", // New Service ID
        "template_3apynm7", // New Template ID
        templateParams,
        "qj_bicH7AvbXAcmSV" // New Public Key
      );

      setStatus("success");
      setResultMsg("Message Sent Successfully!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        company: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("error");
      setResultMsg("Failed to send message. Please try again.");
    }
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.602568770281!2d73.09320377596564!3d19.01690558217596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e96ed5c5792d%3A0x67bfbc193bf5a85!2sKusum%20Kunj!5e0!3m2!1sen!2sin!4v1716280000000!5m2!1sen!2sin";

  // Error Text Helper
  const ErrorLabel = ({ field }) => (
    errors[field] ? <span className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={10}/> {errors[field]}</span> : null
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-sm overflow-hidden shadow-sm">

        {/* LEFT SIDE: CONTACT FORM */}
        <div className="bg-white p-8 md:p-10 border-r border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Send Us A Message
          </h2>

          <form className="space-y-4" onSubmit={handleSend} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                <ErrorLabel field="name" />
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                <ErrorLabel field="email" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                <ErrorLabel field="phone" />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                <ErrorLabel field="subject" />
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 ${errors.company ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              />
              <ErrorLabel field="company" />
            </div>

            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              ></textarea>
              <ErrorLabel field="message" />
            </div>

            {/* Inline Result Message */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md text-sm border border-green-200">
                <CheckCircle2 size={18} /> {resultMsg}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm border border-red-200">
                <AlertCircle size={18} /> {resultMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#0F4C43] text-white py-4 px-6 rounded-md font-semibold text-lg hover:bg-[#0a3630] transition-all shadow-md mt-4 flex items-center justify-center disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: GOOGLE MAP */}
        <div className="w-full h-[500px] md:h-auto bg-gray-50">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;