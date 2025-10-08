
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ImageGallery from './ImageGallery';

const HeroSection = () => {
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
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="text-white font-semibold tracking-wider">Weekly News - Stanburg</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Uniford transforms{' '}
                <span className="inline-block min-w-[280px] text-unifor-purple relative">
                  <span className="animate-fade-in-out absolute left-0" key="schools" style={{
                    animation: 'fadeInOut 12s infinite',
                    animationDelay: '0s'
                  }}>
                    Schools
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 12s infinite',
                    animationDelay: '2s'
                  }}>
                    NGOs
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 12s infinite',
                    animationDelay: '4s'
                  }}>
                    Frontliners
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 12s infinite',
                    animationDelay: '6s'
                  }}>
                    Organizations
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                through{' '}
                <span className="inline-block min-w-[220px] text-unifor-blue font-semibold relative">
                  <span className="animate-fade-in-out absolute left-0" style={{
                    animation: 'fadeInOut 15s infinite',
                    animationDelay: '0s'
                  }}>
                    Grants
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 15s infinite',
                    animationDelay: '2.5s'
                  }}>
                    Accreditation
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 15s infinite',
                    animationDelay: '5s'
                  }}>
                    Financial Aid
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 15s infinite',
                    animationDelay: '7.5s'
                  }}>
                    Recognition
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 15s infinite',
                    animationDelay: '10s'
                  }}>
                    Licensing
                  </span>
                </span>
                {' '}— powered by comprehensive{' '}
                <span className="inline-block min-w-[200px] text-yellow-300 font-semibold relative">
                  <span className="animate-fade-in-out absolute left-0" style={{
                    animation: 'fadeInOut 16s infinite',
                    animationDelay: '0s'
                  }}>
                    Assessments
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 16s infinite',
                    animationDelay: '4s'
                  }}>
                    Audits
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 16s infinite',
                    animationDelay: '8s'
                  }}>
                    Impact Reports
                  </span>
                  <span className="animate-fade-in-out absolute left-0 opacity-0" style={{
                    animation: 'fadeInOut 16s infinite',
                    animationDelay: '12s'
                  }}>
                    Evaluations
                  </span>
                </span>
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm md:text-base text-gray-200">
                  <span className="font-bold text-unifor-purple">Cross-Border Collaborations</span> in UAE, Singapore, UK, and Canada — enabling joint programs, research alliances, and international accreditation exchanges.
                </p>
              </div>
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
