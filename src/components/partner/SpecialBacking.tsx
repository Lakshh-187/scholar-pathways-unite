
import { Globe, Star, Network, Users, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow
} from '@/components/ui/table';

const SpecialBacking = () => {
  const supportOfferings = [
    {
      category: "Technical Support",
      offerings: [
        "Website development without charges",
        "Portal & application development",
        "Digital infrastructure setup",
        "Technical consultation & support"
      ]
    },
    {
      category: "Branding Support",
      offerings: [
        "Featured in Pitchburg events",
        "Highlighted in our magazine",
        "Social media feature campaigns",
        "Brand identity development assistance"
      ]
    },
    {
      category: "Network & Funding",
      offerings: [
        "Access to our extensive network",
        "Connection with CSR grant opportunities",
        "Introduction to venture funds",
        "Fundraising strategy consultation"
      ]
    },
    {
      category: "Campaign Support",
      offerings: [
        "Collaboration on awareness campaigns",
        "Initiative sponsorship",
        "Event co-hosting opportunities",
        "Community mobilization support"
      ]
    }
  ];

  return (
    <section id="special-backing" className="py-20 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-white px-4 py-1 mb-4 border-[#9b87f5]">
            SPECIAL SUPPORT
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Backing for Social Initiatives</h2>
          <p className="text-gray-300 text-lg">
            We offer enhanced support for social activists, non-profits, and frontliners 
            who are driving positive change in society.
          </p>
        </div>
        
        <div className="bg-[#2A2F3C] rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7E69AB] rounded-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tech Stack Support</h3>
                  <p className="text-gray-300">
                    We help you create websites, portals, and apps without any charges, 
                    supporting your digital presence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7E69AB] rounded-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Branding & Features</h3>
                  <p className="text-gray-300">
                    We help you with branding and feature your work in our Pitchburg and magazine
                    to increase visibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7E69AB] rounded-lg">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network & Funding</h3>
                  <p className="text-gray-300">
                    We help you with our network, connect you with CSR grants, and help you
                    find funding opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7E69AB] rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Campaign Collaboration</h3>
                  <p className="text-gray-300">
                    We help you collaborate on campaigns and sponsor your initiatives to
                    maximize your impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-center">Detailed Support Offerings</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Support Offerings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportOfferings.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-[#9b87f5]">{item.category}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {item.offerings.map((offering, idx) => (
                            <li key={idx}>{offering}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialBacking;
