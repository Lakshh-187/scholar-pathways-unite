
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  School, 
  DollarSign, 
  Rocket, 
  Star,
  Globe,
  BookOpen,
  Users,
  Lightbulb,
  Award,
  Target,
  Building
} from 'lucide-react';

const UISSection = () => {
  const features = [
    { icon: BookOpen, title: 'Project-Based Learning', desc: 'Hands-on learning through real-world projects' },
    { icon: Rocket, title: 'Frontliner Initiative', desc: 'Student-led initiatives and leadership development' },
    { icon: Award, title: 'UNCIF Curriculum', desc: 'Backed by proven international standards' },
    { icon: DollarSign, title: 'Affordable Excellence', desc: 'Quality education at just $20-30 yearly fees' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 px-6 py-3 mb-8 text-lg font-bold shadow-lg">
              <School className="h-5 w-5 mr-2" />
              COMING SOON
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Uniford <span className="text-blue-600">International</span> School
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              UIS
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Inauguration of a revolutionary <span className="font-bold text-blue-700">modern hi-tech next-gen school</span> with 
              affordable world-class education starting at just <span className="font-bold text-green-600">$20-30 yearly fees</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Badge variant="outline" className="bg-white/80 text-blue-700 px-4 py-2 text-lg border-blue-200">
                <Globe className="h-4 w-4 mr-2" />
                International Standards
              </Badge>
              <Badge variant="outline" className="bg-white/80 text-green-700 px-4 py-2 text-lg border-green-200">
                <DollarSign className="h-4 w-4 mr-2" />
                Affordable Excellence
              </Badge>
              <Badge variant="outline" className="bg-white/80 text-purple-700 px-4 py-2 text-lg border-purple-200">
                <Lightbulb className="h-4 w-4 mr-2" />
                Innovation Focused
              </Badge>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left - Features */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Revolutionary Educational Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-yellow-300" />
                  <h4 className="text-2xl font-bold">UNCIF Affiliation</h4>
                </div>
                <p className="text-blue-100 text-lg">
                  Backed by Uniford National Council of Institutes & Frontliners curriculum and standards, 
                  ensuring world-class education with innovative teaching methodologies.
                </p>
              </div>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8">
                <img 
                  src="/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png" 
                  alt="UIS - Uniford International School Campus"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
                
                {/* Floating Stats */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">$20-30</div>
                  <div className="text-sm text-gray-600">Yearly Fees</div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">Hi-Tech</div>
                  <div className="text-sm text-gray-600">Next-Gen</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">UNCIF</div>
                  <div className="text-sm text-gray-600">Curriculum</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Why UIS is Revolutionary</h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Breaking barriers in education by combining affordability with excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Project-Based Learning</h4>
                <p className="text-gray-600">Students learn through real-world projects, developing practical skills alongside academic knowledge.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Frontliner Initiative</h4>
                <p className="text-gray-600">Every student becomes a leader, initiating their own projects and taking ownership of their learning journey.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Modern Infrastructure</h4>
                <p className="text-gray-600">Hi-tech facilities and next-generation learning environments designed for tomorrow's challenges.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Tuned for the Launch</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be the first to know when UIS opens its doors to revolutionize education. 
                Join our waiting list for early access and exclusive updates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/uis">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-xl">
                    Join Waiting List
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 rounded-xl"
                >
                  Learn More About UNCIF
                  <School className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UISSection;
