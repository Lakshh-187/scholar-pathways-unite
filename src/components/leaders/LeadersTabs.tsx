
import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LeadersTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const LeadersTabs: React.FC<LeadersTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'volunteers', label: 'Volunteers' },
    { id: 'team', label: 'Core Team' },
    { id: 'advisors', label: 'Advisors' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'chairpersons', label: 'Chairpersons' },
    { id: 'councils', label: 'Councils' }
  ];

  return (
    <div className="my-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full overflow-x-auto flex-wrap justify-start bg-white/5 backdrop-blur-sm p-1 mb-8 border rounded-lg">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "py-2.5 px-4 text-sm font-medium transition-all duration-200",
                activeTab === tab.id ? "bg-primary text-white" : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default LeadersTabs;
