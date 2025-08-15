import React from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Video, Coffee, Home, Award, Globe, Lightbulb, BookOpen, Users, FileCheck, Star, MessageCircle, Target } from "lucide-react";

const Stanburg: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/stanburg` : 'https://uniford.org/stanburg';

  const collaborationSteps = [
    {
      icon: Video,
      title: "Google Meet Sessions",
      description: "Join intimate virtual meet-ups where ideas take root.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Coffee,
      title: "Group Coffee Conversations",
      description: "Share perspectives over coffee, connecting heart-to-heart.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Home,
      title: "On-Site Live Stays",
      description: "Live, work, and brainstorm with fellow visionaries to capture real insights.",
      color: "bg-green-50 text-green-600"
    }
  ];

  const benefits = [
    "Influence real-world policy and curriculum",
    "Connect with other passionate visionaries",
    "Gain insights from lived experiences and cross-industry minds",
    "Be part of something revolutionary in education and decision-making",
    "Receive an official Contributor Certificate and public highlight for your work"
  ];

  const timeline = [
    { step: "Application Approval", description: "You receive a welcome kit", icon: FileCheck },
    { step: "Orientation Session", description: "Meet other contributors", icon: Users },
    { step: "Stanburg Episode", description: "Join virtual or in-person sessions", icon: Video },
    { step: "Follow-Up Contribution", description: "Submit insights & ideas", icon: Lightbulb },
    { step: "Recognition", description: "Receive certificate & contributor feature", icon: Award }
  ];

  const discussionTopics = [
    {
      title: "Policy Innovation",
      icon: Globe,
      questions: [
        "What policies need urgent reform in your field?",
        "How can we make decision-making more inclusive?",
        "What barriers prevent good policies from being implemented?"
      ],
      purpose: "Shape transformative policies that create lasting impact"
    },
    {
      title: "Educational Transformation",
      icon: BookOpen,
      questions: [
        "What skills should future curricula prioritize?",
        "How can we bridge the gap between education and real-world application?",
        "What learning methodologies show the most promise?"
      ],
      purpose: "Design curricula that prepare minds for tomorrow's challenges"
    },
    {
      title: "Collaborative Innovation",
      icon: Users,
      questions: [
        "How can diverse perspectives be better integrated into decision-making?",
        "What tools and platforms can enhance meaningful collaboration?",
        "How do we scale local solutions to global challenges?"
      ],
      purpose: "Build frameworks for effective cross-sector collaboration"
    },
    {
      title: "Future Visioning",
      icon: Target,
      questions: [
        "What trends will shape the next decade of education and policy?",
        "How can we prepare for unforeseeable challenges?",
        "What role should technology play in human-centered solutions?"
      ],
      purpose: "Anticipate and prepare for the future of human development"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Stanburg Episode – A Call to the Visionaries | Uniford Foundation</title>
        <meta name="description" content="Join the Uniford Foundation's Stanburg Episode - a unique gathering of changemakers to shape transformative policies & curriculum for the future." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                Exclusive Invitation
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
                  Stanburg Episode
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-primary">
                  A Call to the Visionaries
                </p>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Join the Uniford Foundation in shaping transformative policies & curriculum for the future. 
                  Connect, create, and contribute to the next big leap in education & decision-making.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg font-medium group"
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply to Join Stanburg
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Simulating collaboration visual */}
                    <div className="space-y-3">
                      <div className="h-8 bg-white/60 rounded-lg animate-pulse"></div>
                      <div className="h-16 bg-white/40 rounded-lg"></div>
                      <div className="h-12 bg-white/60 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-12 bg-white/40 rounded-lg"></div>
                      <div className="h-20 bg-white/60 rounded-lg animate-pulse"></div>
                      <div className="h-8 bg-white/40 rounded-lg"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-16 bg-white/60 rounded-lg animate-pulse"></div>
                      <div className="h-8 bg-white/40 rounded-lg"></div>
                      <div className="h-12 bg-white/60 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute top-1/2 right-8 bg-white rounded-full p-2 shadow-lg">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stanburg Exists */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Why We Created Stanburg
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  The Uniford Foundation designs policies and curriculum that do more than just teach — they transform futures. 
                  We help individuals make the right decisions, bring their ideas to life, and execute projects that leave a lasting impact.
                </p>
                <p>
                  But no policy or curriculum is complete without the voices of creative minds, initiators, and doers. 
                  That's why we've launched Stanburg Episode — a unique gathering of changemakers.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 relative overflow-hidden">
                {/* Connecting lines visualization */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle cx="100" cy="100" r="8" fill="currentColor" className="text-primary" />
                    <circle cx="300" cy="150" r="8" fill="currentColor" className="text-accent" />
                    <circle cx="200" cy="250" r="8" fill="currentColor" className="text-secondary" />
                    <circle cx="150" cy="350" r="8" fill="currentColor" className="text-primary" />
                    <circle cx="350" cy="300" r="8" fill="currentColor" className="text-accent" />
                    
                    <line x1="100" y1="100" x2="300" y2="150" stroke="currentColor" strokeWidth="2" className="text-primary/50" />
                    <line x1="300" y1="150" x2="200" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent/50" />
                    <line x1="200" y1="250" x2="150" y2="350" stroke="currentColor" strokeWidth="2" className="text-secondary/50" />
                    <line x1="150" y1="350" x2="350" y2="300" stroke="currentColor" strokeWidth="2" className="text-primary/50" />
                    <line x1="100" y1="100" x2="200" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent/50" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Globe className="h-24 w-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Stanburg Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              A Unique Collaboration Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`inline-flex p-4 rounded-full ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Role as a Contributor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Why You Should Join
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <p className="text-lg text-slate-600 group-hover:text-slate-800 transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Certificate Mock-up */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl border border-white">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-slate-800">Contributor Certificate</h3>
                      <p className="text-sm text-slate-600">Official Recognition</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-slate-600">Public Feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Invitation */}
      <section id="application" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You're Invited to Stanburg
            </h2>
            <p className="text-xl leading-relaxed text-slate-300">
              This is more than an event — it's a movement. Whether you're a policy maker, educator, 
              innovator, or simply a passionate mind with a vision, your insights are valuable. 
              Join us to co-create the framework that will guide education and decision-making for decades to come.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-12 py-4 text-lg"
            >
              Apply to Join Stanburg
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Happens After You Join
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <item.icon className="h-6 w-6 text-primary" />
                          <h3 className="font-bold text-slate-800">{item.step}</h3>
                        </div>
                        <p className="text-slate-600 mt-2">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 max-w-4xl mx-auto leading-tight">
            "Great policies are born from great minds. Yours could be one of them."
          </blockquote>
        </div>
      </section>

      {/* Discussion Topics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What We'll Discuss at Stanburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              To ensure every session is meaningful and actionable, contributors receive curated questions 
              and discussion themes in advance. This helps you come prepared with insights, stories, and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {discussionTopics.map((topic, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{topic.title}</h3>
                  </div>
                  
                  <p className="text-sm text-primary font-medium mb-4 uppercase tracking-wide">
                    Purpose: {topic.purpose}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-700">Sample Questions:</h4>
                    <ul className="space-y-2">
                      {topic.questions.map((question, qIndex) => (
                        <li key={qIndex} className="flex items-start gap-3">
                          <MessageCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stanburg;