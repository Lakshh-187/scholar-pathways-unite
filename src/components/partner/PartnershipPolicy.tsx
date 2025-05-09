
import { Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PartnershipPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const policies = [
    {
      title: "No Promotion of Gambling",
      description: "We do not promote any gambling, betting, or similar activities that may negatively impact our student community.",
      icon: <X className="h-5 w-5 text-red-500" />,
    },
    {
      title: "Fair Fee Structure",
      description: "We do not promote high fees that are not deserving of the value provided to students.",
      icon: <X className="h-5 w-5 text-red-500" />,
    },
    {
      title: "Ethical Marketing",
      description: "We are not interested in any kind of paid marketing that is not beneficial for our scholars and backed institutes.",
      icon: <X className="h-5 w-5 text-red-500" />,
    },
    {
      title: "Support for Non-profits",
      description: "We warmly welcome and support all non-profit organizations and initiatives without any terms and conditions.",
      icon: <Check className="h-5 w-5 text-green-500" />,
    },
  ];

  return (
    <section id="policy" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            OUR POLICY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Policy</h2>
          <p className="text-gray-600 text-lg">
            We maintain strict ethical standards in all our partnerships to ensure the best interests
            of our students and institutional partners.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {policies.map((policy, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border-b last:border-0">
                <div className="p-2 bg-gray-100 rounded-full">
                  {policy.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mt-6"
          >
            <div className="flex justify-center">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-[#7E69AB]">
                  {isOpen ? "Show Less" : "View Full Policy Document"}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-2">Complete Partnership Policy</h3>
              <p className="mb-4 text-gray-600">
                Our partnership policy is designed to ensure that all collaborations align with our mission
                and values. We prioritize the welfare of our student community and partner institutions
                in all our decisions.
              </p>
              <p className="text-gray-600">
                We conduct thorough due diligence on all potential partners to ensure they meet our
                ethical standards and share our commitment to educational excellence and social impact.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                <li>All partnerships must benefit our student community</li>
                <li>Partners must demonstrate ethical business practices</li>
                <li>We prioritize long-term relationships over short-term gains</li>
                <li>Transparency in all partnership agreements is mandatory</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPolicy;
