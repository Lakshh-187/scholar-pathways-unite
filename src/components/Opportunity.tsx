
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

interface OpportunityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Opportunity = ({ title, description, icon }: OpportunityProps) => {
  return (
    <Card className="border border-gray-200 hover:border-unifor-purple/50 transition-all hover:shadow-md group">
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          <div className="bg-unifor-light-purple p-3 rounded-xl">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <ChevronRight className="h-5 w-5 text-unifor-purple opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
            <Badge variant="outline" className="mt-3 bg-unifor-light-purple/10 text-unifor-dark-purple group-hover:bg-unifor-light-purple/20 transition-colors">
              Learn more
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Opportunity;
