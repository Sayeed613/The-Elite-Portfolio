import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setResult("Sending....");

    const formPayload = new FormData();
    formPayload.append("access_key", "a30636e2-a7d1-4796-ab8a-7314e3019a60"); // Your Web3Forms access key
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("company", formData.company);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        toast.success("Form submitted successfully!");
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setResult(data.message || "Oops! Something went wrong.");
        toast.error(data.message || "Oops! Something went wrong.");
      }
    } catch (error) {
      console.log("Error sending form:", error);
      setResult("Oops! Something went wrong.");
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <div id="contact" className="w-full text-white mt-20 h-full px-4 sm:px-8">
      <ToastContainer />
      {/* Top Nav */}
      <div className="w-full text-xs text-start py-4 font-light">
        <p className="w-[95%] m-auto">
          WELCOME TO MY PORTFOLIO, A CURATED COLLECTION OF MY BEST PROJECTS,
          SHOWCASING MY WORK AS A FREELANCE DEVELOPER AND DESIGNER. LET'S CREATE
          SOMETHING AMAZING TOGETHER.
        </p>
      </div>

      <div className="w-full h-16 text-end sm:text-start">
        <div className="text-sm uppercase font-light hidden sm:block w-[95%] m-auto">
          Freelance Developer & Designer <ion-icon name="filter-sharp" className="relative top-0.5"></ion-icon>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full pt-5">
        <Marquee autoFill gradient={false} speed={40}>
          <span className="font-bold text-gray-400 text-[5em] sm:text-[6em] lg:text-[8em]  inline-block w-full">
            Contact us / Contact us / Contact us / Contact us / Contact us / Contact us / Contact us / Contact us /
          </span>
        </Marquee>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col sm:flex-row w-full contact-section">
        {/* Contact Details */}
        <div className="contact-detail sm:w-1/2 w-full p-4 sm:p-8">
          <p className="text-2xl sm:text-4xl leading-[40px] sm:leading-[60px] pt-4">
            Let’s unlock together the next level of possibilities. Reach out.
          </p>

          {/* Social Media */}
          <div className="social-media mt-8">
            <h3 className="uppercase text-gray-600 font-normal mb-2">Social Media</h3>
            <span className="uppercase">INSTAGRAM - GITHUB - LINKEDIN</span>
          </div>

          {/* Contact Info */}
          <div className="contact-info w-full flex flex-col sm:flex-row sm:justify-between mt-8">
            {/* Email */}
            <div className="email mb-4 sm:mb-0">
              <h3 className="uppercase text-gray-600 font-normal">GET IN TOUCH</h3>
              <span className="text-lg">sayeedahmed90082@gmail.com</span>
            </div>

            {/* Address */}
            <div className="address sm:pl-8">
              <h3 className="uppercase text-gray-600 font-normal">Location</h3>
              <span className="text-lg">Robertsonpet, Bangalore</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form sm:w-1/2 w-full p-4 sm:p-8">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              {/* Name and Phone Row */}
              <div className="row flex flex-col sm:flex-row mb-8 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-b text-xl sm:text-2xl p-2 w-full"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b text-xl sm:text-2xl p-2 w-full"
                />
              </div>

              {/* Email and Company Row */}
              <div className="row flex flex-col sm:flex-row mb-8 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b text-xl sm:text-2xl p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-transparent border-b text-xl sm:text-2xl p-2 w-full"
                />
              </div>

              {/* Message Row */}
              <div className="row flex mb-8">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  cols="30"
                  rows="5"
                  className="bg-transparent border-b text-xl sm:text-2xl p-2 w-full"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="row flex justify-between items-center">
                <button type="submit" className="text-white text-2xl sm:text-3xl lg:text-6xl font-semibold cursor-pointer">
                  Submit
                </button>
                <div className="sent-icon">
                  <IoIosArrowRoundForward size={36} className="sm:size-20 cursor-pointer" />
                </div>
              </div>
            </form>

            {/* Display Submission Result */}
            {result && <p className="mt-4 text-white">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}