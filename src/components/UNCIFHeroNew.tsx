import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Award, Users, Sparkles, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const UNCIFHeroNew = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMovementIndex, setCurrentMovementIndex] = useState(0);

  const heroImages = [
    { src: '/hero/uncif-flags.png', alt: 'UNCIF Global Flags' },
    { src: '/hero/uncif-team.png', alt: 'UNCIF Team' },
    { src: '/hero/uncif-student.png', alt: 'UNCIF Student' },
    { src: '/hero/uncif-demoday.png', alt: 'UNCIF Demo Day' },
    { src: '/hero/uncif-biss.png', alt: 'BISS Initiative' },
    { src: '/hero/uncif-expo.png', alt: 'UNCIF Expo' },
  ];

  const movements = [
    { icon: Award, label: 'Great Place to Learn', color: 'text-yellow-400' },
    { icon: Sparkles, label: 'UNCIF Greats Accreditation', color: 'text-purple-400' },
    { icon: Globe, label: 'Bringing International Standard & Sustainability', color: 'text-blue-400' },
    { icon: GraduationCap, label: 'AI For Education', color: 'text-green-400' },
    { icon: Heart, label: 'Her HaVa', color: 'text-pink-400' },
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
    }, 2500);
    return () => clearInterval(movementInterval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden relative pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute h-96 w-96 rounded-full bg-purple-600 blur-[120px] top-10 -left-20 animate-pulse"></div>
        <div className="absolute h-80 w-80 rounded-full bg-blue-600 blur-[100px] bottom-20 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute h-64 w-64 rounded-full bg-yellow-500 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Top Section - Main Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* UNCIF Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
              <img src="/uncif-logo.png" alt="UNCIF" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">UNCIF</span>
              <span className="text-sm text-gray-300">Uniford National Council</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Where Global</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                Leaders, Changemakers
              </span>
              <br />
              <span className="text-white">& Organizations</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Come together to build <span className="text-yellow-400 font-semibold">Great Places</span> — Institutions that deliver better{' '}
              <span className="text-purple-400 font-semibold">Social Return & Impact</span>
            </p>

            {/* 1M1B Statement */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-yellow-500 text-black font-bold px-4 py-1.5 rounded-full text-sm">1M1B Mission</span>
                <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
              </div>
              <p className="text-3xl font-bold">
                <span className="text-yellow-400">1 Million</span>
                <span className="text-white"> Greats </span>
                <span className="text-gray-400">for impacting </span>
                <span className="text-yellow-400">1 Billion</span>
              </p>
            </div>

            {/* Together We Build */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-400 text-lg">Together we build</span>
              <span className="text-2xl md:text-3xl font-bold text-white">"Great Place"</span>
              <span className="text-gray-400 text-lg">—</span>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">"To Learn"</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/apply">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-yellow-500/25" size="lg">
                  Join UNCIF
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/greats">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl" size="lg">
                  Explore Greats
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Image Gallery */}
          <div className="relative">
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-white/10">
              <img
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Thumbnail Grid */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-3 gap-2 p-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
              {heroImages.slice(0, 3).map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all ${
                    idx === currentImageIndex ? 'ring-2 ring-yellow-400' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-yellow-400">10,000+</div>
              <div className="text-sm text-gray-300">Global Changemakers</div>
            </div>
          </div>
        </div>

        {/* Global Partners Strip */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-12">
          <p className="text-center text-gray-400 mb-4">
            Globally, <span className="text-white font-semibold">UNICEF, Harvard, Khan Academy</span> and <span className="text-yellow-400 font-bold">10,000+</span> changemakers work towards building better institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <span className="text-xl font-bold text-white">UNICEF</span>
            <span className="text-gray-500">•</span>
            <span className="text-xl font-bold text-white">Harvard</span>
            <span className="text-gray-500">•</span>
            <span className="text-xl font-bold text-white">Khan Academy</span>
            <span className="text-gray-500">•</span>
            <span className="text-xl font-bold text-white">UNESCO</span>
            <span className="text-gray-500">•</span>
            <span className="text-lg text-gray-400">and more...</span>
          </div>
        </div>

        {/* UNCIF Movements Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Movements List */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">UNCIF Founding Movements</h2>
            </div>

            <div className="space-y-3">
              {movements.map((movement, idx) => {
                const Icon = movement.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                      idx === currentMovementIndex
                        ? 'bg-white/15 border border-white/30 scale-105'
                        : 'bg-white/5 border border-transparent hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${idx === currentMovementIndex ? 'animate-pulse' : ''}`}>
                      <Icon className={`h-6 w-6 ${movement.color}`} />
                    </div>
                    <span className={`text-lg font-medium ${idx === currentMovementIndex ? 'text-white' : 'text-gray-300'}`}>
                      {movement.label}
                    </span>
                    {idx === currentMovementIndex && (
                      <ArrowRight className="ml-auto h-5 w-5 text-yellow-400 animate-bounce-horizontal" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Movement Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/hero/uncif-team.png"
                alt="UNCIF Team"
                className="w-full h-40 object-cover rounded-2xl border border-white/10"
              />
              <img
                src="/hero/uncif-biss.png"
                alt="BISS Initiative"
                className="w-full h-52 object-cover rounded-2xl border border-white/10"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/hero/uncif-student.png"
                alt="UNCIF Student"
                className="w-full h-52 object-cover rounded-2xl border border-white/10"
              />
              <img
                src="/hero/uncif-expo.png"
                alt="UNCIF Expo"
                className="w-full h-40 object-cover rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '1M+', label: 'Target Schools', color: 'from-yellow-400 to-orange-400' },
            { value: '1B+', label: 'Frontliners Impacted', color: 'from-purple-400 to-pink-400' },
            { value: '50+', label: 'Countries', color: 'from-blue-400 to-cyan-400' },
            { value: '10K+', label: 'Changemakers', color: 'from-green-400 to-emerald-400' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UNCIFHeroNew;
