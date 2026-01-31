import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Award, Users, Sparkles, GraduationCap, Heart, Target, Leaf, Building2, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const UNCIFHeroNew = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMovementIndex, setCurrentMovementIndex] = useState(0);

  const heroImages = [
    { src: '/hero/uncif-flags.png', alt: 'UNCIF Global Collaboration Summit' },
    { src: '/hero/uncif-team.png', alt: 'UNCIF Leadership Forum' },
    { src: '/hero/uncif-student.png', alt: 'Future Leaders in Action' },
    { src: '/hero/uncif-demoday.png', alt: 'Innovation Showcase Event' },
    { src: '/hero/uncif-biss.png', alt: 'BISS Global Initiative' },
    { src: '/hero/uncif-expo.png', alt: 'Education Excellence Expo' },
  ];

  const movements = [
    { icon: Award, label: 'Great Place to Learn', desc: 'Recognizing excellence in education', color: 'bg-amber-500' },
    { icon: Globe, label: 'UNCIF Greats Accreditation', desc: 'Global standards for institutions', color: 'bg-purple-600' },
    { icon: Target, label: 'International Standards & Sustainability', desc: 'SDG-aligned frameworks', color: 'bg-teal-600' },
    { icon: Sparkles, label: 'AI For Education', desc: 'Technology-driven learning', color: 'bg-blue-600' },
    { icon: Heart, label: 'Her HaVa', desc: 'Empowering future women leaders', color: 'bg-pink-500' },
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const movementInterval = setInterval(() => {
      setCurrentMovementIndex((prev) => (prev + 1) % movements.length);
    }, 3000);
    return () => clearInterval(movementInterval);
  }, []);

  const currentMovement = movements[currentMovementIndex];
  const CurrentIcon = currentMovement.icon;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden relative pt-16">
      {/* SDG-themed Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-[600px] w-[600px] rounded-full bg-teal-500 blur-[150px] -top-20 -left-40 animate-pulse"></div>
        <div className="absolute h-96 w-96 rounded-full bg-green-500 blur-[120px] bottom-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute h-80 w-80 rounded-full bg-amber-400 blur-[100px] top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Main Hero Grid - Bento Style */}
        <div className="grid lg:grid-cols-12 gap-4 mb-8">
          
          {/* Left - Main Content Block */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 flex flex-col justify-between min-h-[500px]">
            {/* UNCIF Badge */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/uncif-logo.png" alt="UNCIF" className="h-10 w-10 object-contain bg-white rounded-full p-1" />
              <div>
                <span className="text-xl font-bold text-white">UNCIF</span>
                <span className="text-sm text-teal-100 block">United Nations Council for Institutions & Frontliners</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Where Global Leaders Unite to Build
                <span className="block text-amber-300 mt-2">Great Institutions</span>
              </h1>
              
              <p className="text-lg text-teal-50 leading-relaxed">
                A global convening platform where changemakers, educators, and organizations collaborate to create institutions with measurable social return and lasting impact.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/apply">
                <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-6 text-lg rounded-xl shadow-lg" size="lg">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Center - Main Image */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[500px]">
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-all duration-700 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Stacked Blocks */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Mission Block */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  OUR MISSION
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  1 Million Greats
                </h2>
                <p className="text-amber-100 text-sm mt-2">
                  for impacting 1 Billion lives
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-white/80 text-sm">
                <Target className="h-4 w-4" />
                <span>SDG-Aligned Impact</span>
              </div>
            </div>

            {/* Vision Block */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  OUR VISION
                </span>
                <h2 className="text-xl font-bold text-white leading-tight">
                  Together We Build
                </h2>
                <p className="text-purple-100 text-2xl font-bold mt-2">
                  "Great Places to Learn"
                </p>
              </div>
              <Link to="/greats" className="mt-4 flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                <span>Explore Greats</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Second Row - Movement & Partners */}
        <div className="grid lg:grid-cols-12 gap-4 mb-8">
          {/* Movements Carousel Block */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
              <h3 className="text-lg font-bold text-white">UNCIF Founding Movements</h3>
            </div>
            
            {/* Active Movement Display */}
            <div className={`${currentMovement.color} rounded-2xl p-6 mb-4 transition-all duration-500`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CurrentIcon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{currentMovement.label}</h4>
                  <p className="text-white/80 text-sm mt-1">{currentMovement.desc}</p>
                </div>
              </div>
            </div>

            {/* Movement Dots */}
            <div className="flex justify-center gap-2">
              {movements.map((movement, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentMovementIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentMovementIndex ? `${movement.color} scale-125` : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Global Partners Block */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-white/10">
            <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
              GLOBAL NETWORK
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              10,000+ Changemakers Worldwide
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Collaborating with world-leading organizations to transform education and build sustainable institutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {['UNICEF', 'Harvard', 'Khan Academy', 'UNESCO'].map((partner, idx) => (
                <span key={idx} className="bg-white/10 text-white/80 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Image Grid Block */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-2">
            <img src="/hero/uncif-team.png" alt="UNCIF Team" className="w-full h-28 object-cover rounded-2xl" />
            <img src="/hero/uncif-expo.png" alt="UNCIF Expo" className="w-full h-28 object-cover rounded-2xl" />
            <img src="/hero/uncif-biss.png" alt="BISS Initiative" className="w-full h-28 object-cover rounded-2xl" />
            <img src="/hero/uncif-demoday.png" alt="Demo Day" className="w-full h-28 object-cover rounded-2xl" />
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '1M+', label: 'Target Great Institutions', icon: School, color: 'from-teal-500 to-green-500' },
            { value: '1B+', label: 'Lives to Impact', icon: Users, color: 'from-amber-500 to-orange-500' },
            { value: '50+', label: 'Countries Reached', icon: Globe, color: 'from-blue-500 to-cyan-500' },
            { value: '17', label: 'SDGs Addressed', icon: Leaf, color: 'from-green-500 to-emerald-500' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UNCIFHeroNew;
