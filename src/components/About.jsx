import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="section bg-secondary-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="rounded-xl overflow-hidden shadow-custom">
              <img
                src="/PHOTO_DARSHAN.jpg"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollAnimation>

          <div>
            <ScrollAnimation>
              <h2 className="section-title">About Me</h2>
              <p className="text-secondary-700 mb-6">
                Perseverance and fast learning ability, Good Communication skills, Ability to work in a group, Problem-solving nature, having selfconfidence.
              </p>
              <p className="text-secondary-700 mb-6">
              I bring together strong technical expertise and a creative mindset to build solutions that go beyond expectations. 
              With a passion for continuous learning, I stay current with emerging technologies to drive innovation and deliver real impact.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Name:</h3>
                  <p className="text-secondary-600">Darshan Bakilana Ramesh</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email:</h3>
                  <p className="text-secondary-600">darshanbakilanaramesh@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location:</h3>
                  <p className="text-secondary-600">Weimar, Germany</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone:</h3>
                  <p className="text-secondary-600">+49 15777687063</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <a
                href="/Darshan Bakilana Ramesh CV.pdf"
                className="btn btn-primary inline-flex items-center hover:scale-105 transition-transform duration-200"
                download
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
