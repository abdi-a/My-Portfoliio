
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MWU SHOP',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin panel.',
      tech: ['React', 'Node js', 'Express', 'MySQL'],
      image: '../../public/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.avif',
      github: 'https://github.com/abdi-a/MWU-SHOP',
      live: 'https://mwu-shop.web.app'
    },
    {
      title: 'UNIVERSITY MANAGEMENT SYSTEM',
      description: 'Built a comprehensive web application to manage student enrollment, courses, grades, and faculty information for streamlined academic administration enabled role-based dashboards for students, instructors, and admins with features like course registration, grade submission, and timetable management.',
      tech: ['React', 'Node js', 'Express','MySQL'],
      image: '../../public/maxresdefault (1).jpg',
      github: 'https://github.com/abdi-a/madda-walabu-university-managemgnt-system',
      live: '#'
    },
    {
      title: 'PHARMACY WEBSITE',
      description: 'Developed a web-based system to manage medicine inventory, sales, and customer prescriptions for efficient pharmacy operations. ',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: '../../public/online-pharmacy-website-design-concept-flat-modern-medicine-illustration-for-website-design-banner-landing-page-vector.jpg',
      github: 'https://github.com/abdi-a/Pharmacy-website',
      live: 'https://clinquant-clafoutis-cfaacc.netlify.app/'
    },
    {
      title: 'LIBRARY MANAGEMENT SYSTEM',
      description: 'Designed and developed a web-based system to manage book inventory, user registration, and borrowing/return operations for libraries.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: '../../public/images (2).jpeg',
      github: 'https://github.com/abdi-a/School-library-management-system',
      live: 'https://profound-valkyrie-25da6a.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recently <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/80 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ArrowUp size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
