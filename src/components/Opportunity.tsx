
import { Card, CardContent } from '@/components/ui/card';

interface OpportunityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Opportunity = ({ title, description, icon }: OpportunityProps) => {
  return (
    <Card className="border border-gray-200 hover:border-unifor-purple/50 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          <div className="bg-unifor-light-purple p-3 rounded-xl">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Opportunity;
