
import { FC } from 'react';
import { 
  IdCard, 
  Users, 
  BadgeCheck, 
  Briefcase, 
  Building, 
  Calendar,
  Award,
  Presentation,
  Database,
  Store,
  Medal,
  UserCheck,
  Headphones,
  FileText,
  Rocket
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface BenefitItem {
  name: string;
  icon: JSX.Element;
}

const ScholarIDFeatures: FC = () => {
  const scholarIDFeatures: Record<string, BenefitItem[]> = {
    "Scholar ID Card": [
      { name: "Internships", icon: <Briefcase className="h-5 w-5" /> },
      { name: "Project Expo", icon: <Presentation className="h-5 w-5" /> },
      { name: "Uni-Pitch", icon: <Building className="h-5 w-5" /> },
      { name: "Programs", icon: <Calendar className="h-5 w-5" /> },
      { name: "Cohorts", icon: <Users className="h-5 w-5" /> },
      { name: "YLC Challenges", icon: <Award className="h-5 w-5" /> },
      { name: "Workshops", icon: <Presentation className="h-5 w-5" /> },
      { name: "Platforms", icon: <Database className="h-5 w-5" /> },
    ],
    "Membership ID Card": [
      { name: "Offline Campaigns", icon: <Users className="h-5 w-5" /> },
      { name: "Conferences", icon: <Presentation className="h-5 w-5" /> },
      { name: "Tech Fest", icon: <Rocket className="h-5 w-5" /> },
      { name: "Project Expo", icon: <Building className="h-5 w-5" /> },
      { name: "Learning Portals", icon: <Database className="h-5 w-5" /> },
      { name: "SEP-700", icon: <Calendar className="h-5 w-5" /> },
      { name: "Offline Events", icon: <Calendar className="h-5 w-5" /> },
      { name: "Premium Store", icon: <Store className="h-5 w-5" /> },
      { name: "Drives & Mentorship", icon: <Headphones className="h-5 w-5" /> },
      { name: "Help Desk", icon: <Headphones className="h-5 w-5" /> },
      { name: "Pitchburg", icon: <Presentation className="h-5 w-5" /> },
      { name: "Stanburg", icon: <Building className="h-5 w-5" /> },
    ],
    "Verified Badge": [
      { name: "Profile Screening", icon: <UserCheck className="h-5 w-5" /> },
      { name: "Referrals & LOR", icon: <FileText className="h-5 w-5" /> },
      { name: "Recommendations", icon: <Award className="h-5 w-5" /> },
      { name: "AI Common Application Form", icon: <Database className="h-5 w-5" /> },
      { name: "Talent Hunt Alliance", icon: <Users className="h-5 w-5" /> },
      { name: "Featured Opportunities", icon: <Medal className="h-5 w-5" /> },
      { name: "Special Invitations", icon: <Calendar className="h-5 w-5" /> },
      { name: "YLC", icon: <Award className="h-5 w-5" /> },
      { name: "Paid Uniford Internship", icon: <Briefcase className="h-5 w-5" /> },
    ]
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    })
  };

  const benefitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        duration: 0.3,
      }
    }
  };
  
  const colors = {
    "Scholar ID Card": "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200",
    "Membership ID Card": "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
    "Verified Badge": "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200",
  };
  
  const iconColors = {
    "Scholar ID Card": "text-purple-600 bg-purple-100",
    "Membership ID Card": "text-blue-600 bg-blue-100",
    "Verified Badge": "text-amber-600 bg-amber-100",
  };
  
  const badgeColors = {
    "Scholar ID Card": "bg-purple-100 text-purple-800 hover:bg-purple-200",
    "Membership ID Card": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "Verified Badge": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  };

  const cardIcons = {
    "Scholar ID Card": <IdCard className="h-10 w-10 text-purple-600" />,
    "Membership ID Card": <Users className="h-10 w-10 text-blue-600" />,
    "Verified Badge": <BadgeCheck className="h-10 w-10 text-amber-600" />
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SCHOLAR TRANSFORMATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Students to Specialized Scholars</h2>
          <p className="text-gray-600">
            Uniford Scholar ID empowers students with access to exclusive opportunities through three distinct credentials
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(scholarIDFeatures).map(([idType, benefits], index) => (
              <motion.div
                key={idType}
                className="flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <Card className={cn("h-full shadow-md hover:shadow-lg transition-shadow", colors[idType as keyof typeof colors])}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={cn("p-3 rounded-full", iconColors[idType as keyof typeof iconColors])}>
                        {cardIcons[idType as keyof typeof cardIcons]}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{idType}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {idType === "Scholar ID Card" && "Primary identification for all basic benefits"}
                      {idType === "Membership ID Card" && "Enhanced access to exclusive offline events"}
                      {idType === "Verified Badge" && "Premium recognition with elite opportunities"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {benefits.map((benefit, i) => (
                        <motion.div
                          key={`${idType}-${benefit.name}`}
                          className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                          variants={benefitVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-2", 
                            iconColors[idType as keyof typeof iconColors])}>
                            {benefit.icon}
                          </div>
                          <span className="text-xs font-medium">{benefit.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-3">Uniford Backs Scholars Through:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-unifor-light-purple text-unifor-dark-purple text-sm px-4 py-2">
                <span className="font-bold mr-1">THA</span> 
                <span className="text-xs">(Talent Hunt Alliance)</span>
              </Badge>
              <Badge className="bg-unifor-light-purple text-unifor-dark-purple text-sm px-4 py-2">
                <span className="font-bold mr-1">CAF</span>
                <span className="text-xs">(Common Application Form)</span>
              </Badge>
              <Badge className="bg-unifor-light-purple text-unifor-dark-purple text-sm px-4 py-2">
                <span className="font-bold mr-1">RPO</span>
                <span className="text-xs">(Recruitment Process Outsourcing)</span>
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScholarIDFeatures;
