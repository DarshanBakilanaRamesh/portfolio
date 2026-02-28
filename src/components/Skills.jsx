import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiCode, FiLayers, FiDatabase, FiTrello, FiSettings, FiCpu } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <FiCode />,
      skills: ["Python", "C++", "Java", "SQL", "Bash / Shell Scripting"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <FiDatabase />,
      skills: ["AWS (EC2, EKS)", "Docker", "Kubernetes", "Terraform", "Ansible"],
    },
    {
      title: "CI/CD & DevOps",
      icon: <FiLayers />,
      skills: ["Jenkins", "GitHub Actions", "Git / GitLab", "GitOps (Argo CD)", "Gradle"],
    },
    {
      title: "Linux & Developer Tools",
      icon: <FiSettings />,
      skills: [
        "Linux (Ubuntu)",
        "Shell Automation",
        "Build Pipelines",
        "Release Workflows",
        "Environment Configuration",
      ],
    },
    {
      title: "Machine Learning & Robotics",
      icon: <FiCpu />,
      skills: [
        "Scikit-learn",
        "PyTorch",
        "OpenCV",
        "ROS (Noetic)",
        "NumPy / Pandas",
        "LangChain / FAISS",
      ],
    },
    {
      title: "Monitoring & Collaboration",
      icon: <FiTrello />,
      skills: ["Grafana", "Prometheus", "JIRA", "Confluence", "Power BI", "Streamlit"],
    },
  ];

  return (
    <section id="skills" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              Meine Fähigkeiten
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Ich verfüge über fundierte Kenntnisse in verschiedenen Technologien und
              Arbeitsmethoden, die ich im Laufe meiner beruflichen Laufbahn aufgebaut
              habe. Nachfolgend finden Sie die zentralen Kompetenzbereiche.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card p-6 h-full flex flex-col">
                <div className="text-primary-500 text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-secondary-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
