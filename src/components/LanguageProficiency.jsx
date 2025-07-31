import React from "react";
import ScrollAnimation from "../utils/ScrollAnimation";

const LanguageProficiency = () => {
  const languages = [
    { name: "English", level: "C1", label: "Native/Fluent" },
    { name: "German", level: "B2", label: "Intermediate" },
    { name: "Kannada", level: "C1", label: "Native" },
    { name: "Telugu", level: "C1", label: "Advanced" },
    { name: "Tamil", level: "C1", label: "Advanced" },
    { name: "Hindi", level: "C1", label: "Advanced" },
  ];

  return (
    <section id="languages" className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              Language Proficiency
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Here's a quick overview of my language skills based on CEFR levels.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="w-full p-4 bg-white border border-secondary-200 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold mb-1">{lang.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-block text-sm font-medium bg-primary-100 text-primary-600 px-2 py-0.5 rounded">
                    {lang.level}
                  </span>
                  <span className="text-sm text-secondary-500">{lang.label}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default LanguageProficiency;
