
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'UNCIF', path: 'https://uncif.uniford.org/', external: true },
    { name: 'Docs', path: '/official-documents' },
    { name: 'Pitchburg', path: '/uni-pitch' },
    { name: 'UIRAD', path: '/uirad' },
    { name: 'UICSS', path: '/uicss' },
    { name: 'UTHA', path: '/talent-hunt-alliance' },
    { name: 'Her', path: '/her-hava', special: 'pink' },
  ];
  
  return (
    <nav className="sticky top-12 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl flex items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img 
              src="/sdg-logo.png" 
              alt="SDG" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Uniford
            </span>
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
               link.external ? (
                <a 
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors duration-200 text-gray-600 hover:text-unifor-dark-purple"
                >
                  {link.name}
                </a>
              ) : link.special === 'pink' ? (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg border-0 transition-all duration-200 hover:shadow-xl transform hover:scale-105"
                >
                  {link.name}
                </Link>
              ) : (
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
              )
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/certificate-awards">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-900 font-semibold shadow-lg border-0 px-6 py-2 transition-all duration-200 hover:shadow-xl">
                <Trophy className="mr-2 h-4 w-4" />
                Awards
              </Button>
            </Link>
            <Link to="/apply">
              <Button className="primary-btn">Apply</Button>
            </Link>
          </div>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md animate-fade-in border-t border-gray-100">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.external ? (
                <a 
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium p-2 text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : link.special === 'pink' ? (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg border-0 transition-all duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
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
              )
            ))}
            <Link to="/certificate-awards" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-900 font-semibold shadow-lg border-0 w-full mt-2">
                <Trophy className="mr-2 h-4 w-4" />
                Awards
              </Button>
            </Link>
            <Link to="/apply">
              <Button className="primary-btn w-full mt-2">Apply</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
