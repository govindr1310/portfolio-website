import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-950">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/90 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold font-display">
              <span className="text-primary-500">G</span>ovind <span className="text-primary-500">R</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="text-white hover:text-primary-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary">
                Let's Talk
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-800">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="text-white hover:text-primary-400 py-2 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4 font-display">
                <span className="text-primary-500">G</span>ovind <span className="text-primary-500">R</span>
              </h2>
              <p className="text-dark-300 mb-4">
                A Cloud Platform Engineer creating secure, scalable infrastructure solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="text-dark-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4 text-center">Connect</h3>
              <div className="flex justify-center mb-4 p-0">
                <a 
                  href="https://github.com/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-white transition-colors duration-300 mr-4"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-white transition-colors duration-300 mr-4"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <p className="text-dark-300 text-center">email@example.com</p>
            </div>
          </div>

          <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400">
            <p>&copy; {new Date().getFullYear()} Govind R. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

