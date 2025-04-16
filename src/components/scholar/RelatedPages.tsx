
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Users, ListChecks, Route } from 'lucide-react';

const RelatedPages = () => {
  const pages = [
    {
      title: "What Matters",
      description: "Discover what truly matters in your academic journey",
      icon: <Book className="h-6 w-6" />,
      path: "/what-matters",
      color: "bg-blue-500"
    },
    {
      title: "Talent Hunt Alliance",
      description: "Join our network of opportunities and growth",
      icon: <Users className="h-6 w-6" />,
      path: "/talent-hunt-alliance",
      color: "bg-purple-500"
    },
    {
      title: "Programs",
      description: "Explore our comprehensive programs",
      icon: <ListChecks className="h-6 w-6" />,
      path: "/programs",
      color: "bg-green-500"
    },
    {
      title: "Scholar Journey",
      description: "See the complete scholar journey roadmap",
      icon: <Route className="h-6 w-6" />,
      path: "/#scholar-journey",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-white to-unifor-light-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">
          Explore More Opportunities
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pages.map((page, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className={`${page.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {page.icon}
                </div>
                <h3 className="font-semibold mb-2 text-unifor-dark-purple">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {page.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-unifor-purple text-unifor-purple hover:bg-unifor-purple hover:text-white"
                  asChild
                >
                  <Link to={page.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
