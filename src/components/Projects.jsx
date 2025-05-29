import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Masters Thesis - Extraction and Analysis of Dataset Constraints for Plausibility of Data",
      description: [
        "Developed methods to extract and compare dataset constraints using both Human-written and Machine-learned approaches.",
        "Generated datasets from classifiers (Decision tree and Support vector machine) disagreements. Analysis of both Human-written and Machine learned (Isolation Forest) methods for Automating constraint detection and Outlier Identification.",
        "Developed methods to generate plausible datasets automatically, that fully adhere to the identified constraints using formal reasoning via SMT solvers."
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "SMT-LIB", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "Visual Studio Code", "Z3", "Jupyter Notebooks", "Matplotlib", "MLDiff"],
      github: "https://github.com/DarshanBakilanaRamesh/constraints-extraction-analysis-plausibility"
    },
    {
      title: "Masters Project – Software Engineering for Trusted Autonomous Vehicles",
      description: [
        "Developed software framework for (small-scale or virtual) autonomous vehicles. Implemented Lane detection (Image processing), Object recognition, Object detection (Lidar), planning and executing manoeuvres, software architecture and interfaces, and software quality assurance (testing, simulation)."
      ],
      image: "/SETAV.jpg",
      tags: ["Ubuntu 20.04", "Python (OpenCV, Numpy)", "ROS (Noetic)", "Rviz", "Lego EV3", "Raspberry Pi"],
      github: "https://github.com/se-buw/setav/tree/master",
    },
    {
      title: "Bachelor Project – Design and fabrication of pesticide spraying robot",
      description: [
        "Designed and developed pesticide spraying robot. Analyzed the robot motion in various terrain conditions. Developed a control scheme for navigation and efficient spraying mechanism."
      ],
      image: "/Pesti_robot.jpg",
      tags: ["C++", "Catia", "Ansys", "Autodesk Inventor", "Arduino mega 328", "L293D H-bridge IC"],
      drive: "https://drive.google.com/file/d/1CZwvNyxdZC9FbP8-HEilGmxqjTH4gZ8L/view?usp=sharing"
    },
    {
      title: "Diploma Project – Fabrication of three wheeled handicapped steering propulsion",
      description: [
        "Designed and fabricated a manually operated three-wheeled vehicle for physically challenged individuals.",
        "Integrated a steering-based propulsion mechanism to allow easier and safer navigation."
      ],
      image: "/Diploma.jpg",
      tags: ["Catia"],
    }
  ];

  return (
    <section id="projects" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              My Projects
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills, approach to problem-solving, and ability to deliver high-quality solutions.
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
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-secondary-600 mb-4 flex-grow">{project.description}</p>
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
              View More on GitHub
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;
