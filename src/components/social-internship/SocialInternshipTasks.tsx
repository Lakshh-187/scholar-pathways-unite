
import React, { useState } from 'react';
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
import SocialInternshipTaskDetail, { Task } from './SocialInternshipTaskDetail';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard = ({ task, onClick }: TaskCardProps) => {
  const { toast } = useToast();
  
  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Hard": "bg-red-100 text-red-800"
  };
  
  const handleInfo = () => {
    toast({
      title: task.title,
      description: `${task.description} This task typically takes ${task.duration} to complete.`,
    });
  };
  
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-unifor-light-purple">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="bg-unifor-light-purple/20 p-3 rounded-lg">
            {task.icon}
          </div>
          <Badge className={difficultyColor[task.difficulty]}>{task.difficulty}</Badge>
        </div>
        <CardTitle className="mt-4">{task.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2 h-10">{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium">{task.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Impact:</span>
            <span className="font-medium">{task.impact}</span>
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
          onClick={onClick}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const SocialInternshipTasks = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
  const tasks: Task[] = [
    {
      id: "campaign-hunter",
      title: "Campaign - Potential Hunter",
      description: "Identify eligible deserving students for the ID card who truly need and have potential to be selected via the Talent Hunt Alliance.",
      icon: <Users className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "15-30 days",
      impact: "High",
      requirements: [
        "Good networking skills",
        "Ability to identify deserving students",
        "Basic documentation skills",
        "Access to educational institutions"
      ],
      benefits: [
        "Registration fee refund",
        "Certificate of social internship",
        "Networking opportunities",
        "Experience with talent evaluation"
      ],
      steps: [
        {
          title: "Orientation",
          description: "Attend an online orientation session to understand the criteria for identifying potential students."
        },
        {
          title: "Outreach",
          description: "Visit educational institutions or communities to identify deserving students."
        },
        {
          title: "Documentation",
          description: "Collect basic information and prepare profiles of identified students."
        },
        {
          title: "Submission",
          description: "Submit the profiles to the Talent Hunt Alliance team for review and selection."
        }
      ],
      locations: ["Schools", "Colleges", "Community centers"],
      skills: ["Communication", "Evaluation", "Documentation", "Networking"]
    },
    {
      id: "go-green",
      title: "Go Green Planet Campaign",
      description: "Donate 8 fruit plants & farming tools to the organization camp address by parcel for sustainable farming initiatives.",
      icon: <Leaf className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Easy",
      duration: "7-15 days",
      impact: "Medium",
      requirements: [
        "Ability to procure fruit plants",
        "Basic farming tools",
        "Shipping capability to organization camp"
      ],
      benefits: [
        "Registration fee refund",
        "Certificate of social internship",
        "Contribution to environmental sustainability"
      ],
      steps: [
        {
          title: "Procurement",
          description: "Buy or collect 8 fruit plant saplings suitable for the local climate."
        },
        {
          title: "Tools",
          description: "Purchase basic farming tools as specified in the guidelines."
        },
        {
          title: "Packaging",
          description: "Properly package the plants and tools to ensure safe delivery."
        },
        {
          title: "Shipping",
          description: "Send the package to the organization camp address provided."
        }
      ],
      locations: ["Any location with shipping access"],
      skills: ["Environmental awareness", "Plant care", "Logistics"]
    },
    {
      id: "social-welfare",
      title: "Social Welfare Mentor",
      description: "Apply to be a mentor and teach in Uniford Council affiliated schools for 15-30 days after verification.",
      icon: <GraduationCap className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Hard",
      duration: "15-30 days",
      impact: "Very High",
      requirements: [
        "Teaching aptitude",
        "Subject matter expertise",
        "Availability for 15-30 days",
        "Background verification clearance"
      ],
      benefits: [
        "Registration fee refund",
        "Premium teaching certificate",
        "Recommendation letter",
        "Teaching experience",
        "Potential for extended opportunities"
      ],
      steps: [
        {
          title: "Application",
          description: "Submit your application with educational background and subject preferences."
        },
        {
          title: "Verification",
          description: "Complete the background verification process."
        },
        {
          title: "Training",
          description: "Attend a brief training session on teaching methodologies."
        },
        {
          title: "Placement",
          description: "Get placed in a Uniford Council affiliated school."
        },
        {
          title: "Teaching",
          description: "Complete 15-30 days of teaching assignment."
        }
      ],
      locations: ["Affiliated schools across the country"],
      skills: ["Teaching", "Communication", "Leadership", "Subject expertise", "Patience"]
    },
    {
      id: "cancer-patients",
      title: "Collect for Cancer Patients",
      description: "Donate female hair that will be used for cancer patients by launching a drive and collecting above 500g.",
      icon: <Heart className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "15-30 days",
      impact: "High",
      requirements: [
        "Organizing capability",
        "Access to potential hair donors",
        "Basic event management skills",
        "Hair collection logistics"
      ],
      benefits: [
        "Registration fee refund",
        "Certificate of social internship",
        "Direct impact on cancer patients' lives",
        "Event management experience"
      ],
      steps: [
        {
          title: "Planning",
          description: "Plan a hair donation drive with date, venue, and promotional strategy."
        },
        {
          title: "Awareness",
          description: "Create awareness about the importance of hair donation for cancer patients."
        },
        {
          title: "Drive Execution",
          description: "Execute the hair donation drive with proper collection procedures."
        },
        {
          title: "Submission",
          description: "Submit the collected hair (minimum 500g) to the designated address."
        }
      ],
      locations: ["Colleges", "Communities", "Salons"],
      skills: ["Event management", "Communication", "Awareness creation", "Logistics"]
    },
    {
      id: "blood-donation",
      title: "Blood Donation Drive",
      description: "Donate blood and/or volunteer to manage blood donation camps hosted with partner NGOs and hospitals.",
      icon: <Droplet className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Medium",
      duration: "1-5 days",
      impact: "High",
      requirements: [
        "Medical fitness for donation",
        "Or organizing capability for volunteers",
        "Coordination with local hospitals/NGOs"
      ],
      benefits: [
        "Registration fee refund",
        "Certificate of social internship",
        "Life-saving impact",
        "Healthcare exposure"
      ],
      steps: [
        {
          title: "Registration",
          description: "Register yourself as a donor or volunteer organizer."
        },
        {
          title: "Coordination",
          description: "Coordinate with local hospitals or NGOs for the drive."
        },
        {
          title: "Drive Execution",
          description: "Donate blood or manage the donation camp operations."
        },
        {
          title: "Reporting",
          description: "Submit a report with pictures and number of donors/units collected."
        }
      ],
      locations: ["Hospitals", "Colleges", "Community centers"],
      skills: ["Healthcare awareness", "Event management", "Community service"]
    },
    {
      id: "stem-kits",
      title: "Donate STEM Kits",
      description: "Donate educational kits like robotics, STEM, etc. via parcel for underprivileged children's education.",
      icon: <Gift className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Easy",
      duration: "7-15 days",
      impact: "Medium",
      requirements: [
        "Ability to procure STEM kits",
        "Basic knowledge of educational tools",
        "Shipping capability"
      ],
      benefits: [
        "Registration fee refund",
        "Certificate of social internship",
        "Contribution to educational equity"
      ],
      steps: [
        {
          title: "Selection",
          description: "Select appropriate STEM kits based on provided guidelines."
        },
        {
          title: "Procurement",
          description: "Purchase or assemble the selected STEM kits."
        },
        {
          title: "Packaging",
          description: "Package the kits securely for shipping."
        },
        {
          title: "Shipping",
          description: "Ship the package to the designated address for distribution."
        }
      ],
      locations: ["Any location with shipping access"],
      skills: ["Educational awareness", "Resource selection", "Logistics"]
    },
    {
      id: "innovation",
      title: "Donate Innovation",
      description: "If you're an innovator, donate something innovative that can help in social welfare, like software or hardware solutions.",
      icon: <Lightbulb className="h-6 w-6 text-unifor-purple" />,
      difficulty: "Hard",
      duration: "Varies",
      impact: "Very High",
      requirements: [
        "Technical skills in software/hardware development",
        "Creative problem-solving ability",
        "Understanding of social welfare needs"
      ],
      benefits: [
        "Registration fee refund",
        "Innovation certificate",
        "Potential for implementation of your solution",
        "Portfolio enhancement",
        "Mentorship opportunities"
      ],
      steps: [
        {
          title: "Proposal",
          description: "Submit a proposal of your innovative solution for social welfare."
        },
        {
          title: "Feedback",
          description: "Receive feedback and suggestions from expert panel."
        },
        {
          title: "Development",
          description: "Develop or refine your innovation as per feedback."
        },
        {
          title: "Submission",
          description: "Submit your final innovation with documentation and usage instructions."
        }
      ],
      locations: ["Remote work possible"],
      skills: ["Innovation", "Technical skills", "Problem-solving", "Documentation"]
    }
  ];

  const handleOpenDetails = (task: Task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Social Impact Task</CardTitle>
          <CardDescription>
            Select one of the following tasks to complete your social internship. Each task has different requirements and impact levels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onClick={() => handleOpenDetails(task)} 
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <SocialInternshipTaskDetail 
        task={selectedTask} 
        open={selectedTask !== null}
        onClose={handleCloseDetails}
      />
    </>
  );
};

export default SocialInternshipTasks;
