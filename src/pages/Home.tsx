import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAmazon, SiGithubactions } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
    { name: 'Kubernetes', icon: <SiKubernetes size={36} /> },
    { name: 'Terraform', icon: <SiTerraform size={36} /> },
    { name: 'AWS', icon: <SiAmazon size={36} /> },
    { name: 'Azure', icon: <FaMicrosoft size={36} /> },
    { name: 'Docker', icon: <FaDocker size={36} /> },
    { name: 'CI/CD', icon: <SiGithubactions size={36} /> }
  ];

  return (
    <>
      {/* Hero Section with modern design */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-grid-pattern bg-[size:30px_30px]"></div>
        </div>
        
        {/* Animated gradient glow elements */}
        <div 
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full filter blur-[100px] opacity-20 animate-pulse-subtle"
          style={{ 
            background: 'radial-gradient(circle, var(--tw-gradient-stops))',
            '--tw-gradient-from': isDark ? '#6366f1' : '#818cf8',
            '--tw-gradient-to': 'transparent',
            '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
          }}
        ></div>
        
        <div 
          className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full filter blur-[100px] opacity-20 animate-pulse-subtle"
          style={{ 
            animationDelay: '2s',
            background: 'radial-gradient(circle, var(--tw-gradient-stops))',
            '--tw-gradient-from': isDark ? '#10b981' : '#34d399',
            '--tw-gradient-to': 'transparent',
            '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
                className={`${isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'} text-lg mb-8 max-w-lg`}
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
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  View My Work
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 rounded-md border ${isDark ? 'border-dark-border hover:border-primary-500 text-dark-text-primary' : 'border-light-border hover:border-primary-500 text-light-text-primary'} hover:text-primary-500 transition-all duration-300`}
                >
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
              {/* Hero illustration/image with modern aesthetic */}
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full opacity-20 blur-3xl animate-pulse-subtle" 
                     style={{ background: 'radial-gradient(circle, var(--tw-gradient-stops))',
                             '--tw-gradient-from': '#6366f1',
                             '--tw-gradient-to': 'transparent',
                             '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
                           }}></div>
                <div className="absolute inset-8 border-2 border-primary-400/30 rounded-full opacity-50 animate-spin-slow"></div>
                <div className="absolute inset-16 border-2 border-accent-400/30 rounded-full opacity-50 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-8xl font-bold opacity-80 text-primary-500/80">GR</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section with modern card design */}
      <section className={`py-20 ${isDark ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'} relative`}>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary-500">Infrastructure</span> Projects</h2>
            <p className={`${isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'} max-w-2xl mx-auto`}>
              Explore my cloud infrastructure and DevOps solutions that deliver scalability, reliability, and security.
            </p>
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
                className={`group overflow-hidden rounded-xl ${isDark ? 'bg-dark-bg-primary border border-dark-border hover:border-primary-500' : 'bg-light-bg-primary border border-light-border hover:border-primary-500'} shadow-card hover:shadow-glow transition-all duration-500`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        aria-label="View live site"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`${isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'} mb-4 line-clamp-2`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDark 
                            ? 'bg-dark-bg-tertiary text-primary-300 border border-dark-border' 
                            : 'bg-light-bg-tertiary text-primary-600 border border-light-border'
                        }`}
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
            <Link 
              to="/projects" 
              className={`px-6 py-3 rounded-md border ${
                isDark 
                  ? 'border-dark-border hover:border-primary-500 text-dark-text-primary' 
                  : 'border-light-border hover:border-primary-500 text-light-text-primary'
              } hover:text-primary-500 transition-all duration-300`}
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with modern skill cards */}
      <section className={`py-20 ${isDark ? 'bg-dark-bg-primary' : 'bg-light-bg-primary'} relative`}>
        <div className="absolute inset-0 bg-dot-pattern bg-[size:20px_20px] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud & <span className="text-primary-500">DevOps</span> Skills</h2>
            <p className={`${isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'} max-w-2xl mx-auto`}>
              Expertise in cloud platforms, container orchestration, infrastructure as code, and CI/CD automation.
            </p>
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
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 rounded-xl ${
                  isDark 
                    ? 'bg-dark-bg-secondary border border-dark-border' 
                    : 'bg-light-bg-secondary border border-light-border'
                  } flex items-center justify-center mb-4 shadow-soft hover:shadow-glow hover:border-primary-500 transform transition-all duration-300`}>
                  <div className="text-primary-500">
                    {skill.icon}
                  </div>
                </div>
                <h3 className={`font-medium ${isDark ? 'text-dark-text-primary' : 'text-light-text-primary'}`}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section with modern design */}
      <section className={`py-20 ${isDark ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500/30"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-5"></div>
          {/* Subtle glow in background */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
            style={{ 
              background: 'radial-gradient(circle, var(--tw-gradient-stops))',
              '--tw-gradient-from': isDark ? '#6366f1' : '#818cf8',
              '--tw-gradient-to': 'transparent',
              '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build <span className="text-primary-500">Cloud</span> Infrastructure</h2>
            <p className={`${isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'} text-lg mb-10`}>
              Looking to modernize your infrastructure or implement DevOps practices? I'd love to collaborate on creating scalable, secure, and efficient cloud solutions.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-soft hover:shadow-glow transition-all duration-300 text-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
