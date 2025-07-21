import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Cpu, Trophy, Heart, Users } from 'lucide-react';

const UNCIF2026Milestones = () => {
  const milestones = [
    {
      title: "TRANSFORMATION INSTITUTE",
      value: "1,000+",
      subtitle: "Institutes Transformed",
      icon: Target,
      color: "red",
      position: "top-left"
    },
    {
      title: "DIGITAL BACKBONE",
      value: "5,00,000+",
      subtitle: "Students Connected",
      icon: Cpu,
      color: "blue",
      position: "top-right"
    },
    {
      title: "STANBURG INITIATIVE",
      value: "50,000+",
      subtitle: "Scholars Empowered",
      icon: Trophy,
      color: "purple",
      position: "left"
    },
    {
      title: "SUGAR FREE INDIA",
      value: "10,00,000+",
      subtitle: "Lives Impacted By Health",
      icon: Heart,
      color: "green",
      position: "right"
    },
    {
      title: "FRONTLINER",
      value: "25,000+",
      subtitle: "Leaders Developed",
      icon: Users,
      color: "orange",
      position: "bottom"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
        icon: "text-red-600"
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        icon: "text-blue-600"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        icon: "text-purple-600"
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: "text-green-600"
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        icon: "text-orange-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  const getPositionClasses = (position: string) => {
    const positions = {
      "top-left": "absolute top-8 left-8 md:top-12 md:left-16",
      "top-right": "absolute top-8 right-8 md:top-12 md:right-16",
      "left": "absolute left-4 top-1/2 -translate-y-1/2 md:left-8",
      "right": "absolute right-4 top-1/2 -translate-y-1/2 md:right-8",
      "bottom": "absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12"
    };
    return positions[position as keyof typeof positions];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-red-100 text-red-700 px-6 py-2 mb-6 text-lg font-semibold">
            UNCIF 2026 MILESTONES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            OUR <span className="text-red-600">TRANSFORMATION</span> IMPACT<br />
            <span className="text-yellow-600">BY 2026</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through our flagship UNCIF programs, we're creating unprecedented change 
            across education, health, and social development sectors.
          </p>
        </div>

        {/* Central Impact Visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Circle */}
          <div className="relative">
            {/* Background Semi-Circle */}
            <div 
              className="w-full h-96 md:h-[500px] relative mx-auto"
              style={{
                background: 'linear-gradient(180deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
                borderRadius: '400px 400px 0 0',
                maxWidth: '800px'
              }}
            >
              {/* Central Content */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/30 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="text-yellow-300">15.75 MILLION+</span>
                </h3>
                <p className="text-xl md:text-2xl font-medium opacity-90">
                  LIVES TRANSFORMED
                </p>
              </div>
            </div>

            {/* Milestone Cards */}
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const colors = getColorClasses(milestone.color);
              const position = getPositionClasses(milestone.position);

              return (
                <Card 
                  key={index}
                  className={`${position} ${colors.bg} ${colors.border} border-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-48 md:w-56 z-10`}
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                      <Icon className={`h-6 w-6 md:h-7 md:w-7 ${colors.icon}`} />
                    </div>
                    <h4 className={`font-bold text-xs md:text-sm ${colors.text} mb-2 leading-tight`}>
                      {milestone.title}
                    </h4>
                    <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>
                      {milestone.value}
                    </div>
                    <p className={`text-xs md:text-sm ${colors.text} opacity-80 leading-tight`}>
                      {milestone.subtitle}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Countries Reached", value: "25+" },
            { label: "Partner Organizations", value: "500+" },
            { label: "Research Projects", value: "150+" },
            { label: "Technology Solutions", value: "50+" },
            { label: "Success Stories", value: "10,000+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default UNCIF2026Milestones;