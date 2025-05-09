
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Check, FileText, Calendar, Award, Rocket } from 'lucide-react';

const BackedOfferings = () => {
  const offeringCategories = [
    { id: "resources", label: "Resources" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "curriculum", label: "Curriculum" },
    { id: "events", label: "Events & Recognition" }
  ];

  const offerings = {
    resources: [
      { title: "Free ID Cards", description: "Premium membership cards for achievers and toppers" },
      { title: "SEP-700 Portal", description: "Access to 700+ global programs and opportunities" },
      { title: "Uniford Resource Portal", description: "Digital library, coursework, and learning materials" },
      { title: "CSR Programs", description: "Funded workshops and training programs" }
    ],
    infrastructure: [
      { title: "Pitchburg Establishment", description: "Free Pitchburg establishment license after 2-year audit" },
      { title: "Website Development", description: "Custom website and online portal solutions" },
      { title: "Software Solutions", description: "Management and educational software systems" },
      { title: "Technical Setup", description: "Hardware and necessary equipment installation" }
    ],
    curriculum: [
      { title: "UIRAD Curriculum", description: "International standard curriculum designed by UIRAD" },
      { title: "AR/VR Integration", description: "Augmented and virtual reality educational tools" },
      { title: "International Clubs", description: "Access to global academic and cultural clubs" },
      { title: "UIEC Framework", description: "Uniford Institute Excellence Certification framework" }
    ],
    events: [
      { title: "Award Invitations", description: "Exclusive invites to Uniford awards and ceremonies" },
      { title: "Conferences", description: "Participation in nationwide academic conferences" },
      { title: "Tech Fests", description: "Hosting and participation in technology festivals" },
      { title: "Magazine Feature", description: "Showcase in Uniford publications and media partners" }
    ]
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            OUR OFFERINGS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Provide to Backed Institutes</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive support and resources to transform your institute into an international standard educational center.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Tabs defaultValue="resources" className="w-full">
            <div className="bg-[#F3EAFD] p-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white/50">
                {offeringCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-[#7E69AB] data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {Object.entries(offerings).map(([category, items]) => (
              <TabsContent key={category} value={category} className="p-4 md:p-8">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">#</TableHead>
                          <TableHead>Offering</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="w-[100px] text-center">Included</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="font-semibold">{item.title}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center">
                                <Check className="h-5 w-5 text-green-500" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                <div className="mt-6 bg-[#F3EAFD] rounded-lg p-4 flex items-center">
                  {category === "resources" && <FileText className="h-6 w-6 text-[#7E69AB] mr-3" />}
                  {category === "infrastructure" && <Rocket className="h-6 w-6 text-[#7E69AB] mr-3" />}
                  {category === "curriculum" && <Calendar className="h-6 w-6 text-[#7E69AB] mr-3" />}
                  {category === "events" && <Award className="h-6 w-6 text-[#7E69AB] mr-3" />}
                  
                  <p className="text-sm">
                    <span className="font-semibold">Note:</span> All offerings are provided through CSR grants and alumni donations. Quality and availability may vary based on funding.
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BackedOfferings;
