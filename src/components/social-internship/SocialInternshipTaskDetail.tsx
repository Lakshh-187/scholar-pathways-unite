
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Clock, Users, Award, Target } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export interface Task {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  impact: string;
  requirements?: string[];
  benefits?: string[];
  steps?: { title: string; description: string }[];
  locations?: string[];
  skills?: string[];
}

interface SocialInternshipTaskDetailProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
}

const SocialInternshipTaskDetail = ({ task, open, onClose }: SocialInternshipTaskDetailProps) => {
  const { toast } = useToast();
  
  if (!task) return null;
  
  const handleApply = () => {
    window.open('https://forms.google.com/task-registration', '_blank');
    toast({
      title: "Application Started",
      description: `You're applying for: ${task.title}`,
    });
  };
  
  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Hard": "bg-red-100 text-red-800"
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-unifor-light-purple/20 p-3 rounded-lg">
                {task.icon}
              </div>
              <div>
                <DialogTitle className="text-xl">{task.title}</DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={difficultyColor[task.difficulty]}>{task.difficulty}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3 w-3 mr-1" /> {task.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <DialogDescription className="space-y-6">
          <p className="text-base text-gray-700">{task.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-unifor-purple" /> Requirements
              </h3>
              <ul className="space-y-2">
                {task.requirements ? (
                  task.requirements.map((req, index) => (
                    <li key={index} className="text-sm flex gap-2">
                      <span className="text-unifor-purple">•</span>
                      <span>{req}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm">No specific requirements listed.</li>
                )}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-unifor-purple" /> Benefits
              </h3>
              <ul className="space-y-2">
                {task.benefits ? (
                  task.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm flex gap-2">
                      <span className="text-unifor-purple">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm">Registration fee refund and completion certificate.</li>
                )}
              </ul>
            </div>
          </div>
          
          {task.steps && task.steps.length > 0 && (
            <div>
              <h3 className="text-base font-medium mb-2">Process</h3>
              <ol className="space-y-4">
                {task.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-unifor-light-purple text-unifor-purple text-xs font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
          
          <div>
            <h3 className="text-base font-medium mb-2">Additional Information</h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Impact Level</TableCell>
                  <TableCell>{task.impact}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Duration</TableCell>
                  <TableCell>{task.duration}</TableCell>
                </TableRow>
                {task.locations && (
                  <TableRow>
                    <TableCell className="font-medium">Locations</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {task.locations.map((loc, i) => (
                          <Badge key={i} variant="outline">{loc}</Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
                {task.skills && (
                  <TableRow>
                    <TableCell className="font-medium">Skills Developed</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {task.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <Separator />
          
          <div className="bg-unifor-light-purple/10 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-unifor-purple" />
              <p className="font-medium">Previous Social Impact</p>
            </div>
            <p className="text-sm mt-2">
              This task has been completed by 45+ students in the last term, making a significant impact in local communities.
            </p>
          </div>
        </DialogDescription>
        
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" onClick={handleApply}>
            Apply Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SocialInternshipTaskDetail;
