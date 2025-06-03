#!/bin/bash

# Install Tailwind plugins and dependencies
echo "Installing required Tailwind plugins..."
npm install -D tailwindcss-animate
npm install -D tailwind-scrollbar
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography

# Install React Icons if not already installed
echo "Installing React Icons..."
npm install -S react-icons

# Create necessary folders
echo "Creating folder structure..."
mkdir -p src/contexts
mkdir -p src/components
mkdir -p src/styles

# Create a placeholder for the patterns folder
mkdir -p public/patterns

# Download the Inter font
echo "Setting up Inter font..."
mkdir -p public/fonts
curl -o public/fonts/inter.css "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"

# Download JetBrains Mono
echo "Setting up JetBrains Mono font..."
curl -o public/fonts/jetbrains-mono.css "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"

# Create a fonts.css file for local usage
cat > public/fonts/fonts.css << EOL
/* Inter font */
@import './inter.css';

/* JetBrains Mono */
@import './jetbrains-mono.css';

/* Fallback system fonts */
@font-face {
  font-family: 'Geist';
  src: local('Inter'), local('SF Pro Display'), local('Segoe UI'), local('Roboto'), local('Helvetica Neue');
  font-weight: 100 900;
  font-style: normal;
}
EOL

echo "Dependencies installation complete!"
chmod +x install-deps.sh

