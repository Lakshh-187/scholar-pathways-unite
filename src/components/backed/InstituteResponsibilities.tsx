
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Calendar, FileText, User, FileCheck, Building, School } from 'lucide-react';

const InstituteResponsibilities = () => {
  const responsibilities = [
    {
      title: "Use Resources & Offerings Wisely",
      description: "Institutes must make efficient and effective use of all provided resources, ensuring they benefit the maximum number of students and faculty.",
      details: "All resources should be used for educational purposes only and maintained properly. Wastage and misuse of resources will be monitored through audits.",
      icon: <FileText className="h-5 w-5 text-[#7E69AB]" />
    },
    {
      title: "Submit Audit Reports Timely",
      description: "Regular submission of audit reports is mandatory to ensure transparency and accountability in the use of resources and grants.",
      details: "Quarterly financial audits and bi-annual resource utilization reports must be submitted through the Uniford portal. These reports help us track the impact and identify areas for improvement.",
      icon: <FileCheck className="h-5 w-5 text-[#7E69AB]" />
    },
    {
      title: "Appoint One Program Lead (PL)",
      description: "A dedicated program lead must be appointed to coordinate with Uniford Foundation and ensure smooth implementation of programs.",
      details: "The Program Lead should be a senior faculty member with administrative capabilities. They will be trained by Uniford and serve as the primary point of contact for all communications.",
      icon: <User className="h-5 w-5 text-[#7E69AB]" />
    },
    {
      title: "Submit Annual Reports & Updates Timely",
      description: "Comprehensive annual reports showcasing achievements, challenges, and future plans must be submitted on schedule.",
      details: "The annual report should include student performance metrics, faculty development initiatives, infrastructure upgrades, and success stories. This helps in measuring the impact and planning future interventions.",
      icon: <FileText className="h-5 w-5 text-[#7E69AB]" />
    },
    {
      title: "Follow Pitchburg Calendar & Curriculum Consistently",
      description: "Strict adherence to the Pitchburg calendar and curriculum is essential for maintaining standardization across all backed institutes.",
      details: "The Pitchburg calendar includes schedules for mentor sessions, industry interactions, skill development workshops, and assessment timelines. Any deviation must be communicated and approved in advance.",
      icon: <Calendar className="h-5 w-5 text-[#7E69AB]" />
    },
    {
      title: "Dedicated Infrastructure for Pitchburg",
      description: "Institutes must allocate appropriate space and infrastructure for Pitchburg activities and sessions.",
      details: "A minimum of one dedicated classroom/hall with audio-visual facilities, internet connectivity, and seating for at least 50 students is required. The space should be maintained exclusively for Pitchburg-related activities.",
      icon: <Building className="h-5 w-5 text-[#7E69AB]" />
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            POLICY & RESPONSIBILITIES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Roles & Responsibilities of Institutes</h2>
          <p className="text-gray-600 text-lg">
            To ensure a successful partnership, backed institutes are expected to fulfill certain responsibilities and adhere to our policies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-[#F3EAFD] rounded-xl p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#7E69AB] p-2 rounded-lg">
                  <School className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Institute Commitments</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                These responsibilities ensure that the resources provided by Uniford Foundation are used effectively and create maximum impact for students.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Audit Reports</span>
                    <Badge variant="outline" className="bg-[#7E69AB] text-white">Quarterly</Badge>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Program Updates</span>
                    <Badge variant="outline" className="bg-[#7E69AB] text-white">Monthly</Badge>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Annual Review</span>
                    <Badge variant="outline" className="bg-[#7E69AB] text-white">Yearly</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <Accordion type="single" collapsible className="w-full">
                {responsibilities.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center text-left">
                        <div className="bg-[#F3EAFD] p-2 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-14 border-l-2 border-[#F3EAFD] ml-6 mt-2">
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-8 bg-[#1A1F2C] text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">What We Want in Return</h3>
              <p className="mb-6">
                Uniford is a non-profit organization that initiates programs, offerings, and establishments using CSR & alumni donations. We expect institutes to:
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Submit reports on time with complete transparency</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Maintain high standards of resource utilization and program implementation</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Best performing institutes receive more CSR funded opportunities, grants, and establishments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteResponsibilities;
