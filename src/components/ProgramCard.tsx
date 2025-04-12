
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  badgeText?: string;
}

const ProgramCard = ({ title, description, features, icon, badgeText }: ProgramCardProps) => {
  return (
    <Card className="glass-card h-full flex flex-col group hover:translate-y-[-8px] transition-all">
      <CardHeader className="pb-4">
        {badgeText && (
          <Badge className="self-start bg-unifor-light-purple text-unifor-dark-purple mb-3">
            {badgeText}
          </Badge>
        )}
        <div className="bg-unifor-light-purple p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="h-5 w-5 text-white rounded-full bg-unifor-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full group-hover:bg-unifor-purple text-unifor-dark-purple group-hover:text-white bg-white border border-unifor-purple transition-all">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
