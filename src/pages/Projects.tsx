import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Placeholder projects data
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Short description of the project.',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Short description of the project.',
      tags: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Short description of the project.',
      tags: ['React', 'Firebase', 'Material UI']
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Short description of the project.',
      tags: ['Next.js', 'TypeScript', 'Styled Components']
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">My Projects</h1>
          <p className="text-dark-300 text-center mb-12">
            This is a placeholder Projects page. A gallery of my work with detailed descriptions and links will be displayed here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-dark-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 rounded-full bg-dark-700 text-dark-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-primary-400 hover:text-primary-500 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-primary-400 hover:text-primary-500 transition-colors"
                    aria-label="View live demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

