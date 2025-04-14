import { useState } from "react";
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
  Lightbulb  // Replace Brain with Lightbulb
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MythData {
  myth: string;
  reality: string;
  icon: LucideIcon;
  solution: string;
  bullets?: string[];
}

const IllusionFAQ = () => {
  const [openIllusion, setOpenIllusion] = useState<number | null>(null);
  
  const toggleIllusion = (index: number) => {
    setOpenIllusion(openIllusion === index ? null : index);
  };
  
  const mythsFAQ: MythData[] = [
    {
      myth: "Engineering, Management, and Other Job Markets Are Not Changing",
      reality: "Job markets are highly disrupted by AI, layoffs, and skill gaps",
      icon: AlertTriangle,
      solution: "Only 1 in 10 students have the skills companies want today! Most focus on marks instead of practical skills.",
      bullets: [
        "AI Boom & Layoffs: Many jobs are affected by the rise of AI and layoffs due to geopolitics.",
        "Too Many Candidates, Too Few Jobs: There are more candidates than opportunities.",
        "Skills Gap: Many students focus only on marks and basic projects from the internet."
      ]
    },
    {
      myth: "AI will replace all jobs!",
      reality: "AI helps, but it won't replace skilled people who know how to use it!",
      icon: Lightbulb, // Replace Brain with Lightbulb
      solution: "Time-Management and Efficiency Are Key! Companies want people who can use AI and tools to work faster.",
      bullets: [
        "AI & Automation: Companies want people who can use AI and tools to work faster.",
        "Smart Coding: What used to take 10 days to write can now be done in 1 day with AI!",
        "Augmentation: AI is a tool that augments human capabilities rather than replacing them."
      ]
    },
    {
      myth: "Projects and Certificates are enough",
      reality: "Experience is King: Today, companies prefer candidates with practical experience over just certificates.",
      icon: File,
      solution: "Students who do internships are 2x more likely to get a job offer!",
      bullets: [
        "Experience is King: Do at least 4-5 internships instead of just showing projects from the internet.",
        "Recognized Projects: Compete in Hackathons or Tekathons to showcase real skills.",
        "Portfolio Strength: Real experience makes your portfolio stronger and more genuine."
      ]
    },
    {
      myth: "I'll do internships later",
      reality: "Many top students start internships as early as 9th grade.",
      icon: Clock,
      solution: "Early experience builds a stronger foundation and gives you a competitive edge.",
      bullets: [
        "Early Experience: Starting early gives you more time to build a comprehensive portfolio.",
        "Competitive Edge: You'll be ahead of peers who wait until their final years.",
        "Skill Development: More time to develop and refine your practical skills."
      ]
    },
    {
      myth: "Getting an internship as a fresher is tough",
      reality: "There are many modern methods to secure internships even as a fresher.",
      icon: UserCheck,
      solution: "Easy Ways to Get an Internship: Use CAF, join programs like Scholar Program, or apply through referrals.",
      bullets: [
        "Use modern methods like CAF (Common Application Form) or Super Set Form.",
        "Join programs like the Scholar Program that connect students with opportunities.",
        "Apply through referrals which have a higher success rate than cold applications."
      ]
    },
    {
      myth: "Paying for internships is fine",
      reality: "Paid Internships are actually just training programs and not real internships.",
      icon: Info,
      solution: "Real internships should either be unpaid learning opportunities or pay you for your work.",
      bullets: [
        "Real internships provide valuable experience without charging you.",
        "If you're paying, it's likely a training program, not an internship.",
        "Focus on opportunities that value your time and skills."
      ]
    },
    {
      myth: "Internships and jobs serve different purposes",
      reality: "A job is long-term and paid, while an internship is typically short-term and focuses on learning.",
      icon: Users,
      solution: "Internships are designed to gain experience, not just earn money.",
      bullets: [
        "Learning Opportunity: Internships are designed to gain experience, not just earn money.",
        "Training Ground: They offer a chance to develop skills in a real-world setting.",
        "Career Boost: An internship gives you exposure to work culture and helps build your network."
      ]
    },
    {
      myth: "No Skills, No Internship",
      reality: "You don't need a lot of skills to get an internship—it's a learning experience!",
      icon: Sparkles,
      solution: "Enthusiasm is Key: Show your excitement to learn and your eagerness to grow.",
      bullets: [
        "Enthusiasm is Key: Show your excitement to learn and your eagerness to grow.",
        "Start with the Basics: Employers don't expect you to be an expert.",
        "Step-by-Step Growth: Start with internships that fit your current level."
      ]
    },
    {
      myth: "You Need to Be a Certain Age/Year to Do an Internship",
      reality: "You can do an internship at any stage of education.",
      icon: GraduationCap,
      solution: "Internships are open to anyone, anytime!",
      bullets: [
        "In 9th to 12th grade: Many companies offer high school internship programs.",
        "In college, any semester: You don't need to wait until your final year.",
        "Age is irrelevant: What matters is your willingness to learn and contribute."
      ]
    },
    {
      myth: "I Can't Manage Both an Internship and College Work",
      reality: "An internship doesn't have to take up all your time. Many are flexible and designed to fit into your schedule.",
      icon: TimerOff,
      solution: "Find flexible, online internships that fit your schedule.",
      bullets: [
        "Online Internships: Many are entirely online, requiring only a few hours each week.",
        "Time Management: Set aside specific blocks of time for internships.",
        "Project-based Work: Many internships offer project-based tasks, allowing you to work at your own pace."
      ]
    },
    {
      myth: "The More You Intern, the More Projects You Gain",
      reality: "Quality matters more than quantity. A few deep, meaningful internships are better than many superficial ones.",
      icon: Rocket,
      solution: "Focus on getting real-world experience through quality internships.",
      bullets: [
        "Internships = Projects: Every internship provides hands-on projects for your portfolio.",
        "Real-world Experience: Internships teach you more than just theory.",
        "Stand Out: More meaningful experience makes you more attractive to employers."
      ]
    },
    {
      myth: "Getting an Internship is Tough",
      reality: "It's not about how hard it is, but how consistent you are in your efforts.",
      icon: ScrollText,
      solution: "Focus on Consistency, Not Difficulty",
      bullets: [
        "Consistency is Key: Regular applications and follow-ups will get you closer to your goal.",
        "Awareness and Approach: Many students simply lack the right knowledge or approach.",
        "Modern Techniques: Use personal branding, networking, and resume optimization."
      ]
    }
  ];
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-700 px-4 py-1 mb-4">
              MYTHS & REALITIES
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Common Illusions About Career Success</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Let's debunk the myths that might be holding you back from reaching your full potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border-purple-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Current Market Reality
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Understanding today's job market landscape
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-start gap-3 text-gray-200">
                  <Laptop className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>AI is transforming how we work across all industries</span>
                </p>
                <p className="flex items-start gap-3 text-gray-200">
                  <Code2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Modern employers value practical skills over academic credentials</span>
                </p>
                <p className="flex items-start gap-3 text-gray-200">
                  <FileQuestion className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>76% of students never reach the interview stage due to filtering</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 border-blue-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-blue-300 flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Student Success Factors
                </CardTitle>
                <CardDescription className="text-gray-300">
                  What truly matters for career success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-start gap-3 text-gray-200">
                  <Lightbulb className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Problem-solving skills demonstrated through real projects</span>
                </p>
                <p className="flex items-start gap-3 text-gray-200">
                  <Users className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Practical experience through internships and team collaborations</span>
                </p>
                <p className="flex items-start gap-3 text-gray-200">
                  <Sparkles className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Ability to leverage AI and modern tools to increase productivity</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Common Myths Debunked</h3>
            
            {mythsFAQ.map((illusion, index) => (
              <Collapsible 
                key={index} 
                open={openIllusion === index} 
                onOpenChange={() => toggleIllusion(index)}
                className="border border-purple-700/50 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="w-full">
                  <div className={`flex items-center justify-between p-6 hover:bg-purple-900/40 transition-all cursor-pointer ${openIllusion === index ? 'bg-purple-900/40' : 'bg-gray-800/90'}`}>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-purple-900/70 flex items-center justify-center">
                        <illusion.icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <h3 className="text-xl font-medium text-white">{illusion.myth}</h3>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-purple-300 transition-transform duration-200 ${openIllusion === index ? 'rotate-90' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-6 bg-gray-800/50 border-t border-purple-700/30">
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-red-300 mb-2">Myth:</p>
                      <p className="text-gray-300">{illusion.myth}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-green-300 mb-2">Reality:</p>
                      <p className="text-gray-300">{illusion.reality}</p>
                    </div>
                    
                    <div>
                      <p className="text-lg font-semibold text-blue-300 mb-2">Solution:</p>
                      <p className="text-gray-300 mb-4">{illusion.solution}</p>
                      
                      {illusion.bullets && (
                        <ul className="space-y-3 mt-4">
                          {illusion.bullets.map((bullet, i) => (
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
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl border border-purple-700/30">
            <p className="text-xl text-center text-purple-200 font-medium">
              Don't let these myths hold you back. Start building your real-world experience today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IllusionFAQ;
