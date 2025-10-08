
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ImageGallery from './ImageGallery';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  const entities = ['Schools', 'NGOs', 'Frontliners', 'Organizations'];
  const services = ['Grants', 'Accreditation', 'Financial Aid', 'Recognition', 'Licensing'];
  const tools = ['Assessments', 'Audits', 'Impact Reports', 'Evaluations'];

  useEffect(() => {
    const entityInterval = setInterval(() => {
      setCurrentEntityIndex((prev) => (prev + 1) % entities.length);
    }, 2000);
    return () => clearInterval(entityInterval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(serviceInterval);
  }, []);

  useEffect(() => {
    const toolInterval = setInterval(() => {
      setCurrentToolIndex((prev) => (prev + 1) % tools.length);
    }, 2200);
    return () => clearInterval(toolInterval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-unifor-dark to-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <img 
          src="https://id.uniford.org/uniford-main/temp.jpg" 
          alt="Background Scholar Pattern"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-2 animate-pulse">
              <span className="text-white font-semibold tracking-wider">Non-profit Organization</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Uniford Foundation
            </h1>
            
            <div className="space-y-3 text-lg md:text-xl text-gray-200 leading-relaxed">
              <p>
                Uniford transforms{' '}
                <span className="inline-block min-w-[140px] text-primary font-semibold animate-fade-in">
                  {entities[currentEntityIndex]}
                </span>
              </p>
              <p>
                through{' '}
                <span className="inline-block min-w-[160px] text-accent font-semibold animate-fade-in">
                  {services[currentServiceIndex]}
                </span>
              </p>
              <p className="text-gray-400 text-base">
                powered by comprehensive{' '}
                <span className="inline-block min-w-[140px] text-primary/80 font-medium animate-fade-in">
                  {tools[currentToolIndex]}
                </span>
              </p>
            </div>

            {/* Weekly News Section */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 mt-6">
              <p className="text-primary font-semibold text-sm mb-2">Weekly News - Stanburg</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Uniford announces <span className="text-white font-medium">Cross-Border Collaborations</span> in UAE, Singapore, UK, and Canada, enabling joint programs, research alliances, and international accreditation exchanges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/id-card">
                <Button className="primary-btn" size="lg">
                  Apply for ID Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button className="secondary-btn" size="lg">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <ImageGallery />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-unifor-blue/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
