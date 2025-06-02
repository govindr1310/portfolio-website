import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Import layout
import MainLayout from './layouts/MainLayout';

// Import global styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home page route */}
          <Route index element={<Home />} />
          
          {/* Main routes */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          
          {/* 404 Not Found route */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-dark-950">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-xl text-dark-300 mb-8">
                  The page you are looking for doesn't exist or has been moved.
                </p>
                <a href="/" className="btn-primary">
                  Back to Home
                </a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
