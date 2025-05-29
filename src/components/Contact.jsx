import React, { useRef } from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nq9ydvp",           // ✅ Your EmailJS Service ID
        "template_xfjy8ef",          // ✅ Your EmailJS Template ID
        form.current,
        "swcZ0OtLaXXS_x-Cm"          // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Clear form
  };

  return (
    <section id="contact" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              Get In Touch
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              I'm currently open to new job opportunities and collaborations. Feel free to reach out if you have a job vacancy or a project in mind or just want to connect.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ScrollAnimation>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                <FiMail size={20} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:darshanbakilanaramesh@gmail.com"
                className="text-secondary-600 hover:text-primary-500 transition-colors"
              >
                darshanbakilanaramesh@gmail.com
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                <FiPhone size={20} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+4915777687063"
                className="text-secondary-600 hover:text-primary-500 transition-colors"
              >
                +49 15777687063
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                <FiMapPin size={20} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-secondary-600">Weimar, Germany</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-secondary-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-secondary-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary flex items-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
