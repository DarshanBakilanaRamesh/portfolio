import React from "react";
import { FiArrowRight, FiGithub, FiLinkedin,} from "react-icons/fi";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-44 md:pb-32 relative">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-transparent" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      />
      
      <div className="container">
        <div className="max-w-3xl">
          <ScrollAnimation>
            <span className="inline-block text-primary-500 font-semibold mb-2">Hallo, ich bin</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Darshan Bakilana Ramesh
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 text-justify">
              Interdisziplinärer <span className="text-primary-500 font-medium">DevOps Engineer</span> mit einer Leidenschaft für 
              vertrauenswürdige KI und Open-Source-Beiträge.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="btn btn-primary shadow-lg shadow-primary-500/20"
              >
                Kontakt aufnehmen
                <FiArrowRight className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="btn btn-secondary"
              >
                Projekte ansehen
              </a>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3}>
            <div className="flex space-x-5">
              <a 
                href="https://github.com/DarshanBakilanaRamesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-secondary-600 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/darshanbakilanaramesh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-secondary-600 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://wa.me/+4915777687063"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-secondary-600 hover:text-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
