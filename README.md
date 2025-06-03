# Modern Portfolio - Premium Design Theme

A sleek, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a modern, premium design inspired by top-tier products like Linear, Vercel, Notion, and Framer.

## Features

- **Modern Premium UI**: Clean, minimalist design with elegant spacing and visual hierarchy
- **Dark/Light Theme**: Toggleable themes with smooth transitions
- **Fully Responsive**: Optimized for all device sizes
- **Clean Typography**: Using Inter, Geist, and JetBrains Mono fonts
- **Subtle Animations**: Tasteful hover, scroll, and transition effects
- **Performant**: Built with React and Vite for fast loading
- **Accessibility**: WCAG-compliant color contrasts and keyboard navigation
- **Component-Based**: Modular architecture for easy maintenance

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Icons**: React Icons
- **Accessibility**: Fully accessible components

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/modern-portfolio-new.git
   cd modern-portfolio-new
   ```

2. Install dependencies
   ```bash
   npm install
   ```
   
   This will automatically run the setup script to install all required dependencies.

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
modern-portfolio-new/
├── public/          # Static assets
│   └── patterns/    # Background patterns and textures
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable UI components
│   ├── contexts/    # Context providers (ThemeContext, etc.)
│   ├── layouts/     # Layout components
│   ├── pages/       # Page components
│   ├── styles/      # CSS styles and theme transitions
│   ├── App.tsx      # Main app component
│   └── main.tsx     # Entry point
├── .gitignore       # Git ignore file
├── .npmrc           # NPM configuration
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── setup-dependencies.sh # Setup script for dependencies
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## Theme System

The portfolio features a modern dark/light theme system:

- **Theme Toggle**: Click the toggle in the navigation to switch themes
- **System Preference**: Automatically detects and applies the user's system theme preference
- **Persistence**: Remembers the user's theme preference across visits
- **Smooth Transitions**: All theme changes have smooth, elegant transitions

## Customization

This portfolio is designed to be easily customizable:

- Update the personal information in each page component
- Modify the color scheme in `tailwind.config.js`
- Add your own projects to the `Projects.tsx` file
- Customize skills in the `Skills.tsx` file
- Adjust the theme colors in the `tailwind.config.js` file

## Deployment

The site can be deployed to various platforms:

- **Vercel/Netlify**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Deploy using GitHub Actions
- **Traditional Hosting**: Upload the `dist` folder after building

## License

MIT License
