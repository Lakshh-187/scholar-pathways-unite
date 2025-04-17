
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-unifor-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-unifor-purple"></div>
              <span className="text-xl font-bold">Unifor Scholar</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering scholars through resources, platforms, and opportunities.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/unifordfoundation" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unifor-purple transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  All Programs
                </Link>
              </li>
              <li>
                <Link to="/uni-pitch" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Uni-Pitch
                </Link>
              </li>
              <li>
                <Link to="/uirad" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  UIRAD
                </Link>
              </li>
              <li>
                <Link to="/backed-by-uniford" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Backed By Uniford
                </Link>
              </li>
              <li>
                <Link to="/social-internship" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Social Internship
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/what-matters" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  What Matters
                </Link>
              </li>
              <li>
                <Link to="/official-documents" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Official Documents
                </Link>
              </li>
              <li>
                <Link to="/published" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Published Resources
                </Link>
              </li>
              <li>
                <Link to="/premium-store" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Premium Store
                </Link>
              </li>
              <li>
                <Link to="/legal-policy" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Legal Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Apply</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/id-card" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  ID Card Application
                </Link>
              </li>
              <li>
                <Link to="/talent-hunt-alliance" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Talent Hunt Alliance
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-unifor-purple shrink-0" />
                <a href="tel:+917347099610" className="text-gray-300 hover:text-white transition-colors">
                  +917347099610
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-unifor-purple shrink-0" />
                <a href="mailto:info@uniford.org" className="text-gray-300 hover:text-white transition-colors">
                  info@uniford.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unifor Scholar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
