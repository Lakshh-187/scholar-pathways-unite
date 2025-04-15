
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  CheckCircle, 
  GraduationCap, 
  Globe, 
  Award, 
  Calendar, 
  CreditCard, 
  Clock, 
  Users, 
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  ChevronsRight
} from 'lucide-react';

const ScholarIDCardProgram = () => {
  const [openSection, setOpenSection] = React.useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const roadmapItems = [
    {
      title: "Eligibility Criteria",
      icon: <CheckCircle className="h-8 w-8 text-unifor-purple" />,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span>Minimum 55% marks in latest qualification</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span>Under 24 years of age (U-24)</span>
          </li>
        </ul>
      )
    },
    {
      title: "Why Apply for the Scholar ID Card?",
      icon: <GraduationCap className="h-8 w-8 text-unifor-purple" />,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <GraduationCap className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
            <span>Get officially recognized as a Uniford Scholar</span>
          </li>
          <li className="flex items-start gap-2">
            <Award className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
            <span>Access exclusive internships, projects, and startup opportunities</span>
          </li>
          <li className="flex items-start gap-2">
            <Globe className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
            <span>Participate in global summits, fests, and cohorts without individual fees</span>
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
            <span>Your profile gets priority screening for various platforms</span>
          </li>
        </ul>
      )
    },
    {
      title: "Ways to Apply",
      icon: <Calendar className="h-8 w-8 text-unifor-purple" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-unifor-light-purple/20">
            <h4 className="font-medium mb-2 text-unifor-dark-purple flex items-center">
              <span className="bg-unifor-purple text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
              Option 1
            </h4>
            <p>Already have a Uniford Social Internship Certificate? Use it to apply directly!</p>
          </div>
          <div className="p-4 rounded-lg bg-unifor-light-purple/20">
            <h4 className="font-medium mb-2 text-unifor-dark-purple flex items-center">
              <span className="bg-unifor-purple text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
              Option 2
            </h4>
            <p>Don't have the certificate? Pay a refundable fee of ₹500 to apply. (Refund processed after verification)</p>
          </div>
        </div>
      )
    },
    {
      title: "What's Included in the Scholar Kit?",
      icon: <Award className="h-8 w-8 text-unifor-purple" />,
      content: (
        <div>
          <p className="mb-4">Once your application is approved, you'll receive:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unifor-light-purple mb-3">
                <CreditCard className="h-6 w-6 text-unifor-purple" />
              </div>
              <p className="font-medium">2 Scholar ID Cards</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unifor-light-purple mb-3">
                <CreditCard className="h-6 w-6 text-unifor-purple" />
              </div>
              <p className="font-medium">1 Membership Card</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unifor-light-purple mb-3">
                <Award className="h-6 w-6 text-unifor-purple" />
              </div>
              <p className="font-medium">1 Scholar Badge</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Utility of Each Item",
      icon: <CreditCard className="h-8 w-8 text-unifor-purple" />,
      content: (
        <div className="space-y-6">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-unifor-light-purple/20 rounded-lg text-left hover:bg-unifor-light-purple/30 transition-colors">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-unifor-purple mr-2" />
                <span className="font-medium">Scholar ID Card</span>
              </div>
              <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-l-2 border-unifor-light-purple ml-6 mt-2">
              <p className="mb-2">Use to apply for:</p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Internships</li>
                <li>Project Expos</li>
                <li>Uni-Pitch</li>
                <li>ARS Screening</li>
                <li>Innovation Programs</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-unifor-light-purple/20 rounded-lg text-left hover:bg-unifor-light-purple/30 transition-colors">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-unifor-purple mr-2" />
                <span className="font-medium">Membership Card</span>
              </div>
              <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-l-2 border-unifor-light-purple ml-6 mt-2">
              <p className="mb-2">Use to access:</p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Conferences</li>
                <li>Summits</li>
                <li>Festivals</li>
                <li>Offline Campaigns</li>
                <li>Cohorts & Events</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-unifor-light-purple/20 rounded-lg text-left hover:bg-unifor-light-purple/30 transition-colors">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-unifor-purple mr-2" />
                <span className="font-medium">Scholar Badge</span>
              </div>
              <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-l-2 border-unifor-light-purple ml-6 mt-2">
              <p>Verified only after profile check and completion of Vintage Curriculum</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )
    },
    {
      title: "Time Aid Policy",
      icon: <Clock className="h-8 w-8 text-unifor-purple" />,
      content: (
        <div>
          <p className="text-unifor-dark-purple font-medium mb-2">Apply now & get your ID early!</p>
          <p className="mb-3">Submit either:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
              <span>Internship Certificate OR</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
              <span>₹500 within 3 days of receiving your ID kit</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Alumni Council Responsibility",
      icon: <Users className="h-8 w-8 text-unifor-purple" />,
      content: (
        <div>
          <p className="mb-4">If you receive opportunities through this program, you're encouraged to give back through:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Users className="h-4 w-4 text-unifor-purple" />
                </div>
                <h4 className="font-medium">Time & Mentorship</h4>
              </div>
              <p className="text-sm text-gray-600">Help guide new scholars</p>
            </div>
            <div className="p-3 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Globe className="h-4 w-4 text-unifor-purple" />
                </div>
                <h4 className="font-medium">Network Access</h4>
              </div>
              <p className="text-sm text-gray-600">Share your connections</p>
            </div>
            <div className="p-3 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Award className="h-4 w-4 text-unifor-purple" />
                </div>
                <h4 className="font-medium">Support in Campaigns</h4>
              </div>
              <p className="text-sm text-gray-600">Volunteer for initiatives</p>
            </div>
            <div className="p-3 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Award className="h-4 w-4 text-unifor-purple" />
                </div>
                <h4 className="font-medium">Alumni Fund Contribution</h4>
              </div>
              <p className="text-sm text-gray-600">Support future scholars</p>
            </div>
          </div>
          <p className="mt-4 text-center italic text-gray-600">This ensures future scholars grow through your shared success! 🌱</p>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SCHOLAR ID PROGRAM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Uniford Scholar ID Card Program
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive program designed to empower young leaders with exclusive access to opportunities and resources.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Visual Timeline */}
          <div className="relative mb-16">
            <div className="absolute left-0 top-1/2 h-1 w-full bg-gray-200 -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {roadmapItems.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    index <= openSection ? 'bg-unifor-purple text-white' : 'bg-gray-300 text-gray-600'
                  } cursor-pointer transition-colors duration-300`}
                  onClick={() => toggleSection(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Content Cards */}
          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <Card 
                key={index}
                className={`transition-all duration-300 ${
                  openSection === index ? 'border-unifor-purple shadow-lg' : 'hover:border-unifor-light-purple'
                }`}
              >
                <button 
                  className="w-full text-left p-5 flex justify-between items-center"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${
                      openSection === index ? 'bg-unifor-purple text-white' : 'bg-unifor-light-purple text-unifor-purple'
                    } flex items-center justify-center transition-colors duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  {openSection === index ? 
                    <ChevronUp className="h-6 w-6 text-unifor-purple" /> : 
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  }
                </button>
                
                {openSection === index && (
                  <CardContent className="pt-0 pb-5 animate-accordion-down">
                    <div className="pl-16">
                      {item.content}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
              Apply for Scholar ID Card
              <ChevronsRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarIDCardProgram;
