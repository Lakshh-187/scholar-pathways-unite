
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, CheckCircle } from 'lucide-react';

const FundingExamples = () => {
  const examples = [
    {
      title: "E-commerce Website (Education Sector)",
      category: "A",
      totalCost: "₹50,000",
      ourFunding: "₹35,000",
      yourContribution: "₹15,000",
      percentage: "70%",
      description: "Fully coded & functional e-commerce platform for educational institution",
      features: ["Custom Design", "Payment Gateway", "Admin Panel", "Mobile Responsive", "SEO Optimized"]
    },
    {
      title: "Business Portal (Healthcare)",
      category: "A",
      totalCost: "₹75,000",
      ourFunding: "₹52,500",
      yourContribution: "₹22,500",
      percentage: "70%",
      description: "Comprehensive healthcare management portal with AI integration",
      features: ["Patient Management", "AI Diagnostics", "Appointment System", "Report Generation", "Data Analytics"]
    },
    {
      title: "Startup Website (Technology)",
      category: "B",
      totalCost: "₹40,000",
      ourFunding: "₹20,000",
      yourContribution: "₹20,000",
      percentage: "50%",
      description: "Professional startup website with modern features",
      features: ["Landing Page", "Product Showcase", "Contact Forms", "Blog Section", "Social Integration"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">Real Funding Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our funding model works with actual project examples and cost breakdowns
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {examples.map((example, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${example.category === 'A' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    Category {example.category}
                  </Badge>
                  <span className="text-2xl font-bold text-unifor-purple">{example.percentage}</span>
                </div>
                <CardTitle className="text-lg">{example.title}</CardTitle>
                <p className="text-sm text-gray-600">{example.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Total Cost</p>
                        <p className="text-xl font-bold">{example.totalCost}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Our Funding</p>
                        <p className="text-xl font-bold text-green-600">{example.ourFunding}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-gray-600 text-sm">Your Contribution</p>
                      <p className="text-lg font-semibold">{example.yourContribution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Included Features:</h4>
                    <ul className="space-y-1">
                      {example.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-unifor-purple to-unifor-dark-purple rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <Calculator className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-2">Additional Benefits</h3>
            <p className="text-purple-100">Beyond funding, you get these valuable advantages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Tax Benefits</h4>
              <p className="text-sm text-purple-100">12A & 80G certification helps with tax assumptions and deductions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-3">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm text-purple-100">Professional development standards and quality control</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-3">
                <Calculator className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Transparent Pricing</h4>
              <p className="text-sm text-purple-100">Clear cost breakdown with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingExamples;
