import { motion } from 'framer-motion';
import { 
  FaAws, 
  FaDocker, 
  FaNetworkWired, 
  FaServer, 
  FaShieldAlt, 
  FaLock, 
  FaGitAlt,
  FaCloud,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAmazonwebservices, 
  SiGooglecloud, 
  SiJenkins, 
  SiGithubactions, 
  SiArgo, 
  SiPrometheus, 
  SiGrafana, 
  SiElasticsearch,
  SiAnsible,
  SiVault,
  SiIstio,
  SiNewrelic,
  SiPulumi
} from 'react-icons/si';

const Skills = () => {
  // Skills data organized by category
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      description: 'Expertise in designing and implementing solutions across major cloud providers',
      skills: [
        { name: 'AWS', icon: <SiAmazonwebservices className="text-yellow-400" /> },
        { name: 'Azure', icon: <FaMicrosoft className="text-blue-500" /> },
        { name: 'GCP', icon: <SiGooglecloud className="text-primary-500" /> },
        { name: 'Multi-Cloud', icon: <FaCloud className="text-primary-400" /> }
      ]
    },
    {
      title: 'Infrastructure as Code',
      description: 'Building scalable, maintainable infrastructure through code',
      skills: [
        { name: 'Terraform', icon: <SiTerraform className="text-secondary-400" /> },
        { name: 'Pulumi', icon: <SiPulumi className="text-primary-300" /> },
        { name: 'Ansible', icon: <SiAnsible className="text-red-500" /> },
        { name: 'CloudFormation', icon: <FaAws className="text-yellow-500" /> }
      ]
    },
    {
      title: 'Container Technologies',
      description: 'Orchestrating and managing containerized workloads',
      skills: [
        { name: 'Kubernetes', icon: <SiKubernetes className="text-primary-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-primary-600" /> },
        { name: 'Service Mesh', icon: <SiIstio className="text-secondary-500" /> },
        { name: 'Networking', icon: <FaNetworkWired className="text-white" /> }
      ]
    },
    {
      title: 'CI/CD & Automation',
      description: 'Building efficient, secure delivery pipelines',
      skills: [
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-white" /> },
        { name: 'Jenkins', icon: <SiJenkins className="text-red-400" /> },
        { name: 'ArgoCD', icon: <SiArgo className="text-primary-300" /> },
        { name: 'GitOps', icon: <FaGitAlt className="text-orange-500" /> }
      ]
    },
    {
      title: 'Monitoring & Observability',
      description: 'Ensuring visibility and reliability of cloud infrastructure',
      skills: [
        { name: 'Prometheus', icon: <SiPrometheus className="text-orange-600" /> },
        { name: 'Grafana', icon: <SiGrafana className="text-orange-400" /> },
        { name: 'ELK Stack', icon: <SiElasticsearch className="text-teal-400" /> },
        { name: 'New Relic', icon: <SiNewrelic className="text-green-500" /> }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Implementing security best practices at every layer',
      skills: [
        { name: 'Infrastructure Security', icon: <FaShieldAlt className="text-secondary-400" /> },
        { name: 'HashiCorp Vault', icon: <SiVault className="text-yellow-300" /> },
        { name: 'Compliance Automation', icon: <FaLock className="text-primary-400" /> },
        { name: 'Identity Management', icon: <FaServer className="text-gray-400" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="h-full w-full bg-cyber-grid bg-[size:30px_30px]"></div>
      </div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Technical <span className="text-primary-500">Skills</span></h1>
          <p className="text-dark-300 text-center mb-12 max-w-3xl mx-auto">
            My expertise spans across cloud platforms, infrastructure automation, container orchestration, and DevOps practices. I specialize in building scalable, secure, and resilient cloud infrastructure.
          </p>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-primary-500">{category.title}</h2>
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-primary-500/50 to-transparent rounded hidden md:block"></div>
                  <p className="text-dark-300 md:max-w-md">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-700 transition-colors duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="text-4xl mb-4 transition-all duration-300 group-hover:text-primary-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

