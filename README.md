# Modern Portfolio - Monochrome Theme

A sleek, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a minimalist monochrome design.

## Features

- **Modern UI/UX**: Clean monochrome design with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Performant**: Built with React and Vite for fast loading
- **Animated Elements**: Powered by Framer Motion
- **Dark Mode**: Elegant dark theme with monochrome accents
- **Component-Based**: Modular architecture for easy maintenance

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Icons**: React Icons

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
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Layout components
│   ├── pages/       # Page components
│   ├── App.tsx      # Main app component
│   └── main.tsx     # Entry point
├── .gitignore       # Git ignore file
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## Customization

This portfolio is designed to be easily customizable:

- Update the personal information in each page component
- Modify the color scheme in `tailwind.config.js`
- Add your own projects to the `Projects.tsx` file
- Customize skills in the `Skills.tsx` file

## Deployment

The site can be deployed to various platforms:

- **Vercel/Netlify**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Deploy using GitHub Actions
- **Traditional Hosting**: Upload the `dist` folder after building

## License

MIT License
