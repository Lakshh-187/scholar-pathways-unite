
import { Award, Users, FileText, Handshake, Mail, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const WhyWorkWithUs = () => {
  const benefits = [
    {
      title: "Access Our Community",
      description: "Reach our large student community and backed institutes to share your organization's theme, projects, and programs.",
      icon: <Users className="h-10 w-10 text-[#7E69AB]" />,
    },
    {
      title: "Event Invitations",
      description: "Get invited to our conferences, awards, fests, and competitions as a valued partner.",
      icon: <Award className="h-10 w-10 text-[#7E69AB]" />,
    },
    {
      title: "Joint Certification",
      description: "Offer joint certifications and recognition to enhance credibility and visibility.",
      icon: <FileText className="h-10 w-10 text-[#7E69AB]" />,
    },
    {
      title: "CSR Collaboration",
      description: "Collaborate with us on CSR projects and campaigns to maximize social impact.",
      icon: <Handshake className="h-10 w-10 text-[#7E69AB]" />,
    },
    {
      title: "Pitchburg Platform",
      description: "Get invited to our Pitchburg platform to showcase your initiatives and connect with key stakeholders.",
      icon: <Mail className="h-10 w-10 text-[#7E69AB]" />,
    },
    {
      title: "Brand Visibility",
      description: "Gain visibility through our platforms, publications, and events.",
      icon: <Star className="h-10 w-10 text-[#7E69AB]" />,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            PARTNERSHIP BENEFITS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Uniford Foundation</h2>
          <p className="text-gray-600 text-lg">
            Partnering with Uniford Foundation opens doors to numerous opportunities and benefits
            that extend beyond conventional collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-[#D6BCFA]/30 inline-block rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
