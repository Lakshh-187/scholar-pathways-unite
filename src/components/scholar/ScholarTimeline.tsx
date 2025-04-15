
import React from 'react';
import { 
  BadgeCheck, 
  Clock, 
  CreditCard, 
  FileText,
  Users 
} from 'lucide-react';

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    icon: <CreditCard className="h-6 w-6 text-unifor-purple" />,
    title: "Pay Membership Fee",
    description: "Pay ₹500 registration fee (refundable through social internship)",
  },
  {
    icon: <FileText className="h-6 w-6 text-unifor-purple" />,
    title: "Fill ID Card Form",
    description: "Complete your Scholar ID Card application form",
  },
  {
    icon: <Users className="h-6 w-6 text-unifor-purple" />,
    title: "Complete Social Internship",
    description: "Participate in our social initiatives to get your fee refunded",
  },
  {
    icon: <Clock className="h-6 w-6 text-unifor-purple" />,
    title: "Time Aid Policy",
    description: "Submit internship certificate or ₹500 within 3 days of receiving ID kit",
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-unifor-purple" />,
    title: "Get Verified",
    description: "Receive your Scholar ID Card and become a verified member",
  },
];

const ScholarTimeline = () => {
  return (
    <div className="relative py-8">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-unifor-light-purple"></div>
      <div className="space-y-8">
        {timelineSteps.map((step, index) => (
          <div key={index} className="relative pl-12 ml-4">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-unifor-purple text-white flex items-center justify-center">
              {step.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarTimeline;
