import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const CodeAnimation: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Code snippets to animate
  const codeLines = [
    '# Cloud Infrastructure as Code',
    'resource "aws_eks_cluster" "main" {',
    '  name     = "production-cluster"',
    '  role_arn = aws_iam_role.eks_cluster.arn',
    '  version  = "1.24"',
    '',
    '  vpc_config {',
    '    subnet_ids = module.vpc.private_subnets',
    '    endpoint_private_access = true',
    '    endpoint_public_access  = true',
    '  }',
    '',
    '  # Enable logging',
    '  enabled_cluster_log_types = [',
    '    "api", "audit", "authenticator"',
    '  ]',
    '}'
  ];

  // Animate through code lines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev < codeLines.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Terminal window with code animation */}
      <motion.div 
        className={`rounded-lg shadow-xl border overflow-hidden ${
          isDark 
            ? 'bg-black border-dark-border' 
            : 'bg-gray-900 border-light-border'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal header */}
        <div className={`px-4 py-2 flex items-center ${
          isDark ? 'bg-dark-bg-tertiary' : 'bg-gray-800'
        }`}>
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-gray-400 font-mono">terraform_config.tf</div>
        </div>
        
        {/* Terminal body with animated code */}
        <div className="p-4 font-mono text-sm overflow-hidden h-64">
          {codeLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="flex">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`whitespace-pre ${
                  line.includes('resource') || line.includes('#')
                    ? 'text-primary-400'
                    : line.includes('{') || line.includes('}')
                    ? 'text-gray-400'
                    : line.includes('=')
                    ? 'text-green-400'
                    : 'text-gray-300'
                }`}
              >
                {line || ' '}
                {index === currentLine && showCursor && <span className="text-gray-400">|</span>}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-500/5 rounded-full blur-xl"></div>
      
      {/* "Lines" that connect to other elements */}
      <svg className="absolute -bottom-10 -left-10 w-20 h-20 text-primary-500/30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50H100M50 0V100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

export default CodeAnimation;
