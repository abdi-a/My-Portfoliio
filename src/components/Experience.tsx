
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a $2M project',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.',
      achievements: [
        'Built 15+ responsive web applications',
        'Integrated payment systems and third-party APIs',
        'Improved code quality by implementing testing frameworks'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Inc',
      duration: '2019 - 2020',
      description: 'Focused on creating responsive and interactive user interfaces using React and Vue.js. Worked closely with UX/UI teams.',
      achievements: [
        'Delivered 20+ pixel-perfect websites',
        'Improved user engagement by 35% through UX improvements',
        'Collaborated with cross-functional teams of 10+ members'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-400 transform md:-translate-x-0.5"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full transform md:-translate-x-2 -translate-y-0.5"></div>
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-slate-800/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
