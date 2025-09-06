// components/ContactForm.js
"use client"
import React, { useState, useRef } from "react";
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
      }

      // Success
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  


  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-500/30">
            💬 Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Get In 
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            If you are a business seeking a web presence, you can get in touch with me here. 
            I&apos;m always excited to discuss new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
              </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  required
                />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-xl text-center font-medium">
                  ✅ Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-center font-medium">
                  ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Image
                  src="/phone-call.svg"
                      alt="Phone"
                  width={24}
                  height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-blue-400 font-medium">+91 7015066237</p>
                    <p className="text-gray-400 text-sm">Mon to Fri (10am - 6pm)</p>
                  </div>
            </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Image
                  src="/email.svg"
                      alt="Email"
                  width={24}
                  height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:mani7015066@gmail.com" 
                      className="text-blue-400 hover:text-purple-400 transition-colors duration-200 font-medium"
                    >
                      mani7015066@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm">Feel free to reach out anytime!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>7+ years of web development experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Modern technologies and best practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Responsive and user-friendly designs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Fast turnaround and reliable communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
