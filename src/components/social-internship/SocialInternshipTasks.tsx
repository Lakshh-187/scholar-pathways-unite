
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Leaf, 
  GraduationCap, 
  Heart, 
  Droplet, 
  Gift, 
  Lightbulb,
  ExternalLink,
  Info
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface TaskCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  impact: string;
}

const TaskCard = ({ title, description, icon, difficulty, duration, impact }: TaskCardProps) => {
  const { toast } = useToast();
  
  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Hard": "bg-red-100 text-red-800"
  };
  
  const handleApply = () => {
    window.open('https://forms.google.com/task-registration', '_blank');
    toast({
      title: "Task Registration",
      description: `You're applying for: ${title}`,
    });
  };
  
  const handleInfo = () => {
    toast({
      title: title,
      description: `${description} This task typically takes ${duration} to complete.`,
    });
  };
  
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-unifor-light-purple">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="bg-unifor-light-purple/20 p-3 rounded-lg">
            {icon}
          </div>
          <Badge className={difficultyColor[difficulty]}>{difficulty}</Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2 h-10">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Impact:</span>
            <span className="font-medium">{impact}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-10 p-0" 
          onClick={handleInfo}
        >
          <Info className="h-4 w-4" />
        </Button>
        <Button 
          className="flex-1 bg-unifor-purple hover:bg-unifor-dark-purple"
          onClick={handleApply}
        >
          Apply
          <ExternalLink className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const SocialInternshipTasks = () => {
  const tasks: TaskCardProps[] = [
    {
      title: "Campaign - Potential Hunter",
      description: "Identify eligible deserving students for the ID card who truly need and have potential to be selected via the Talent Hunt Alliance.",
      icon: <Users className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "15-30 days",
      impact: "High"
    },
    {
      title: "Go Green Planet Campaign",
      description: "Donate 8 fruit plants & farming tools to the organization camp address by parcel for sustainable farming initiatives.",
      icon: <Leaf className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Easy",
      duration: "7-15 days",
      impact: "Medium"
    },
    {
      title: "Social Welfare Mentor",
      description: "Apply to be a mentor and teach in Uniford Council affiliated schools for 15-30 days after verification.",
      icon: <GraduationCap className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Hard",
      duration: "15-30 days",
      impact: "Very High"
    },
    {
      title: "Collect for Cancer Patients",
      description: "Donate female hair that will be used for cancer patients by launching a drive and collecting above 500g.",
      icon: <Heart className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "15-30 days",
      impact: "High"
    },
    {
      title: "Blood Donation Drive",
      description: "Donate blood and/or volunteer to manage blood donation camps hosted with partner NGOs and hospitals.",
      icon: <Droplet className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "1-5 days",
      impact: "High"
    },
    {
      title: "Donate STEM Kits",
      description: "Donate educational kits like robotics, STEM, etc. via parcel for underprivileged children's education.",
      icon: <Gift className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Easy",
      duration: "7-15 days",
      impact: "Medium"
    },
    {
      title: "Donate Innovation",
      description: "If you're an innovator, donate something innovative that can help in social welfare, like software or hardware solutions.",
      icon: <Lightbulb className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Hard",
      duration: "Varies",
      impact: "Very High"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Social Impact Task</CardTitle>
        <CardDescription>
          Select one of the following tasks to complete your social internship. Each task has different requirements and impact levels.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialInternshipTasks;
