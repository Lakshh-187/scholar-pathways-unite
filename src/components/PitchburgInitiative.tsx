
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Presentation, 
  Video, 
  Trophy, 
  Award, 
  Mic, 
  Globe, 
  GraduationCap, 
  Lightbulb, 
  Building,
  Rocket,
  Share2,
  ArrowUpRight,
  Sparkles,
  Users
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PitchburgInitiative: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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

  const partners = [
    { name: "YLC", icon: <Award className="h-5 w-5" /> },
    { name: "Uniford", icon: <Building className="h-5 w-5" /> },
    { name: "IVY-leagues", icon: <GraduationCap className="h-5 w-5" /> },
    { name: "Clubs", icon: <Users className="h-5 w-5" /> },
    { name: "SEP-700", icon: <Rocket className="h-5 w-5" /> }
  ];

  const benefits = [
    {
      title: "Certificates",
      description: "Official recognition for all participants",
      icon: <Award className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Global Exposure",
      description: "Opportunities to showcase ideas worldwide",
      icon: <Globe className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Goodies",
      description: "Exclusive merchandise for participants",
      icon: <Trophy className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Opportunities",
      description: "Connections with industry partners",
      icon: <Rocket className="h-8 w-8 text-unifor-purple" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            GLOBAL INITIATIVE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Pitchburg <span className="text-unifor-purple">Initiative</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming institutions to international standards through curated pitch experiences, 
            similar to TEDx and Shark Tank.
          </p>
        </motion.div>

        {/* Main showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">Empowering Student Voices</h3>
            <p className="text-gray-600 mb-6">
              Pitchburg provides a structured platform for students to pitch their ideas, innovations, 
              achievements, and creations to a global audience. Through carefully curated episodes, 
              students and teachers explore worldwide opportunities and unique models.
            </p>
            <p className="text-gray-600 mb-6">
              All participants receive certificates and goodies, while deserving innovators connect with 
              organizations that can award, publish, and promote their work globally.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={item} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Mic className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Pitch Your Ideas</h3>
                  <p className="text-sm text-gray-600">From concepts to innovations</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Video className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Episodic Format</h3>
                  <p className="text-sm text-gray-600">Themed pitch sessions</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Globe className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Global Exposure</h3>
                  <p className="text-sm text-gray-600">International recognition</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Innovation Culture</h3>
                  <p className="text-sm text-gray-600">Foster creativity campus-wide</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
                Join Pitchburg
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video relative shadow-2xl rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center text-white p-10 text-center">
                <Presentation className="h-12 w-12 mb-4 text-unifor-purple" />
                <h3 className="text-2xl font-bold mb-2">Pitchburg</h3>
                <p className="text-lg">Where Ideas Transform Institutions</p>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-unifor-purple to-unifor-blue h-1"></div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white animate-pulse px-3">LIVE</Badge>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 z-10">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Benefits grid */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-unifor-dark-purple">
            What Participants Receive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center"
              >
                <div className="bg-unifor-light-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-unifor-dark-purple">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Partners */}
        <motion.div 
          className="bg-white p-10 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-unifor-dark-purple">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-unifor-light-purple flex items-center justify-center mb-3">
                  {partner.icon}
                </div>
                <span className="font-medium text-unifor-dark-purple">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchburgInitiative;
