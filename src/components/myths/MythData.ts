
import { 
  BookOpen, 
  Building, 
  Code, 
  Database, 
  GraduationCap, 
  Lightbulb, 
  LineChart, 
  Link2, 
  Rocket, 
  School, 
  Target, 
  Users 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Myth {
  id: number;
  icon: LucideIcon;
  title: string;
  myth: string;
  reality: string;
}

export const myths: Myth[] = [
  {
    id: 1,
    icon: School,
    title: "Education & Skills",
    myth: "Only grades and degrees matter for job prospects",
    reality: "Practical skills, certifications, and experience play an equally important role in career opportunities"
  },
  {
    id: 2,
    icon: Building,
    title: "College Selection",
    myth: "Only top-tier colleges provide good opportunities",
    reality: "Many regional colleges offer excellent programs and placements through industry partnerships"
  },
  {
    id: 3,
    icon: Code,
    title: "Technical Skills",
    myth: "Technical skills are only for IT jobs",
    reality: "Digital literacy and technical skills are essential across all modern careers"
  },
  {
    id: 4,
    icon: Users,
    title: "Networking",
    myth: "Individual excellence is enough for success",
    reality: "Professional networking and soft skills significantly impact career growth"
  },
  {
    id: 5,
    icon: LineChart,
    title: "Career Growth",
    myth: "Career path is fixed after graduation",
    reality: "Careers evolve with continuous learning and adaptation to market needs"
  },
  {
    id: 6,
    icon: Target,
    title: "Job Search",
    myth: "More applications guarantee job success",
    reality: "Targeted applications with relevant skills and preparation yield better results"
  },
  {
    id: 7,
    icon: Database,
    title: "Industry Knowledge",
    myth: "Theoretical knowledge is sufficient",
    reality: "Practical industry exposure and real-world projects are crucial"
  },
  {
    id: 8,
    icon: Link2,
    title: "Industry Connections",
    myth: "College placements are the only way to industry",
    reality: "Multiple pathways exist through internships, projects, and networking"
  },
  {
    id: 9,
    icon: Lightbulb,
    title: "Innovation",
    myth: "Innovation is only for entrepreneurs",
    reality: "Innovation skills are valuable in every role and industry"
  },
  {
    id: 10,
    icon: BookOpen,
    title: "Learning Approach",
    myth: "Learning stops after graduation",
    reality: "Lifelong learning is essential for career sustainability"
  },
  {
    id: 11,
    icon: GraduationCap,
    title: "Academic Success",
    myth: "Academic performance predicts career success",
    reality: "Overall skill development and practical application matter more"
  },
  {
    id: 12,
    icon: Rocket,
    title: "Career Start",
    myth: "First job defines entire career",
    reality: "Career paths are flexible and can evolve with experience and skills"
  }
];
