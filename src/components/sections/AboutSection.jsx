import React from 'react';
import { Fade } from "react-awesome-reveal";
import ProfileCard from '../ProfileCard';

const AboutSection = ({ user }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <Fade triggerOnce>
        <div className="container mx-auto flex flex-col items-center px-4">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <ProfileCard user={user} />
        </div>
      </Fade>
    </section>
  );
};

export default AboutSection;
