import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "DevOps-Automatisierung und Cloud Deployment",
      description: [
        "Entwicklung und Deployment einer Node.js Webanwendung auf AWS EC2 und Kubernetes.",
        "Containerisierung mit Docker, Bereitstellung über Helm-Charts, GitOps Deployments mit Argo CD sowie automatisierte Builds und Tests via GitLab CI/CD.",
      ],
      image: "/devops.jpg",
      tags: ["Node.js", "AWS EC2", "Docker", "Kubernetes", "GitLab", "Helmcharts", "ArgoCD"],
    },
    {
      title: "Masters Projekt – Software Engineering für Trusted Autonomous Vehicles",
      description: [
        "Entwicklung eines ROS (Noetic) basierten Frameworks auf Ubuntu 20.04 (Linux) mit Python (OpenCV, NumPy), Rviz und Raspberry Pi mit LiDAR & LEGO EV3.", 
        "Integration von Spurenerkennung, Hindernisvermeidung und Pfadplanung, validiert durch Simulation und Tests."
      ],
      image: "/SETAV.jpg",
      tags: ["Ubuntu 20.04", "Python (OpenCV, Numpy)", "ROS (Noetic)", "Rviz", "Lego EV3", "Raspberry Pi", "RP LiDAR"],
      github: "https://github.com/se-buw/setav/tree/master",
    },
    {
      title: "LLM-gestützter Support-Assistent für Robotiksysteme",
      description: [
        "Entwicklung und Containerisierung eines Chatbot für Robotik (ROS, Sensoren, SLAM) mit Python, LangChain, FAISS, Streamlit und Docker.",
        "Anwendung von RAG mit semantischer Suche zur Bereitstellung domänenspezifischer Antworten über eine Weboberfläche, Deployment via Ansible Playbook (NGINX).",
      ],
      image: "/chatbot.jpg",
      tags: ["LLM", "LangChain", "Python", "PDF QA", "Semantic Search", "Vector Embeddings", "NGINX", "Streamlit", "Docker"],
      github: "https://github.com/DarshanBakilanaRamesh/robotics_qa_bot"
    },
    {
      title: "Bachelor Projekt – Entwurf und Bau eines Pestizid Sprühroboters",
      description: [
        "Entwicklung eines automatisierten Pestizid-Sprühroboters mit RC-Steuerung und einem C++ Kontrollsystem auf Arduino Mega 328, Versionierung mit Git."
      ],
      image: "/Pesti_robot.jpg",
      tags: ["C++", "Git", "Autodesk Inventor", "Arduino mega 328", "L293D H-bridge IC"],
      drive: "https://drive.google.com/file/d/1CZwvNyxdZC9FbP8-HEilGmxqjTH4gZ8L/view?usp=sharing"
    },
];

  return (
    <section id="projects" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              Meine Projekte
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Nachfolgend finden Sie eine Auswahl meiner aktuellen Projekte, die meine technischen 
              Fähigkeiten, meine analytische Arbeitsweise sowie meine Kompetenz zur Umsetzung qualitativ 
              hochwertiger Lösungen verdeutlichen.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card h-full flex flex-col overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc list-inside marker:text-primary-500 text-secondary-600 mb-4 flex-grow space-y-1">
                      {project.description.map((point, idx) => (
                        <li key={idx} className="text-justify leading-8">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-secondary-600 mb-4 flex-grow text-justify leading-8">{project.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 hover:text-primary-500 transition-colors flex items-center"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 hover:text-primary-500 transition-colors flex items-center"
                      >
                        <FiExternalLink className="mr-1" /> Live Demo
                      </a>
                    )}
                    {project.drive && (
                      <a
                        href={project.drive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 hover:text-primary-500 transition-colors flex items-center"
                      >
                        <FiExternalLink className="mr-1" /> Drive Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollAnimation>
            <a
              href="https://github.com/DarshanBakilanaRamesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              <FiGithub className="mr-2" />
              Mehr auf GitHub ansehen
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;
