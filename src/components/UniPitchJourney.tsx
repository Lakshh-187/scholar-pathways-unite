
import React, { useState } from 'react';
import { 
  Mic, 
  Award, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  FileText, 
  Rocket
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';



export const UniPitchJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Your Pitch",
      icon: <Mic className="h-8 w-8 text-unifor-purple" />,
      description: "Students submit their queries, challenges, or achievements through Uni-Pitch.",
      examples: [
        { label: "Need help with career growth?", example: "Internship, job referral, mentorship, recommendation letters" },
        { label: "Looking for opportunities?", example: "Grants, scholarships, startup funding, skill-building programs" },
        { label: "Want to showcase achievements?", example: "Innovative projects, research papers, social initiatives" },
        { label: "Need visibility?", example: "Profile listing, media publications, event nominations" }
      ]
    },
    {
      id: 2,
      title: "Uni-Pitch Council Evaluates Your Pitch",
      icon: <Award className="h-8 w-8 text-unifor-purple" />,
      description: "Each pitch is assessed by AI-powered agents, industry experts, and opportunity portals.",
      evaluationMethods: [
        { method: "Profile Screening", description: "We analyze your skills, needs, and achievements to match the best opportunities." },
        { method: "Talent Hunt Alliance", description: "Companies and organizations find potential talent based on their pitches." },
        { method: "Pitch Rating & Validation", description: "The pitch is scored and validated for eligibility." }
      ]
    },
    {
      id: 3,
      title: "Connecting You to the Right Opportunities",
      icon: <CheckCircle className="h-8 w-8 text-unifor-purple" />,
      description: "Based on pitch evaluation, students are connected with global platforms, funding, and career-boosting programs.",
      channels: [
        { name: "SEP-700 Portal", benefit: "Access to 700+ global student-centric programs, scholarships, and internships." },
        { name: "CAF (Common Application Form)", benefit: "One application → Multiple opportunities. Saves time & effort!" },
        { name: "Profile Screening", benefit: "Your profile is recommended to top talent hunters and recruiters." },
        { name: "Talent Hunt Alliance", benefit: "Companies offer internships, jobs, and projects based on your skills." },
        { name: "Feature & Publish", benefit: "Best pitches get published in magazines, news, and podcasts, attracting worldwide attention." }
      ]
    },
    {
      id: 4,
      title: "Real-Life Impact",
      icon: <Rocket className="h-8 w-8 text-unifor-purple" />,
      description: "From career opportunities to global recognition, see how Uni-Pitch transforms student journeys."
    }
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">How Uni-Pitch Works</h2>
      
      {/* Desktop view - Horizontal timeline */}
      <div className="hidden md:block relative">
         <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={step.id} className="w-1/4 px-4 flex flex-col items-center">
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-unifor-light-purple">
                 

                  {step.icon}
                </div>
              </div>
              
              <div className="text-center mb-4 ">
                <h3 className="text-xl font-bold text-unifor-dark-purple mb-2">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Step specific content */}
              <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  {step.id === 1 && step.examples && (
                    <div className="mt-2">
                      <h4 className="font-semibold mb-2 text-unifor-purple">What You Can Pitch?</h4>
                      <ul className="space-y-2">
                        {step.examples.map((item, i) => (
                          <li key={i} className="text-sm">
                            <span className="font-medium">{item.label}</span>
                            <p className="text-gray-500 text-xs">{item.example}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.id === 2 && step.evaluationMethods && (
                    <div className="mt-2">
                      <h4 className="font-semibold mb-2 text-unifor-purple">How Uni-Pitch Evaluates?</h4>
                      <ul className="space-y-2">
                        {step.evaluationMethods.map((method, i) => (
                          <li key={i} className="text-sm">
                            <span className="font-medium">{method.method}</span>
                            <p className="text-gray-500 text-xs">{method.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.id === 3 && step.channels && (
                    <div className="mt-2">
                      <h4 className="font-semibold mb-2 text-unifor-purple">Opportunity Channels</h4>
                      <ul className="space-y-2">
                        {step.channels.map((channel, i) => (
                          <li key={i} className="text-sm">
                            <span className="font-medium">{channel.name}</span>
                            <p className="text-gray-500 text-xs">{channel.benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.id === 4 && (
                    <div className="flex justify-center mt-2">
                      <ArrowRight className="h-6 w-6 text-unifor-purple" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile view - Vertical timeline */}
      <div className="md:hidden space-y-8">    
        {steps.map((step) => (
          <div key={step.id} className="relative pl-10 pb-8">
            {/* Timeline line */}
            {step.id < steps.length && (
              <div className="absolute left-4 top-8 h-full w-0.5 bg-gradient-to-b from-unifor-purple to-unifor-blue"></div>
            )}
            
            {/* Timeline icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 bg-unifor-light-purple rounded-full">
              <span className="text-white font-bold text-sm">{step.id}</span>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-unifor-dark-purple flex items-center">
                {step.icon && <span className="mr-2">{step.icon}</span>}
                {step.title}
              </h3>
              <p className="text-gray-600 mb-3">{step.description}</p>
              
              {/* Step specific content */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-3">
                  {step.id === 1 && step.examples && (
                    <div>
                      <h4 className="font-semibold mb-2 text-unifor-purple text-sm">What You Can Pitch?</h4>
                      <ul className="space-y-2">
                        {step.examples.map((item, i) => (
                          <li key={i} className="text-xs">
                            <span className="font-medium">{item.label}</span>
                            <p className="text-gray-500">{item.example}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.id === 2 && step.evaluationMethods && (
                    <div>
                      <h4 className="font-semibold mb-2 text-unifor-purple text-sm">How Uni-Pitch Evaluates?</h4>
                      <ul className="space-y-2">
                        {step.evaluationMethods.map((method, i) => (
                          <li key={i} className="text-xs">
                            <span className="font-medium">{method.method}</span>
                            <p className="text-gray-500">{method.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.id === 3 && step.channels && (
                    <div>
                      <h4 className="font-semibold mb-2 text-unifor-purple text-sm">Opportunity Channels</h4>
                      <ul className="space-y-2">
                        {step.channels.map((channel, i) => (
                          <li key={i} className="text-xs">
                            <span className="font-medium">{channel.name}</span>
                            <p className="text-gray-500">{channel.benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

