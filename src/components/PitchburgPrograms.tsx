
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Award, 
  BookOpen, 
  Globe, 
  GraduationCap, 
  Lightbulb, 
  ArrowRight,
  Rocket,
  Target
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PitchburgPrograms: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const programs = [
    {
      title: "Innovation Cohorts",
      description: "8-week programs to develop and refine innovative ideas with expert mentorship",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      title: "Pitch Competitions",
      description: "Themed competitions with judges from industry and academia",
      icon: <Trophy className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    {
      title: "Global Workshops",
      description: "Learn presentation skills from international experts",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      title: "Episodic Showcases",
      description: "Regular episodes featuring student innovations and achievements",
      icon: <Calendar className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      title: "Curriculum Integration",
      description: "Embed pitch development into formal academic curriculum",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      title: "International Collaborations",
      description: "Connect with institutions worldwide for cross-cultural pitches",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700"
    }
  ];

  const episodes = [
    {
      number: "01",
      title: "Innovation Showcase",
      description: "Students pitch their innovative solutions to real-world problems"
    },
    {
      number: "02",
      title: "Achievement Stories",
      description: "Highlighting remarkable student accomplishments and journeys"
    },
    {
      number: "03",
      title: "Faculty Initiatives",
      description: "Teachers share their unique pedagogical approaches and research"
    },
    {
      number: "04",
      title: "Global Connections",
      description: "International collaborations and cross-cultural innovations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            CURRICULUM & PROGRAMS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Building the <span className="text-unifor-purple">Pitch Culture</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Through our curriculum and partnered organizations, we initiate diverse programs 
            that help students learn, build, and pitch their achievements.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className={`${program.color} p-6`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {program.icon}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Episodes */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-unifor-dark-purple">Featured Episodes</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Each episode focuses on a different theme, showcasing diverse talents and innovations
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {episodes.map((episode, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-6">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4 md:mb-0`}>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                          <div className="w-10 h-10 rounded-full bg-unifor-purple text-white flex items-center justify-center z-10">
                            <Target className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                      <div className={`text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                        <div className="inline-block bg-unifor-light-purple text-unifor-purple text-3xl font-bold px-4 py-2 rounded-lg mb-4">
                          EP {episode.number}
                        </div>
                        <h4 className="text-2xl font-bold text-unifor-dark-purple">{episode.title}</h4>
                        <p className="text-gray-600 mt-2">{episode.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 p-6">
                      <Card className={`border-t-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-purple-500'} shadow-md hover:shadow-lg transition-shadow`}>
                        <CardContent className="p-6">
                          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <Rocket className="h-12 w-12 text-gray-400" />
                          </div>
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="bg-gray-100">Coming Soon</Badge>
                            <Button variant="ghost" size="sm" className="text-unifor-purple">
                              Watch Preview
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-unifor-purple/10 to-unifor-blue/10 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">
            Ready to Transform Your Institution?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Bring Pitchburg to your campus and create a vibrant ecosystem of innovation, 
            global collaboration, and opportunities for your students.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
              Apply for Pitchburg
            </Button>
            <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchburgPrograms;
