import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Trophy, 
  BookOpen, 
  Code, 
  GraduationCap, 
  Globe,
  Star,
  Crown,
  Flower2,
  Gift,
  MapPin,
  UserPlus,
  HandHeart,
  Building2
} from 'lucide-react';

const HerHaVa = () => {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  const programHighlights = [
    {
      id: 1,
      title: "Free Fellowship – Frontliner",
      description: "Exclusive entry to the Frontliner Fellowship for top-performing girls. Training on leadership, innovation, and entrepreneurship.",
      icon: Crown,
      gradient: "from-pink-400 to-rose-300",
      image: "/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png"
    },
    {
      id: 2,
      title: "Tech Grants & Publishing Grants",
      description: "Tech Grants for AI tools and digital products. Publishing Grants for authors and researchers.",
      icon: Code,
      gradient: "from-rose-400 to-pink-300",
      image: "/lovable-uploads/417c6974-656e-4cc8-9b02-9500b11d325b.png"
    },
    {
      id: 3,
      title: "Scholarships & LOR",
      description: "Access to exclusive scholarships and Letters of Recommendation from industry experts.",
      icon: GraduationCap,
      gradient: "from-pink-300 to-rose-400",
      image: "/lovable-uploads/4949b6b2-3040-4a7a-a474-5bd28a85a8b3.png"
    },
    {
      id: 4,
      title: "Internship Opportunities",
      description: "Guaranteed remote & hybrid internships with global startups and NGOs.",
      icon: Building2,
      gradient: "from-rose-300 to-pink-400",
      image: "/lovable-uploads/61438adf-d790-43aa-82d6-7d96b9e8f931.png"
    },
    {
      id: 5,
      title: "Premium Portals & Conferences",
      description: "Free lifetime access to learning portals and international conferences.",
      icon: Globe,
      gradient: "from-pink-400 to-rose-300",
      image: "/lovable-uploads/7cdd624e-8f94-4d4c-822d-305853985de3.png"
    },
    {
      id: 6,
      title: "UNI-Pitch & Competitions",
      description: "Pitch your ideas to investors and win grants, prizes, and sponsorships.",
      icon: Trophy,
      gradient: "from-rose-400 to-pink-300",
      image: "/lovable-uploads/83320e27-0b79-43f5-8e30-6e45043a85a9.png"
    }
  ];

  const applicationTypes = [
    {
      category: "For Girls (Scholars & Innovators)",
      items: ["Fellowship", "Tech Grants", "Publishing Grants", "Internships", "UNI-Pitch", "Free Conferences"],
      icon: Heart,
      color: "bg-pink-100 text-pink-700 border-pink-200",
      image: "/lovable-uploads/91162f53-55de-48bf-b2f0-bf0d7a1ddb2a.png"
    },
    {
      category: "For Open-Source Contributors",
      items: ["Mentoring", "Training", "Creating", "Guiding in Tech & Design"],
      icon: Users,
      color: "bg-rose-100 text-rose-700 border-rose-200",
      image: "/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png"
    },
    {
      category: "For Sponsors & Partners",
      items: ["Fund Grants", "Support Education", "Branding Opportunities", "Collaboration"],
      icon: HandHeart,
      color: "bg-pink-100 text-pink-700 border-pink-200",
      image: "/lovable-uploads/a8ba3d0d-5673-469e-9ca5-ac2acaf279a4.png"
    },
    {
      category: "For Campus Ambassadors",
      items: ["Represent Her-Hava", "Organize Events", "Leadership Exposure", "Exclusive Perks"],
      icon: MapPin,
      color: "bg-rose-100 text-rose-700 border-rose-200",
      image: "/lovable-uploads/ad360940-b29b-4c32-9666-1b858478ccd1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-white to-rose-100 py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/b9961f6a-0380-4621-bae1-1258a852c51a.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Sparkles className="h-12 w-12 text-pink-500" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                HER-HAVA
              </h1>
              <Flower2 className="h-12 w-12 text-rose-500" />
            </div>
            
            <Badge className="mb-6 bg-pink-100 text-pink-700 border-pink-200 text-lg px-6 py-2">
              Girl Innovators Incubation Program
            </Badge>
            
            <p className="text-2xl text-gray-700 mb-4 italic">
              "Hasdi Rah Sada, Vadsi Reh Sada"
            </p>
            <p className="text-lg text-gray-600 mb-8">
              (Keep Smiling, Keep Growing)
            </p>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Her-Hava is a revolutionary incubation & empowerment platform for young girls who aspire to innovate, 
                lead, and create social & technological impact. We aim to build future women leaders by giving them 
                access to world-class opportunities, mentorship, and financial support — at zero cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🎯 Program Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We nurture future changemakers through real opportunities, skill-building, and global exposure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${program.gradient} relative overflow-hidden`}>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-pink-600" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-pink-700">
                      {index + 1}️⃣
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-pink-800">{program.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* School Society Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-pink-200">
              <div className="relative mb-8">
                <img 
                  src="/lovable-uploads/baf6c96d-a314-4745-ba69-67672aa9a098.png" 
                  alt="School Society"
                  className="w-full h-64 object-cover rounded-2xl opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-800">🏫 School Society Establishment</h2>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                We'll set up "Her-Hava Societies" in schools & colleges to ensure better implementation
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <Users className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-pink-800 mb-2">Workshops & Sessions</h3>
                  <p className="text-gray-600 text-sm">Organize mentorship sessions, hackathons, and competitions</p>
                </div>
                <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                  <GraduationCap className="h-8 w-8 text-rose-600 mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2">Career Guidance</h3>
                  <p className="text-gray-600 text-sm">Provide career guidance & personality development programs</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <Heart className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-pink-800 mb-2">Support Ecosystem</h3>
                  <p className="text-gray-600 text-sm">Create a support ecosystem for girl innovators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🌎 Applications Open
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are inviting contributors, mentors, and supporters to join this movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applicationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-pink-200 to-rose-200">
                    <img 
                      src={type.image} 
                      alt={type.category}
                      className="w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-pink-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-pink-800">{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} className={`mr-2 mb-2 ${type.color}`}>
                          ✅ {item}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-pink-800">Apply for {type.category}</DialogTitle>
                          <DialogDescription>
                            Fill out the application form to join the Her-Hava community.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">
                            Application process will be available soon. Stay tuned for updates!
                          </p>
                          <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                            Get Notified
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-white to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-pink-200">
              <div className="relative mb-8">
                <img 
                  src="/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png" 
                  alt="Backed By"
                  className="w-full h-48 object-cover rounded-2xl opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-800">💡 Backed By</h2>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-semibold text-pink-800">Unified Talent Hunt Alliance (UTHA)</p>
                <p>Supported by Uniford Foundation & Startup Pool</p>
                <p className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Empowering girls to innovate, create & lead globally.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center space-x-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                  <Heart className="mr-2 h-5 w-5" />
                  Join the Movement
                </Button>
                <Button variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HerHaVa;