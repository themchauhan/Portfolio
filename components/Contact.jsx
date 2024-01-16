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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData['message']);

      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
  
      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  };
  


  return (
    <section className="form_wrap" id="contact">
      <div className="container">
        <div className="title-wrap mb-7">
          <h3 className="mb-3 font-bold">GET IN TOUCH</h3>
          <p>If you are a business seeking a web presence, you can get in touch with me here.</p>
        </div>
        <div className="form-wrap md:flex">
          <div className="flex w-full md:w-7/12">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border text-black "
                  required
                />
              </div>
              <div id="success-message" className="success-message" style={{ display: "none" }}>
                Thank you for submitting form, We will reach you soon!!
              </div>
              <button
                type="submit"
                className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black min-w-[220px] place-self-center place-items-center"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="info-wrap flex flex-wrap w-full md:w-5/12 place-content-start md:pl-20 pt-5">
            <div className="flex contact-info w-full">
              <span>
                <Image
                  src="/phone-call.svg"
                  alt="person"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </span>
              <span className="pl-4">
                <h6 className="text-[#f04e3c] text-base">+917015066237</h6>
                <h6 className="mt-3 text-base">Mon to Fri (10am - 6pm)</h6>
              </span>
            </div>
            <div className="flex contact-info w-full pt-6">
              <span>
                <Image
                  src="/email.svg"
                  alt="person"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </span>
              <span className="pl-4">
                <h6 className="text-base"><a href="mailto:mani7015066@gmail.com" className="underline text-[#f04e3c] hover:no-underline">Let&#39;s Connect in your Inbox</a></h6>
                <h6 className="mt-3 text-base">Feel Free To Reach Out Anytime!</h6>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
