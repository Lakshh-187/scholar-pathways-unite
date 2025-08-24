import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Lightbulb,
  MessageSquare,
  Star,
  Calendar,
  Trophy,
  Handshake,
  Target
} from 'lucide-react';

const Stanburg = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Contribution Certification",
      description: "Receive official recognition for your valuable contributions to policy development and educational advancement."
    },
    {
      icon: Users,
      title: "Core Team Opportunity",
      description: "Get invited to join our prestigious Core Team of Council and shape the future of education."
    },
    {
      icon: BookOpen,
      title: "Magazine Feature",
      description: "Be featured in our educational magazines and share your expertise with a global audience."
    },
    {
      icon: Calendar,
      title: "Conference Invitations",
      description: "Exclusive invitations to high-level conferences and conclaves with industry leaders."
    }
  ];

  const impactAreas = [
    { icon: Target, title: "Public Policy", description: "Shape educational policies" },
    { icon: BookOpen, title: "Curriculum Design", description: "Influence learning frameworks" },
    { icon: Lightbulb, title: "Programs", description: "Develop innovative initiatives" },
    { icon: Globe, title: "Establishments", description: "Guide institutional development" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Stanburg - Coffee with Leaders | Uniford</title>
        <meta name="description" content="Join leaders from diverse fields in shaping the future of education through meaningful conversations and knowledge exchange." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 text-primary border-primary/30">
              <Coffee className="w-5 h-5 mr-2" />
              Exclusive Leadership Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Stanburg
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground/90">
              Coffee with Leaders
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              An exclusive platform where visionary leaders from diverse fields come together to share perspectives, 
              experiences, and insights that shape the future of education and public policy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <Handshake className="w-6 h-6 mr-2" />
                Join the Conversation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2">
                <Calendar className="w-6 h-6 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Coffee className="w-24 h-24 text-primary animate-bounce" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Users className="w-32 h-32 text-secondary animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Education Through 
                <span className="block text-primary">Leadership Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stanburg is an open-source knowledge contribution platform where industry leaders, 
                educators, and visionaries collaborate to design better educational frameworks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Open Dialogue</h3>
                    <p className="text-muted-foreground">
                      Engage in meaningful conversations via Google Meet or in-office discussions 
                      that drive real educational change.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Global Impact</h3>
                    <p className="text-muted-foreground">
                      Your insights contribute to educational magazines, books, and policies 
                      that benefit generations of learners worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    {impactAreas.map((area, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-background/80 p-4 rounded-xl mb-3 backdrop-blur-sm">
                          <area.icon className="w-8 h-8 text-primary mx-auto" />
                        </div>
                        <h4 className="font-semibold mb-1">{area.title}</h4>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Exclusive Benefits for 
                <span className="block text-primary">Distinguished Leaders</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When you join Stanburg, you become part of an elite community of changemakers 
                with access to unique opportunities and recognition.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                    <CardHeader className="text-center pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="text-primary">Stanburg</span> Works
              </h2>
              <p className="text-xl text-muted-foreground">
                A simple yet impactful process that transforms insights into educational excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gradient-to-br from-primary to-primary/80 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4">Invitation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive a premium invitation to join our exclusive Coffee with Leaders sessions, 
                  either virtually or in-person.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4">Contribution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share your expertise, perspectives, and experiences that contribute to shaping 
                  educational policies and programs.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gradient-to-br from-accent to-accent/80 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4">Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive certification, magazine features, and ongoing opportunities to 
                  influence educational transformation globally.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Lasting Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join the elite community of leaders who are shaping the future of education. 
              Your voice matters, and your experience can transform generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90"
              >
                <Star className="w-6 h-6 mr-2" />
                Accept Invitation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Stanburg;