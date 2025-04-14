
import { ReactNode } from "react";
import { 
  AlertTriangle, 
  ChevronRight, 
  Clock, 
  Code2, 
  File, 
  FileQuestion, 
  GraduationCap, 
  Info, 
  Laptop, 
  LucideIcon,
  Rocket, 
  ScrollText, 
  Sparkles, 
  TimerOff, 
  UserCheck, 
  Users,
  Lightbulb
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MythData } from "./MythData";

interface MythCardProps {
  myth: MythData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Clock,
  File,
  GraduationCap,
  Info,
  Lightbulb,
  Rocket,
  ScrollText,
  Sparkles,
  TimerOff,
  UserCheck,
  Users
};

export const MythCard = ({ myth, isOpen, onToggle, index }: MythCardProps) => {
  // Get the icon component from the map
  const IconComponent = typeof myth.icon === 'string' ? iconMap[myth.icon] : myth.icon;
  
  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={onToggle}
      className="border border-purple-700/50 rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="w-full">
        <div className={`flex items-center justify-between p-6 hover:bg-purple-900/40 transition-all cursor-pointer ${isOpen ? 'bg-purple-900/40' : 'bg-gray-800/90'}`}>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-purple-900/70 flex items-center justify-center">
              {IconComponent && <IconComponent className="h-5 w-5 text-purple-300" />}
            </div>
            <h3 className="text-xl font-medium text-white">{myth.myth}</h3>
          </div>
          <ChevronRight className={`h-5 w-5 text-purple-300 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-6 bg-gray-800/50 border-t border-purple-700/30">
          <div className="mb-4">
            <p className="text-lg font-semibold text-red-300 mb-2">Myth:</p>
            <p className="text-gray-300">{myth.myth}</p>
          </div>
          
          <div className="mb-4">
            <p className="text-lg font-semibold text-green-300 mb-2">Reality:</p>
            <p className="text-gray-300">{myth.reality}</p>
          </div>
          
          <div>
            <p className="text-lg font-semibold text-blue-300 mb-2">Solution:</p>
            <p className="text-gray-300 mb-4">{myth.solution}</p>
            
            {myth.bullets && (
              <ul className="space-y-3 mt-4">
                {myth.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-900/70 flex-shrink-0 flex items-center justify-center mt-1">
                      <span className="text-blue-300 text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
