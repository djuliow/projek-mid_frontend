import React from 'react';
import { Fade } from "react-awesome-reveal";

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <Fade direction="left" triggerOnce>
          <h2 className="text-4xl font-bold text-center mb-12">Tools & Skills</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {skills.map(skill => (
              <div key={skill.id} className="flex flex-col items-center text-center w-24 transform hover:scale-105 transition-transform duration-300">
                <img src={skill.image} alt={skill.name} className="h-20 w-20 object-contain mb-2" />
                <p className="font-semibold text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
