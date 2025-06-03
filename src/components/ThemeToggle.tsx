import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
      className={`flex items-center justify-center rounded-full w-9 h-9 transition-colors ${
        isDark 
          ? 'bg-dark-bg-tertiary hover:bg-dark-bg-secondary' 
          : 'bg-light-bg-tertiary hover:bg-light-bg-secondary'
      } ${className}`}
    >
      <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
      
      <motion.div
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ 
          scale: 1,
          rotate: isDark ? 0 : 180
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 200, 
          damping: 10
        }}
        className="text-xl"
      >
        {isDark ? (
          <HiMoon className="text-primary-400" /> 
        ) : (
          <HiSun className="text-primary-600" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
