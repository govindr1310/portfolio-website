import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAmazon, SiGithubactions } from 'react-icons/si';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Multi-Cloud Infrastructure',
      description: 'Scalable, fault-tolerant infrastructure across AWS and Azure with automated failover',
      image: 'https://via.placeholder.com/600x340',
      tags: ['Terraform', 'AWS', 'Azure', 'IaC'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Kubernetes Platform',
      description: 'Enterprise-grade Kubernetes platform with GitOps workflow and integrated monitoring',
      image: 'https://via.placeholder.com/600x340',
      tags: ['Kubernetes', 'ArgoCD', 'Prometheus', 'GitOps'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'CI/CD Pipeline Framework',
      description: 'Comprehensive CI/CD framework with integrated security scanning and compliance checks',
      image: 'https://via.placeholder.com/600x340',
      tags: ['GitHub Actions', 'Jenkins', 'Docker', 'Security'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  // Skills data
  const skills = [
    { name: 'Kubernetes', icon: <SiKubernetes className="text-primary-500" size={36} /> },
    { name: 'Terraform', icon: <SiTerraform className="text-secondary-400" size={36} /> },
    { name: 'AWS', icon: <SiAmazon className="text-primary-300" size={36} /> },
    { name: 'Azure', icon: <FaMicrosoft className="text-primary-400" size={36} /> },
    { name: 'Docker', icon: <FaDocker className="text-primary-600" size={36} /> },
    { name: 'CI/CD', icon: <SiGithubactions className="text-white" size={36} /> }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="h-full w-full bg-cyber-grid bg-[size:24px_24px]"></div>
        </div>
        {/* Animated glowing orb */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-primary-500 font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm Govind R
              </motion.p>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block">Cloud Platform</span>
                <span className="block">
                  <span className="text-primary-500">Engineer</span> & DevOps Specialist
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-dark-300 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I design and implement scalable, resilient cloud infrastructure and DevOps pipelines that empower teams to deploy with confidence and innovate rapidly.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/projects" className="btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              {/* Hero illustration/image */}
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
                <div className="absolute inset-8 border-2 border-primary-400 rounded-full opacity-50 animate-spin" style={{ animationDuration: '15s' }}></div>
                <div className="absolute inset-16 border-2 border-secondary-400 rounded-full opacity-50 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-8xl text-white font-bold opacity-80 shadow-neon">GR</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-dark-900 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary-500">Infrastructure</span> Projects</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">Explore my cloud infrastructure and DevOps solutions that deliver scalability, reliability, and security.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="card group overflow-hidden border border-dark-700 hover:border-primary-600 transition-colors duration-300"
                variants={fadeIn}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-400 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub size={22} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-400 transition-colors"
                        aria-label="View live site"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-dark-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-dark-700 text-primary-300 border border-primary-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-950 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud & <span className="text-secondary-500">DevOps</span> Skills</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">Expertise in cloud platforms, container orchestration, infrastructure as code, and CI/CD automation.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="w-20 h-20 rounded-xl bg-dark-800 flex items-center justify-center mb-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-neon border border-dark-700 hover:border-primary-500">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-primary-100">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Subtle Twitter-blue accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500"></div>
          {/* Subtle grid pattern for texture */}
          <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
          {/* Very subtle blue glow in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[100px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build <span className="text-primary-500">Cloud</span> Infrastructure</h2>
            <p className="text-dark-50/90 text-lg mb-10">
              Looking to modernize your infrastructure or implement DevOps practices? I'd love to collaborate on creating scalable, secure, and efficient cloud solutions.
            </p>
            
            <Link to="/contact" className="btn bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-neon text-lg px-8 py-4 rounded-full transition-all duration-300">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

