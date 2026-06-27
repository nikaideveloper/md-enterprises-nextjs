"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  User, Building2, Mail, Phone, Factory, 
  Settings2, ClipboardCheck, IndianRupee, MapPin, 
  Pencil, ChevronDown, Loader2, AlertCircle, CheckCircle2,
  MessageCircle,ArrowLeft  // Added for WhatsApp icon
} from "lucide-react";
import Link from "next/link";

export default function InquiryNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    machine: "",
    production: "",
    budget: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const [resultMsg, setResultMsg] = useState("");

  const industries = ["Food & Beverages", "Pharmaceuticals", "Cosmetics", "Chemicals"];
  const machines = ["Filling Machine", "Pouch Packing", "Labeling Machine", "Capping Machine"];
  const productionData = ["500-1000 units/day", "1000-5000 units/day", "5000+ units/day"];
  const budgetData = [
    "Below ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹15,00,000",
    "Above ₹15,00,000"
  ];

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
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.industry) newErrors.industry = "Select industry";
    if (!formData.machine) newErrors.machine = "Select machine";
    if (!formData.production) newErrors.production = "Select production";
    if (!formData.budget) newErrors.budget = "Select budget";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.message.trim()) newErrors.message = "Please enter requirements";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (status !== "idle") setStatus("idle");
  };

  // --- NEW: WhatsApp Logic ---
  const sendToWhatsApp = (data) => {
    const phoneNumber = "919967859485"; // Your WhatsApp number with country code
    const text = `*New Machinery Inquiry*%0A
*Name:* ${data.name}%0A
*Company:* ${data.company}%0A
*Phone:* ${data.phone}%0A
*Email:* ${data.email}%0A
*Industry:* ${data.industry}%0A
*Machine:* ${data.machine}%0A
*Production:* ${data.production}%0A
*Budget:* ${data.budget}%0A
*Location:* ${data.location}%0A
*Requirements:* ${data.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus("idle");

    const serviceID = "service_o65pbkr";
    const templateID = "template_inxzrij";
    const publicKey = "qj_bicH7AvbXAcmSV";

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    try {
      // 1. Send Email
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // 2. Open WhatsApp (Triggered after successful email log)
      sendToWhatsApp(formData);

      setStatus("success");
      setResultMsg("Inquiry sent successfully! Redirecting to WhatsApp...");
      
      // Reset Form
      setFormData({
        name: "", email: "", phone: "", company: "", industry: "",
        machine: "", production: "", budget: "", location: "", message: ""
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setResultMsg("Failed to send inquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMsg = ({ name }) => errors[name] ? (
    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
      <AlertCircle size={10} /> {errors[name]}
    </span>
  ) : null;

  return (
    <main className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Request a <span className="text-[#88c431]">Quote</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            Fill out the form below and our technical experts will provide you with the best machinery solutions for your business.
          </p>

        
        </div>

        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Your Name *</label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.name ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className={`w-full pl-10 pr-3 py-2.5 border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none transition-all`} />
                  </div>
                  <ErrorMsg name="name" />
                </div>

                {/* Company */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Company Name *</label>
                  <div className="relative">
                    <Building2 className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.company ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Company Ltd" className={`w-full pl-10 pr-3 py-2.5 border ${errors.company ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none transition-all`} />
                  </div>
                  <ErrorMsg name="company" />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" className={`w-full pl-10 pr-3 py-2.5 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none transition-all`} />
                  </div>
                  <ErrorMsg name="email" />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 00000 00000" className={`w-full pl-10 pr-3 py-2.5 border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none transition-all`} />
                  </div>
                  <ErrorMsg name="phone" />
                </div>

                {/* Industry */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Industry Type *</label>
                  <div className="relative">
                    <Factory className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.industry ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <select name="industry" value={formData.industry} onChange={handleChange} className={`w-full pl-10 pr-10 py-2.5 border ${errors.industry ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none appearance-none bg-white transition-all`}>
                      <option value="">Select Industry</option>
                      {industries.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <ErrorMsg name="industry" />
                </div>

                {/* Machine */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Machine Interested In *</label>
                  <div className="relative">
                    <Settings2 className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.machine ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <select name="machine" value={formData.machine} onChange={handleChange} className={`w-full pl-10 pr-10 py-2.5 border ${errors.machine ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none appearance-none bg-white transition-all`}>
                      <option value="">Select Machine</option>
                      {machines.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <ErrorMsg name="machine" />
                </div>

                {/* Production */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Production Requirement *</label>
                  <div className="relative">
                    <ClipboardCheck className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.production ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <select name="production" value={formData.production} onChange={handleChange} className={`w-full pl-10 pr-10 py-2.5 border ${errors.production ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none appearance-none bg-white transition-all`}>
                      <option value="">Select Production</option>
                      {productionData.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <ErrorMsg name="production" />
                </div>

                {/* Budget */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Budget Range (INR) *</label>
                  <div className="relative">
                    <IndianRupee className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.budget ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                    <select name="budget" value={formData.budget} onChange={handleChange} className={`w-full pl-10 pr-10 py-2.5 border ${errors.budget ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none appearance-none bg-white transition-all`}>
                      <option value="">Select Budget</option>
                      {budgetData.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <ErrorMsg name="budget" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Your Location *</label>
                <div className="relative">
                  <MapPin className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.location ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                  <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="City, State, Country" className={`w-full pl-10 pr-3 py-2.5 border ${errors.location ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none transition-all`} />
                </div>
                <ErrorMsg name="location" />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Detailed Requirements *</label>
                <div className="relative">
                  <Pencil className={`absolute left-3 top-3 ${errors.message ? 'text-red-400' : 'text-gray-400'}`} size={16} />
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Please describe your specific needs..." className={`w-full pl-10 pr-3 py-2.5 border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-xl text-sm focus:ring-2 focus:ring-[#C6FF71] focus:border-transparent outline-none resize-none transition-all`}></textarea>
                </div>
                <ErrorMsg name="message" />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">{resultMsg}</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{resultMsg}</p>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#114232] text-white font-bold py-4 rounded-xl hover:bg-[#0d3326] transition-all text-sm uppercase tracking-[0.2em] flex items-center justify-center disabled:opacity-70 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" size={18} />
                ) : (
                  <>
                    <MessageCircle size={18} className="mr-2" />
                    Send Inquiry 
                  </>
                )}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-[#88c431]" /> 100% Secure & Confidential
                </p>
                <p className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-[#88c431]" /> 24/7 WhatsApp Support
                </p>
              </div>
            </form>
          </div>
        </div>
         {/* <div className="mb-0 mt-5">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-gray-200 rounded-full text-sm font-medium hover:bg-black transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div> */}
      </div>

      
    </main>
  );
}