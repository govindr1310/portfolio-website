import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // We're using useTheme to access the theme context but not using the theme value directly
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme: _theme } = useTheme();

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/90 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold font-display">
              <span className="text-primary-500">G</span>ovind <span className="text-primary-500">R</span>
            </Link>

            {/* Desktop Navigation with Theme Toggle */}
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="px-3 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle className="ml-2" />
              
              <Link to="/contact" className="ml-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
                Let's Talk
              </Link>
            </nav>

            {/* Mobile Navigation Controls */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md text-center"
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
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4 font-display">
                <span className="text-primary-500">G</span>ovind <span className="text-primary-500">R</span>
              </h2>
              <p className="mb-4">
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
                    className="transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://github.com/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/govindr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <p>email@example.com</p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Govind R. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
