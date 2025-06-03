import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-16 items-center justify-center rounded-full bg-gradient-to-b transition-colors duration-300 ${
        isDark 
          ? 'from-dark.bg.tertiary to-dark.bg.secondary border-dark.border' 
          : 'from-light.bg.tertiary to-light.bg.secondary border-light.border'
      } p-1 shadow-inner ${className}`}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
      
      {/* Track */}
      <span 
        className={`absolute inset-0 rounded-full border ${
          isDark ? 'border-dark.border' : 'border-light.border'
        } transition-colors duration-300`}
      />
      
      {/* Thumb/Handle with Icon */}
      <motion.span
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-sm transition-colors duration-300 ${
          isDark 
            ? 'bg-primary-600 text-white' 
            : 'bg-primary-50 text-primary-600'
        }`}
        initial={false}
        animate={{ x: isDark ? 26 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
      </motion.span>
      
      {/* Sun icon (visible in light mode) */}
      <span 
        className={`absolute left-2 transition-opacity duration-200 ${
          isDark ? 'opacity-0' : 'opacity-60'
        }`}
        aria-hidden="true"
      >
        <FiSun size={14} className="text-primary-800" />
      </span>
      
      {/* Moon icon (visible in dark mode) */}
      <span 
        className={`absolute right-2 transition-opacity duration-200 ${
          isDark ? 'opacity-60' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <FiMoon size={14} className="text-primary-200" />
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
