"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Phone, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import "../blog/blog.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const projectType = e.target.projectType.value;
    const message = e.target.message.value;

    const text = `Hi SmartWebLens, I'd like to start a project.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Project Type:* ${projectType}\n*Details:* ${message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/918228985946?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased py-12 md:py-20 transition-all duration-350">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog List
        </Link>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: BRAND INFO */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/50 mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Let's Build Together
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-blue-400">Project</span>
            </h1>
            <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              We design, build, and deploy high-converting websites and custom Android apps in just 5 working days. Tell us about your idea and start tomorrow!
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Call / WhatsApp</h4>
                  <a href="tel:+918228985946" className="text-sm font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    +91 82289 85946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</h4>
                  <a href="mailto:info@smartweblens.xyz" className="text-sm font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    info@smartweblens.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Location</h4>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Patna, Bihar, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:col-span-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 shadow-xl shadow-indigo-950/5">
            {submitted ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mx-auto mb-6 border border-emerald-100 dark:border-emerald-900">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-2">Inquiry Forwarded!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Thanks for submitting your request. We've forwarded your project parameters to our team via WhatsApp. We will reach back in under 15 minutes!
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your name" 
                      required 
                      className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-600/10 transition-all"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="your@email.com" 
                      required 
                      className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-600/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                      className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-600/10 transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Project Type</label>
                    <select 
                      name="projectType"
                      required
                      className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-600/10 transition-all cursor-pointer"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Ecommerce Launch">Ecommerce Launch</option>
                      <option value="Custom CRM/Software">Custom CRM/Software</option>
                      <option value="Other Consultation">Other Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Tell Us About Your Project</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    placeholder="Briefly describe what you'd like to build, any page count preferences, or target launch timeline..."
                    required
                    className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-600/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Send Inquiry via WhatsApp
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
