"use client"
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '@/components/ProjectSection/ProjectCard';
import Aos from 'aos';

export const dynamic = 'force-static';

const ProjectPage = () => {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const initAOS = async () => {
        await import('aos');
        Aos.init({
          duration: 1000,
          easing: 'ease',
          once: false,
          anchorPlacement: 'top-bottom',
        });
      };
      initAOS();
    }
  }, []);

  return (
    <div className='overflow-x-hidden py-36'>
      <div className="mx-8 grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects
          .sort((a, b) => a.ranking - b.ranking)
          .map((project, index) => (
            <div
              key={project.id}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectPage;