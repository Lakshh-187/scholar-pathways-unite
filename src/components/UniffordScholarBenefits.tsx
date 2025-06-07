
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, Shield, Globe, Award, Users, BookOpen,
  Building, Briefcase, GraduationCap, Star, CheckCircle,
  Zap, Gift, MapPin, Phone, Mail
} from "lucide-react";

const UniffordScholarBenefits = () => {
  const benefits = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Official ID Card",
      description: "Digital and physical scholar identification",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Profile",
      description: "Authenticated scholar status and credentials",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Access to international scholar community",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Priority Access",
      description: "70% reserved seats in programs and events",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Exclusive Events",
      description: "Scholar-only workshops and conferences",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning Resources",
      description: "Premium educational content and materials",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Industry Connect",
      description: "Direct connections with partner organizations",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Career Support",
      description: "Job placement and internship assistance",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Skill Certification",
      description: "Official certifications and skill validation",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const specialFeatures = [
    {
      icon: <Star className="h-5 w-5" />,
      title: "Premium Portfolio",
      description: "Professional website with custom domain"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Scholar Goodies",
      description: "Exclusive merchandise and welcome kit"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Campus Access",
      description: "Special access to partner institutions"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "24/7 Support",
      description: "Dedicated scholar helpdesk assistance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-unifor-light-purple/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SCHOLAR BENEFITS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
            What Uniford Scholars Get with ID Card
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your scholar ID card unlocks a world of exclusive benefits, opportunities, and resources designed to accelerate your success
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-unifor-purple/30 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg text-unifor-dark-purple group-hover:text-unifor-purple transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Features Section */}
        <div className="bg-gradient-to-r from-unifor-dark-purple/5 to-unifor-purple/5 rounded-3xl p-8 mb-12 border border-unifor-purple/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">
              Special Scholar Features
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-unifor-purple/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-unifor-purple">{feature.icon}</div>
                </div>
                <h4 className="font-semibold text-unifor-dark-purple mb-2 text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-unifor-dark-purple mb-8">
            How to Get Your Scholar ID Card
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Apply Online</h4>
              <p className="text-sm text-gray-600">Complete the scholar application form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Profile Review</h4>
              <p className="text-sm text-gray-600">Our team reviews your academic profile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Approval</h4>
              <p className="text-sm text-gray-600">Receive approval and ID card details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Activate Benefits</h4>
              <p className="text-sm text-gray-600">Start enjoying all scholar privileges</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg">
              Apply for Scholar ID Card
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniffordScholarBenefits;
