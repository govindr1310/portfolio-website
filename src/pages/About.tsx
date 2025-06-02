import { motion } from 'framer-motion';
import { FaServer, FaCloud, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-dark-950 pt-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="h-full w-full bg-cyber-grid bg-[size:24px_24px]"></div>
      </div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About <span className="text-primary-500">Me</span></h1>
          
          <div className="bg-dark-800 rounded-xl p-8 shadow-xl border border-dark-700 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary-500/20 to-transparent"></div>
            
            <div className="space-y-6">
              <p className="text-dark-200 leading-relaxed">
                With over 8 years of experience in cloud infrastructure and DevOps, I specialize in designing and implementing scalable, resilient, and secure cloud solutions that enable businesses to innovate with confidence.
              </p>
              
              <p className="text-dark-200 leading-relaxed">
                My journey in technology began with traditional systems administration, but I quickly recognized the transformative potential of cloud computing and infrastructure automation. Today, I architect multi-cloud environments that leverage the best of AWS, Azure, and Google Cloud, while ensuring consistent governance, security, and operational excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Cards with core competencies */}
                <motion.div 
                  className="bg-dark-900 p-5 rounded-lg border border-dark-700 hover:border-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-primary-900/50 rounded-lg">
                      <FaCloud className="text-primary-400 text-xl" />
                    </div>
                    <h3 className="font-bold text-lg">Cloud Architecture</h3>
                  </div>
                  <p className="text-dark-300">Designing resilient, scalable infrastructure across AWS, Azure, and GCP with a focus on high availability and fault tolerance.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-900 p-5 rounded-lg border border-dark-700 hover:border-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-secondary-900/50 rounded-lg">
                      <FaServer className="text-secondary-400 text-xl" />
                    </div>
                    <h3 className="font-bold text-lg">Container Orchestration</h3>
                  </div>
                  <p className="text-dark-300">Managing complex Kubernetes environments with expertise in deployment strategies, service mesh, and observability.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-900 p-5 rounded-lg border border-dark-700 hover:border-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-primary-900/50 rounded-lg">
                      <FaCode className="text-primary-400 text-xl" />
                    </div>
                    <h3 className="font-bold text-lg">Infrastructure as Code</h3>
                  </div>
                  <p className="text-dark-300">Creating maintainable, version-controlled infrastructure using Terraform, CloudFormation, and Pulumi with modular design patterns.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-900 p-5 rounded-lg border border-dark-700 hover:border-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-secondary-900/50 rounded-lg">
                      <FaLaptopCode className="text-secondary-400 text-xl" />
                    </div>
                    <h3 className="font-bold text-lg">DevOps & CI/CD</h3>
                  </div>
                  <p className="text-dark-300">Implementing automated pipelines with security-first practices, incorporating testing, vulnerability scanning, and compliance validation.</p>
                </motion.div>
              </div>
              
              <p className="text-dark-200 leading-relaxed">
                I believe that effective cloud solutions are not just about technology, but about enabling teams to innovate faster while maintaining reliability and security. My approach combines technical expertise with a deep understanding of business needs to deliver infrastructure that serves as a competitive advantage.
              </p>
              
              <p className="text-dark-200 leading-relaxed">
                When I'm not architecting cloud solutions, you can find me contributing to open-source projects, speaking at technology conferences, and continuously exploring emerging technologies that push the boundaries of what's possible in the cloud.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

