import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FiBriefcase, FiCalendar, FiBookOpen } from "react-icons/fi";

const Experience = () => {
  const workExperiences = [
    {
      role: "Software Developer",
      company: "Continental AG",
      duration: "15/08/2022",
      location: "Lindau, Germany",
      description: [
        "Built Python scripts to process .pcd files from autonomous vehicle LIDAR sensors stored in ROSBag (.bag) logs. Cleaned/filtered 3D point clouds with NumPy, enriched with metadata via Pandas, and exported to CSV for ML and analytics teams.",
        "Verified data quality using Open3D, ensuring noise removal did not discard critical information.",
        "Designed and deployed CI/CD pipelines with Jenkins, Bash, and GitHub webhooks on a Linux HPC cluster (SLURM), automating build, test, and deployment, cutting integration time by 30%.",
        "Automated rollback and failure alerts (email/Slack) and optimized HPC module loading for faster perception algorithm testing.",
        "Managed GitHub workflows, enforced code reviews, and wrote contribution guidelines.",
        "Created Jira (JQL) KPI dashboards tracking sprint velocity, bug counts, and build times. Integrated with Confluence for real-time stakeholder updates.",
      ]
    },
    {
      role: "Data Engineer",
      company: "Jay Blues Technologies",
      duration: "08/2019",
      location: "India",
      description: [
        "Developed and validated machine learning models (classification & regression) achieving up to 85% accuracy, driving customer behavior analysis initiatives.",
        "Conducted EDA to uncover anomalies and patterns, generating insights that guided 2+ product strategy decisions.",
        "Automated model training, validation, and deployment with CI/CD pipelines, Docker, and AWS, integrating Grafana for monitoring and real-time performance tracking.",
        "Designed interactive dashboards in Tableau and Power BI, enabling stakeholders to track KPIs and optimize retention strategies.",
      ]
    },
    {
      role: "CNC machines Department Intern",
      company: "Ace Micromatic Group (AMG)",
      duration: "07/2018",
      location: "Bangalore, India",
      description: [
        "Interned on various series of CNC lathe machines (Jobber, Superjobber, and LT series) and tests like Ballbar, geometrical, laser, coolant, profile, load, and final inspection.",
      ]
    },
    {
      role: "Aviation Department Intern",
      company: "Hindustan Aeronautics Limited (HAL)",
      duration: "06/2018",
      location: "Bangalore, India",
      description: [
        "Interned under Aircraft division which covers about structural sub-assemblies such as Doors, Pylons, Fairings, Drop Tanks, Control Structures, etc",
        "Learned about Precision sheet metal forming (Cold or Hot Forming) and welding of Aircraft components out of light alloys, various heat treatment processes, Aircraft Transparencies, landing gears, and final inspections.",
      ]
    },
    {
      role: "Automobile Department Intern",
      company: "Bangalore Metropolitan Transport Corporation (BMTC)",
      duration: "02/2018",
      location: "Bangalore, India",
      description: [
        "Interned on bus components like engine, transmission, differential, clutch, brake system and also an overview on bus body design.",
      ]
    }
  ];

  const education = [
    {
      degree: "Masters in Digital Engineering",
      institution: "Bauhaus University Weimar",
      duration: "04/2025",
      country: "Germany",
      description: [
        "Modules: Object-oriented Programming, Algorithms and Data Structures, Software Engineering, Machine Learning, Statistics, Photogrammetric Computer Vision, Image analysis and object recognitions, Advanced BIM, etc"
      ]
    },
    {
      degree: "Bachelors in Mechanical Engineering",
      institution: "Dayananda Sagar College of Engineering",
      duration: "2019",
      country: "India",
      description: [
        "Awarded ‘Best Innovative Project’ in the final project exhibition"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary-50">
      <div className="container">
        <div className="mb-16">
          <ScrollAnimation>
            <h2 className="section-title">Experience</h2>
            <p className="text-secondary-600 max-w-3xl">
              My professional journey has equipped me with hands-on experience and the skills necessary to deliver exceptional results.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <ScrollAnimation>
              <div className="flex items-center mb-8">
                <FiBriefcase className="text-primary-500 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Work Experience</h3>
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
                <h3 className="text-2xl font-semibold">Education</h3>
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
