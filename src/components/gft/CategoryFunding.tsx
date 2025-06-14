
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Lightbulb, Leaf, Users, Building } from 'lucide-react';

const CategoryFunding = () => {
  const categories = [
    {
      title: "A Category (70% Funding)",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-green-500",
      badgeColor: "bg-green-100 text-green-800",
      domains: [
        "Education", "Health", "Innovation", 
        "Sustainability", "Environment", "Eco-friendly", 
        "Non-profits", "Social Activist"
      ],
      description: "Highest priority domains with maximum funding support"
    },
    {
      title: "B Category (50% Funding)",
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-800",
      domains: [
        "Technology Startups", "Business Solutions", 
        "E-commerce", "Digital Services"
      ],
      description: "Commercial ventures with substantial funding support"
    },
    {
      title: "C Category (30% Funding)",
      icon: <Users className="h-6 w-6" />,
      color: "bg-orange-500",
      badgeColor: "bg-orange-100 text-orange-800",
      domains: [
        "General Business", "Personal Projects", 
        "Portfolio Websites", "Blogs"
      ],
      description: "Standard support for general tech initiatives"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">Category-wise Funding Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Different categories receive different levels of funding support based on their social impact and priority
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Eligible Domains:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.domains.map((domain, domainIndex) => (
                      <Badge key={domainIndex} className={category.badgeColor}>
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Funding Coverage</p>
                    <div className="text-2xl font-bold text-unifor-purple">
                      {category.title.includes('70%') ? '70%' : 
                       category.title.includes('50%') ? '50%' : '30%'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-unifor-dark-purple mb-2">Priority Matrix</h3>
            <p className="text-gray-600">How we determine your category and funding level</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                High Priority Factors
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Social impact and community benefit</li>
                <li>• Environmental sustainability focus</li>
                <li>• Educational or healthcare initiatives</li>
                <li>• Non-profit and activist organizations</li>
                <li>• Innovation in critical sectors</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Evaluation Criteria
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Profile screening and assessment</li>
                <li>• Vision alignment with our mission</li>
                <li>• Potential for scalable impact</li>
                <li>• Technical complexity and scope</li>
                <li>• Long-term sustainability plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFunding;
