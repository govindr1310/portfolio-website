#!/bin/bash

echo "Setting up modern portfolio dependencies..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing all dependencies..."
  npm install
else
  echo "Dependencies already installed. Checking for any missing packages..."
  
  # Check for and install specific packages if they're missing
  if [ ! -d "node_modules/react-icons" ]; then
    echo "Installing react-icons..."
    npm install react-icons
  fi
  
  if [ ! -d "node_modules/framer-motion" ]; then
    echo "Installing framer-motion..."
    npm install framer-motion
  fi
  
  if [ ! -d "node_modules/tailwindcss-animate" ]; then
    echo "Installing tailwindcss-animate..."
    npm install -D tailwindcss-animate
  fi
  
  if [ ! -d "node_modules/tailwind-scrollbar" ]; then
    echo "Installing tailwind-scrollbar..."
    npm install -D tailwind-scrollbar
  fi
  
  if [ ! -d "node_modules/@tailwindcss/forms" ]; then
    echo "Installing @tailwindcss/forms..."
    npm install -D @tailwindcss/forms
  fi
  
  if [ ! -d "node_modules/@tailwindcss/typography" ]; then
    echo "Installing @tailwindcss/typography..."
    npm install -D @tailwindcss/typography
  fi
fi

echo "Setup complete! Now you can run the development server with:"
echo "npm run dev"

echo "Or build for production with:"
echo "npm run build"
