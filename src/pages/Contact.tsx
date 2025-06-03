import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    alert('This is a placeholder form. In a real application, your message would be sent.');
    console.log('Form data:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h1>
          <p className="text-dark-300 text-center mb-12">
            This is a placeholder Contact page. A contact form and other ways to reach me will be displayed here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dark-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
              <div className="space-y-6 flex flex-col items-center text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-primary-500/20 p-3 rounded-full">
                    <FaEnvelope className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-dark-300">email@example.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-primary-500/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-dark-300">Chennai, India</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-dark-700 w-full text-center">
                  <h3 className="font-medium text-lg mb-4 text-center">Connect With Me</h3>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className="bg-dark-800 hover:bg-dark-700 p-3 rounded-full transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-dark-800 hover:bg-dark-700 p-3 rounded-full transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-dark-800 hover:bg-dark-700 p-3 rounded-full transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

