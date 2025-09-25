"use client";
import Image from "next/image";
import { useState } from "react";
import SocialLinks from "./socialHandle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted Successfully");
    setForm({
      name: "",
      email: "",
      message: "",
    });

    console.log("Form submitted:", form);
  };
  return (
    <>
      <div className="mt-10">
        {/* Content Section */}

        <section
          className="  bg-black/60 py-16 sm:px-6 p-3 md:px-12 lg:px-20 "
          id="contact"
        >
          <h2 className="text-3xl font-bold mb-5  text-center text-white">
            Contact
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-500">
                Get in Touch
              </h2>
              <p className="mt-4 text-gray-600">
                Have questions, feedback, or partnership inquiries? Fill out the
                form and our team will get back to you shortly.
              </p>

              <div className="mt-8 space-y-4 text-gray-700">
                <p>
                  📍 <span className="font-semibold">Address:</span> 23 Suez
                  Crescent Ibrahim Abacha Estate, Wuse Zone 4 Abuja.
                </p>
                <p>
                  📧 <span className="font-semibold">Email:</span>{" "}
                  info@bead.com.ng
                </p>
                <p>
                  📞 <span className="font-semibold">Phone:</span> +234 806 716
                  0570
                </p>
              </div>
              <SocialLinks />
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 shadow-md rounded-lg sm:p-8 p-2 space-y-6 w-full"
            >
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 text-amber-50 rounded-lg px-4 py-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 text-amber-50 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 w-full border border-gray-100 text-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
