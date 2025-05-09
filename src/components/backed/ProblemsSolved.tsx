
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { FileText, AlertTriangle } from 'lucide-react';

const ProblemsSolved = () => {
  const problems = [
    {
      problem: "87% institutes never get CSR Projects & programs",
      cause: "Lack of connectivity and awareness",
      solution: "Direct connection to CSR funding sources and project opportunities",
      impact: "Increased access to resources and funding for quality education"
    },
    {
      problem: "79% students are not credible, lack practical exposure",
      cause: "High fees and financial barriers",
      solution: "Free resources, platforms and opportunities through CSR funding",
      impact: "Improved practical skills and industry readiness"
    },
    {
      problem: "Students pay for resources that are actually free",
      cause: "Lack of awareness about free opportunities",
      solution: "Access to SEP-700 portal and other free educational resources",
      impact: "Reduced financial burden on students and families"
    },
    {
      problem: "Educational quality compromised due to financial constraints",
      cause: "Limited resources and infrastructure",
      solution: "CSR grants for infrastructure and quality enhancement",
      impact: "Improved educational standards and learning outcomes"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            PROBLEMS SOLVED
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Educational Challenges We Address</h2>
          <p className="text-gray-600 text-lg">
            Our backing program is designed to solve critical challenges faced by institutes and students in accessing quality education.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#F3EAFD]">
                <TableRow>
                  <TableHead className="text-[#7E69AB] font-semibold">Problem</TableHead>
                  <TableHead className="text-[#7E69AB] font-semibold">Root Cause</TableHead>
                  <TableHead className="text-[#7E69AB] font-semibold">Our Solution</TableHead>
                  <TableHead className="text-[#7E69AB] font-semibold">Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <TableCell className="font-medium">{item.problem}</TableCell>
                    <TableCell>{item.cause}</TableCell>
                    <TableCell>{item.solution}</TableCell>
                    <TableCell>{item.impact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold mb-6">Our Core Philosophy</h3>
          
          <div className="bg-[#F3EAFD] rounded-xl p-6">
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-[#7E69AB] mr-3" />
              <h4 className="text-xl font-semibold">Why Pay Fees, If It's Free?</h4>
            </div>
            <p className="text-gray-600">
              We believe that quality education should not be a privilege but a right. Through our CSR-funded initiatives, we aim to make premium educational resources accessible to all students without financial burden.
            </p>
          </div>
          
          <Alert className="border-red-100 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-600">What We Stand Against</AlertTitle>
            <AlertDescription className="text-gray-600">
              <ul className="space-y-2 mt-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                  <span>Institutions that charge for recognitions and awards</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                  <span>Commission-based models that increase fees for students</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                  <span>Forcing students to purchase unnecessary items</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                  <span>Lack of transparency in audit and documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                  <span>Gambling, betting, and other unethical activities</span>
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;
