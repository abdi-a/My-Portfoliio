import React from 'react';
const About = () => {
  const skills = [
    { name: 'HTML', level: 88 },
    { name: 'CSS/Bootstrap/Tailwind CSS', level: 85 },
    // { name: 'Bootstrap', level: 85 },
    // { name: 'Tailwind CSS', level: 85 },
    { name: 'Javascript/Typescript', level: 70 },
    // { name: 'JQuery', level: 70 },
    // { name: 'Typescript', level: 70 },
    { name: 'React', level: 80 },
    // { name: 'API', level: 80 },
    { name: 'Git/github', level: 70 },
    { name: 'Node js/Express', level: 70 },
    { name: 'MySQL/MongoDB/Firebaase', level: 75 },
    // { name: 'MongoDB', level: 75 },
    // { name: 'Wordpress', level: 75 },
  ];

  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '../components/images/Abdisa Awel resume.pdf'; // Path to your resume in public folder
    link.download = 'Abdisa Awel_Resume.pdf'; // The filename you want to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Hi there! I'm Abdisa Awel, a passionate third year Computer Science student at Madda Walabu University, diving deep into the world of full-stack development.

My journey into coding began when I wanted to create solutions that bridge technology and everyday life. Since then, I’ve been hooked on turning ideas into functional, digital experiences.
As a second-year student, I’m constantly learning frontend (HTML, CSS, JavaScript, React) and backend (Node.js, databases) technologies.  
            </p>
            <p className='text-white mb-6 leading-relaxed'>
            I’ve worked on projects,These experiences have taught me the power of clean code and user-centric design.
            While I’m early in my career, my goal is to grow as a versatile developer, contribute to meaningful projects, and collaborate with others who share my curiosity.
            </p>
           
            <button 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-200"
            >
              Download Resume
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
