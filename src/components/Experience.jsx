import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiBriefcase, FiCalendar, FiBookOpen } from "react-icons/fi";

const Experience = () => {
  const workExperiences = [
    {
      role: "Masterarbeit – Machine Learning & Data Engineering",
      company: "Bauhaus Universität",
      duration: "Jul 2024 – Apr 2025",
      location: "Weimar, Germany",
      description: [
        "Entwicklung eines Python Frameworks (NumPy, Pandas, Scikit-learn, PyTorch) zur Extraktion und Validierung von über 100 Constraints in realen Datensätzen anhand handgeschriebener Regeln und ML-Modelle (Isolation Forest, Decision Trees, SVM).",
        "Entwicklung von Algorithmen mit dem Z3 SMT-Solver, Verbesserung der Zuverlässigkeit der Constraint-Validierung um 85%, sowie Automatisierung der Evaluierungs workflows mit MLDiff und Git.",
        "Containerisierung der Experimente mit Docker für Reproduzierbarkeit, Skalierbarkeit und einfache Bereitstellung in verschiedenen Umgebungen.",
        "Visualisierung der Ergebnisse mit Matplotlib und Entwicklung interaktiver Dashboards in Power BI, Integration der Workflows über Jupyter Notebook und VS Code.",
      ]
    },
    {
      role: "Softwareentwickler",
      company: "Continental AG",
      duration: "Aug 2022 – Jan 2023",
      location: "Lindau, Germany",
      description: [
        "Erstellung von Python Skripten zur Verarbeitung von 10 GB LiDAR-Daten (.pcd, ROSBag), Bereinigung und Anreicherung von 3D-Punktwolken mit NumPy und Pandas für zuverlässige ML-Datensätze.",
        "Design und Implementierung von CI/CD-Pipelines mit Jenkins, Bash und GitHub-Webhooks auf einem Linux-HPC-Cluster, Reduzierung der Integrationszeit um 30 %.",
        "Automatisierung von Rollbacks, Benachrichtigungen (Slack/E-Mail) und HPC-Modulladung, Beschleunigung der Testphase von Wahrnehmungsalgorithmen und Verringerung der Ausfallzeiten.",
        "Entwicklung von Jira Dashboards (JQL) und Integration in Confluence zur Verbesserung des Sprint Trackings und der Stakeholder Berichterstattung.",
      ]
    },
    {
      role: "Softwareentwickler (DevOps-Fokus)",
      company: "Jay Blues Technologies",
      duration: "Aug 2019 – Sep 2020",
      location: "India",
      description: [
        "Entwurf und Wartung cloud-nativer CI/CD-Pipelines mit Jenkins, Kubernetes (EKS), IAM und GitLab CI zur Automatisierung von Build, Test und Deployment Workflows.",
        "Containerisierung von Anwendungen mit Docker sowie automatisierte Infrastruktur Provisionierung und Konfiguration mit Terraform und Ansible Playbooks, um skalierbare Deployments auf AWS sicherzustellen.",
        "Entwicklung von Bash und Python Skripten zur Prozessautomatisierung sowie Implementierung von Monitoring und Alerting Lösungen mit Grafana und Prometheus.",
        "Zusammenarbeit in einem agilen Team unter Anwendung Git-basierter Workflows und DevOps Best Practices über den gesamten Software-Lifecycle hinweg.",
      ]
    }
  ];

  const education = [
    {
      degree: "Masters in Digital Engineering",
      institution: "Bauhaus Universität Weimar",
      duration: "Okt 2020 – Apr 2025",
      country: "Deutschland",
      description: [
        "Module: Machine Learning, Algorithmen und Datenstrukturen, Software Engineering, Objektorientierte Modellierung und Programmierung, Statistik"
      ]
    },
    {
      degree: "Bachelor in Maschinenbau",
      institution: "Dayananda Sagar College of Engineering",
      duration: "2019",
      country: "Indien",
      description: [
        "Ausgezeichnet mit dem Preis „Best Innovative Project“ bei der Abschlussprojektausstellung"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary-50">
      <div className="container">
        <div className="mb-16">
          <ScrollAnimation>
            <h2 className="section-title">Erfahrung</h2>
            <p className="text-secondary-600 max-w-3xl">
              Durch meine berufliche Laufbahn konnte ich fundierte Praxiserfahrung 
              sammeln und die Kompetenzen entwickeln, um nachhaltige und qualitativ hochwertige 
              Ergebnisse zu erzielen.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <ScrollAnimation>
              <div className="flex items-center mb-8">
                <FiBriefcase className="text-primary-500 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Berufserfahrung</h3>
              </div>
            </ScrollAnimation>

            <div className="space-y-8 ml-2">
              {workExperiences.map((experience, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="relative pl-8 border-l-2 border-secondary-200 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h4 className="text-xl font-semibold">{experience.role}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3">
                      <span className="text-secondary-600">{experience.company}</span>
                      <span className="flex items-center text-secondary-500 text-sm">
                        <FiCalendar className="mr-1" /> {experience.duration}
                      </span>
                      <span className="text-secondary-500 text-sm">{experience.location}</span>
                    </div>
                    <ul className="list-disc list-inside marker:text-primary-500 space-y-2 text-secondary-600">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollAnimation>
              <div className="flex items-center mb-8">
                <FiBookOpen className="text-primary-500 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Ausbildung</h3>
              </div>
            </ScrollAnimation>

            <div className="space-y-8 ml-2">
              {education.map((item, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="relative pl-8 border-l-2 border-secondary-200 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3">
                      <span className="text-secondary-600">{item.institution}</span>
                      <span className="flex items-center text-secondary-500 text-sm">
                        <FiCalendar className="mr-1" /> {item.duration}
                      </span>
                      <span className="text-secondary-500 text-sm">{item.country}</span>
                    </div>
                    <ul className="list-disc list-inside marker:text-primary-500 space-y-2 text-secondary-600">
                      {item.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
