
import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MemoriesTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MemoriesTabs: React.FC<MemoriesTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'news', label: 'News Articles' },
    { id: 'conferences', label: 'Conferences' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'stories', label: 'Scholar Stories' },
    { id: 'competitions', label: 'Competitions' }
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

export default MemoriesTabs;
