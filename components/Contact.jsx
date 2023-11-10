// components/ContactForm.js
"use client"
import React, { useState } from "react";
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to your server or API endpoint here
    // You can use libraries like axios to make HTTP requests
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="form_wrap bg-white" id="contact">
      <div className="container ">  
        <div className="form-outer bg-black max-w-[800px] rounded-md mx-auto p-10">
        <div className="title-wrap mb-7 text-center mx-auto max-w-[950px]">
         <h3 className="mb-4 font-bold">GET STARTED</h3>
       </div>
        <div className="form-wrap md:flex justify-center text-center"> 
        <div className="flex w-full">
         <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border text-black"
                placeholder="Name*"
                required
                />
            </div>
            <div className="mb-6">
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border text-black"
                placeholder="Email*"
                required
                />
            </div>
            <div className="mb-6">
                <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border text-black"
                placeholder="Subject*"
                required
                />
            </div>
            <div className="mb-6">
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border text-black"
                placeholder="Message*"
                required
                />
            </div>
            <button type="submit"
                className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black min-w-[220px] place-self-center place-items-center"
            >
                Submit
            </button>
         </form> 
        </div> 
        </div>
        </div>
      </div>   
    </section>
  );
};

export default Contact;
