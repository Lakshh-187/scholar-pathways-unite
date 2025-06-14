
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book, Globe, Layers, Database, Award, Rocket, School, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const UIRADMidSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-unifor-purple via-unifor-dark-purple to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
            UIRAD Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-300">Uniford</span> International Research & Academic Development
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Research-driven academic innovation hub that transforms institutes to international standards, 
            empowering students through free opportunities and global partnerships.
          </p>
        </div>

        {/* UIRAD Components Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center mb-4 mx-auto">
                <Layers className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-300">Uni-Pitch</h3>
              <p className="text-sm text-gray-300 mb-3">Global Student Connector</p>
              <p className="text-purple-100">Bridges the gap between students and global opportunities by allowing them to pitch queries, skills, and projects.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center mb-4 mx-auto">
                <Database className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">SEP-700</h3>
              <p className="text-sm text-gray-300 mb-3">Student Opportunity Portal</p>
              <p className="text-purple-100">AI-powered one-stop portal that connects students to scholarships, global internships, competitions, and career programs.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/30 flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">UIRAD</h3>
              <p className="text-sm text-gray-300 mb-3">International Research & Development</p>
              <p className="text-purple-100">Research-driven academic innovation hub that focuses on upgrading institutes with international curriculum and research programs.</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-yellow-300">Transform Your Institute</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <School className="h-6 w-6 text-green-400 mr-3" />
                <span>International curriculum integration</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-blue-400 mr-3" />
                <span>Research collaboration opportunities</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-purple-400 mr-3" />
                <span>Student global engagement programs</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-400 mr-3" />
                <span>International recognition and accreditation</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Rocket className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">Ready to Transform?</h4>
              <p className="text-purple-200 mb-6">Join leading educational institutions worldwide in embracing the future of education.</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Partner with UIRAD
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIRADMidSection;
