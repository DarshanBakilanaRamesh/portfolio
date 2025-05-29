import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiChevronUp, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-4">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Intro + Socials */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Darshan Bakilana Ramesh</h3>
            <p className="text-secondary-300 mb-4">
              A passionate developer focused on delivering impactful software solutions across diverse platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DarshanBakilanaRamesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/darshanbakilanaramesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:darshanbakilanaramesh@gmail.com"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <span className="text-secondary-300">darshanbakilanaramesh@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-secondary-300">Weimar, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Darshan Bakilana Ramesh. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <FiChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
