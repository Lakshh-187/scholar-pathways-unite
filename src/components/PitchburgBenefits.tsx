
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Star, 
  Award, 
  Rocket, 
  Globe, 
  Link,
  Handshake
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PitchburgBenefits: React.FC = () => {
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

  const benefitCards = [
    {
      title: "YLC Membership",
      description: "Join Uniford Council of YLC as a member and connect with global opportunities",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      title: "Mentorship Sessions",
      description: "Be invited to institutes to lead mentorship sessions and inspire students",
      icon: <Star className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      title: "Recognition",
      description: "Gain recognition for your achievements, innovations and vision",
      icon: <Award className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-amber-500 to-amber-700"
    }
  ];

  const frontliners = [
    "Innovators",
    "Initiators",
    "Founders",
    "Entrepreneurs",
    "Social Activists",
    "Researchers",
    "Change Makers"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            MEMBERSHIP & BENEFITS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Join the <span className="text-unifor-purple">Frontliners Network</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We create a format of Pitchburg model to connect innovators and leaders 
            with institutions and opportunities worldwide.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/417c6974-656e-4cc8-9b02-9500b11d325b.png" 
                alt="Uniford Council Meeting" 
                className="w-full h-auto object-cover rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Uniford Council of YLC</h3>
                  <p className="text-white/80">Connecting frontliners with global opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">We're Looking For Frontliners</h3>
            <p className="text-gray-600 mb-6">
              At Uniford, we identify and invite exceptional individuals to join the "Uniford Council of YLC" as members. 
              Our mission is to enhance connectivity, provide resources, and create career opportunities for those making 
              a difference.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {frontliners.map((type, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-unifor-light-purple text-unifor-dark-purple px-3 py-1 rounded-full text-sm font-medium"
                >
                  {type}
                </motion.span>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-unifor-dark-purple">
                <Rocket className="h-5 w-5 text-unifor-purple" />
                The Pitchburg Model
              </h4>
              <p className="text-gray-600">
                Pitchburg is our platform where frontliners are invited to educational institutions to conduct 
                mentorship sessions, inspire students, share their achievements, innovations, and vision for the future.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
                Apply for YLC Membership
              </Button>
              <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Benefits Cards */}
        <motion.div 
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-unifor-dark-purple">
            Benefits of Participation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className={`${card.color} p-6`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Commitment */}
        <motion.div 
          className="bg-gradient-to-r from-unifor-light-purple/30 to-unifor-blue/20 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Handshake className="h-8 w-8 text-unifor-purple" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">
            Our Dedication to Your Success
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We are dedicated to enhancing connectivity, providing invitations to speaking engagements, 
            creating career opportunities, and offering essential resources to help you make a greater impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
              Join as a Frontliner
            </Button>
            <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/10">
              Explore Pitchburg
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchburgBenefits;
