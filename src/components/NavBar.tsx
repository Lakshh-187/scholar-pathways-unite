import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Orientation', path: '/id-card' },
    { name: 'ID', path: '/id-card-services' },
    { name: 'Docs', path: '/official-documents' },
    { name: 'Pitchburg', path: '/uni-pitch' },
    
    { name: 'UIRAD', path: '/uirad' },
    { name: 'UTHA', path: '/talent-hunt-alliance' },
    { name: 'iBacked', path: '/backed-by-uniford' },
  ];
  
  return (
    <nav className="sticky top-12 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-unifor-purple to-unifor-dark-purple h-8 w-8 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold">Uniford Foundation</span>
              <span className="text-xs text-unifor-purple font-medium -mt-1">Non-profit Organization</span>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-unifor-purple' 
                    : 'text-gray-600 hover:text-unifor-dark-purple'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href="https://forms.gle/VJJCWM2wzcZjT8YK8" target="_blank" rel="noopener noreferrer">
            <Button className="primary-btn">Apply Now</Button>
          </a>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md animate-fade-in border-t border-gray-100">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-medium p-2 ${
                  isActive(link.path) 
                    ? 'text-unifor-purple bg-unifor-light-purple rounded-md' 
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://forms.gle/VJJCWM2wzcZjT8YK8" target="_blank" rel="noopener noreferrer">
              <Button className="primary-btn w-full mt-2">Apply Now</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
