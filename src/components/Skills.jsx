import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiCode, FiLayers, FiDatabase, FiTrello } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <FiCode />,
      skills: ["Python", "Java", "C++", "MATLAB", "Octave", "Bash", "SQL"],
    },
    {
      title: "Platforms & Environments",
      icon: <FiDatabase />,
      skills: [
        "ROS",
        "Raspberry Pi",
        "Visual Studio Code",
        "JetBrains IntelliJ IDEA",
        "PowerShell",
        "GitHub",
        "Jupyter Notebook",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FiLayers />,
      skills: [
        "Ubuntu (Linux)",
        "Docker",
        "Git",
        "Project Management (JIRA)",
        "Atlassian Confluence",
        "CI/CD",
        "Gradle",
        "Shell Scripting",
      ],
    },
    {
      title: "Modelling & Additional Tools",
      icon: <FiTrello />,
      skills: [
        "Catia",
        "Unigraphics (NXCAD)",
        "Revit",
        "Ansys",
        "Fusion 360",
        "AutoCAD",
        "QGIS",
        "Autodesk Inventor",
        "Lightroom",
        "Microsoft Office",
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              My Skills
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              I have knowledge of various technologies and methodologies acquired throughout my career. Here are the key areas where I excel.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card p-6 h-full flex flex-col">
                <div className="text-primary-500 text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <ul className="mt-auto space-y-2">
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
