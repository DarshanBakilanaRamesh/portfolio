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
              <h2 className="section-title">Über mich</h2>
              <p className="text-secondary-700 mb-6 text-justify">
                Ich bin ein interdisziplinärer DevOps und KI-Engineer mit Erfahrung in skalierbaren Cloud-Infrastrukturen auf AWS sowie 
                automatisierten CI/CD-Pipelines mit Jenkins und GitHub Actions. Mein Schwerpunkt liegt auf Infrastructure as Code mit 
                Terraform und containerisierten Deployments mit Docker und Kubernetes.
              </p>
              <p className="text-secondary-700 mb-6">
              Mit Ansible automatisiere ich Konfigurations- und Deployment-Prozesse und entwickle zuverlässige, reproduzierbare 
              Systeme im Bereich Machine Learning und Robotik.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Name:</h3>
                  <p className="text-secondary-600">Darshan Bakilana Ramesh</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">E-mail:</h3>
                  <p className="text-secondary-600">darshanbakilanaramesh@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Standort:</h3>
                  <p className="text-secondary-600">Weimar, Germany</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Telefon:</h3>
                  <p className="text-secondary-600">+49 15777687063</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <a
                href="/Darshan_Bakilana_Ramesh_CV.pdf"
                className="btn btn-primary inline-flex items-center hover:scale-105 transition-transform duration-200"
                download
              >
                <FiDownload className="mr-2" />
                Lebenslauf herunterladen
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
