
import { useState } from 'react';
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
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-unifor-purple"></div>
          <span className="text-xl font-bold text-unifor-dark">Unifor Scholar</span>
        </Link>
        
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
          <Button className="primary-btn">Apply Now</Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md animate-fade-in">
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
            <Button className="primary-btn w-full mt-2">Apply Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
