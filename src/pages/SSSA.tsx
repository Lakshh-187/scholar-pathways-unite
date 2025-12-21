import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, BookOpen, Heart, Bus, Users, Headphones, Film, Lightbulb, GraduationCap, Cpu, Flower2, Award, Sparkles, CheckCircle2, FileText, ClipboardCheck, Phone, Mail, BookMarked, Globe, Video, Newspaper, Target, FileCheck, Users2, Building, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const movements = [
  {
    id: 1,
    title: "Safety Audits & Advocacy",
    subtitle: "Annual Report Publication",
    description: "Comprehensive safety audits to ensure schools meet international safety standards. We help publish annual safety reports that showcase compliance and continuous improvement.",
    image: "/sssa/safety-audit.png",
    icon: Shield,
    tags: ["Safety Checklists", "Audit Documents", "Compliance Checks"]
  },
  {
    id: 2,
    title: "Standard Audit & Advocacy",
    subtitle: "NEP-2020 Impact",
    description: "Evaluate and advocate for NEP-2020 implementation. Track progress, measure impact, and ensure schools align with national education policy frameworks.",
    image: "/sssa/standard-audit.png",
    icon: BookOpen,
    tags: ["NEP-2020 Framework", "Impact Analysis", "Quality Education"]
  },
  {
    id: 3,
    title: "Health Movement",
    subtitle: "with Satvik",
    description: "Promoting holistic health and wellness in schools through Satvik principles. Focus on nutrition, mental health, and physical well-being for students and staff.",
    image: "/sssa/osho-life.png",
    icon: Heart,
    tags: ["Nutrition", "Mental Health", "Physical Wellness"]
  },
  {
    id: 4,
    title: "Great School Tour",
    subtitle: "with Better India",
    description: "Partnering with Better India to showcase exemplary schools across the nation. Learn from best practices and implement proven educational strategies.",
    image: "/sssa/great-school-tour.png",
    icon: Bus,
    tags: ["Heritage Tours", "Best Practices", "Educational Excellence"]
  },
  {
    id: 5,
    title: "Governor-Advisor Appointment",
    subtitle: "Leadership Excellence",
    description: "Establish strong governance through qualified advisor appointments. Build leadership frameworks that drive institutional excellence and accountability.",
    image: "/sssa/designator-movement.png",
    icon: Users,
    tags: ["Governance", "Leadership", "Accountability"]
  },
  {
    id: 6,
    title: "Launch Helpdesk",
    subtitle: "for Schools",
    description: "Dedicated helpdesk support for schools navigating compliance, safety, and educational standards. Get expert guidance whenever you need it.",
    image: "/sssa/helpdesk-launch.png",
    icon: Headphones,
    tags: ["Instant Support", "Expert Guidance", "24/7 Assistance"]
  },
  {
    id: 7,
    title: "I-GPTL School Cinema",
    subtitle: "Visual Learning",
    description: "Transform education through visual storytelling. Curated educational films that inspire, educate, and engage students in meaningful learning experiences.",
    image: "/sssa/school-cinema.png",
    icon: Film,
    tags: ["Educational Films", "Visual Learning", "Storytelling"]
  },
  {
    id: 8,
    title: "Establish Incubation Cell",
    subtitle: "Nurturing Innovators",
    description: "Create entrepreneurial ecosystems within schools. Support young innovators with mentorship, resources, and platforms to launch their ideas.",
    image: "/sssa/incubation-cell.png",
    icon: Lightbulb,
    tags: ["Mentorship", "Startup Launchpad", "Young Innovators"]
  },
  {
    id: 9,
    title: "Teacher Training & Development Cell",
    subtitle: "Professional Growth",
    description: "Comprehensive professional development programs for educators. International collaborations, modern methodologies, and continuous skill enhancement.",
    image: "/sssa/teacher-training.png",
    icon: GraduationCap,
    tags: ["Professional Development", "International Training", "Modern Methods"]
  },
  {
    id: 10,
    title: "AI & Green Skills Movement",
    subtitle: "by 1M1B",
    description: "Preparing students for the future with AI literacy and sustainability skills. Partner with 1M1B to create tech-savvy, environmentally conscious learners.",
    image: "/sssa/ai-green-skills.png",
    icon: Cpu,
    tags: ["Technology", "Sustainability", "Future Ready"]
  },
  {
    id: 11,
    title: "OSHO Life Movement",
    subtitle: "Mindful Learning",
    description: "Integrate mindfulness and meditation into education. Create calm, focused learning environments that nurture emotional intelligence and creativity.",
    image: "/sssa/osho-life.png",
    icon: Flower2,
    tags: ["Meditation", "Mindfulness", "Emotional Intelligence"]
  },
  {
    id: 12,
    title: "Designator Movement",
    subtitle: "by UNCIF",
    description: "UNCIF's initiative to recognize and designate schools meeting international standards. Earn prestigious designations that reflect your commitment to excellence.",
    image: "/sssa/designator-movement.png",
    icon: Award,
    tags: ["Recognition", "International Standards", "Excellence"]
  },
  {
    id: 13,
    title: "Her-HaVa Movement",
    subtitle: "Empowering All",
    description: "Comprehensive movement for gender equality and inclusive education. Create safe, supportive environments where every student can thrive.",
    image: "/sssa/designator-movement.png",
    icon: Sparkles,
    tags: ["Inclusivity", "Gender Equality", "Empowerment"]
  }
];

const roadmapSteps = [
  { step: 1, title: "Join the SSSA Network", icon: Users2, color: "from-yellow-500 to-amber-500" },
  { step: 2, title: "Receive Manual Guide & Self-Audit Toolkit", icon: BookMarked, color: "from-amber-500 to-orange-500" },
  { step: 3, title: "Conduct Self-Audit & Submit Report", icon: ClipboardCheck, color: "from-orange-500 to-red-500" },
  { step: 4, title: "Adopt Best Practices with Expert Support", icon: TrendingUp, color: "from-red-500 to-pink-500" },
  { step: 5, title: "Monthly Newsletter & Expert Talks", icon: Mail, color: "from-pink-500 to-purple-500" },
  { step: 6, title: "Help-Desk Support for Annual Report", icon: Headphones, color: "from-purple-500 to-indigo-500" },
  { step: 7, title: "Apply for Recognition & Accreditation", icon: Award, color: "from-indigo-500 to-blue-500" }
];

const membershipBenefits = [
  { 
    title: "School Safety & Standards Compliance Manual Guide", 
    icon: FileText,
    description: "Comprehensive manual covering all aspects of school safety and standards compliance with step-by-step implementation guidelines.",
    image: "/sssa/safety-audit.png",
    tags: ["Documentation", "Guidelines", "Compliance"]
  },
  { 
    title: "Self-Audit Checklist & Documentation Toolkit", 
    icon: ClipboardCheck,
    description: "Complete toolkit for conducting self-assessments with ready-to-use checklists and documentation templates.",
    image: "/sssa/standard-audit.png",
    tags: ["Self-Assessment", "Checklists", "Templates"]
  },
  { 
    title: "School Safety Help-Desk Access", 
    icon: Phone,
    description: "24/7 dedicated helpdesk support for all your safety and compliance queries with expert guidance.",
    image: "/sssa/helpdesk-launch.png",
    tags: ["Support", "24/7 Access", "Expert Help"]
  },
  { 
    title: "Certificate of SSSA Membership", 
    icon: Award,
    description: "Official SSSA membership certificate recognizing your commitment to school safety and standards.",
    image: "/sssa/designator-movement.png",
    tags: ["Recognition", "Certificate", "Membership"]
  },
  { 
    title: "Expert Talks by Subject Matter Experts", 
    icon: Users,
    description: "Regular sessions with industry experts covering latest trends in school safety, pedagogy, and governance.",
    image: "/sssa/teacher-training.png",
    tags: ["Expert Sessions", "Knowledge", "Learning"]
  },
  { 
    title: "Monthly Safety & Compliance Newsletters", 
    icon: Newspaper,
    description: "Stay updated with monthly newsletters featuring best practices, case studies, and compliance updates.",
    image: "/sssa/standard-audit.png",
    tags: ["Updates", "Best Practices", "News"]
  },
  { 
    title: "Eligibility for Recognition & Accreditation", 
    icon: FileCheck,
    description: "Become eligible for Safe & Standard School Recognition and prestigious accreditation programs.",
    image: "/greats/gptl-schools.jpeg",
    tags: ["Accreditation", "Recognition", "Excellence"]
  },
  { 
    title: "Great School Cinema", 
    icon: Film,
    description: "Feature your school's best practices and achievements in our Great School Cinema platform.",
    image: "/sssa/school-cinema.png",
    tags: ["Media", "Showcase", "Visibility"]
  },
  { 
    title: "International Dialogues & Conferences", 
    icon: Globe,
    description: "Access to international conferences, dialogues, and networking opportunities with global educators.",
    image: "/sssa/great-school-tour.png",
    tags: ["Global Network", "Conferences", "Collaboration"]
  },
  { 
    title: "Leadership Appointments & Governance", 
    icon: Building,
    description: "Opportunities for leadership roles and governance positions within the SSSA network.",
    image: "/sssa/designator-movement.png",
    tags: ["Leadership", "Governance", "Appointments"]
  },
  { 
    title: "School Climate Credit Bank", 
    icon: Target,
    description: "Establish your school's climate credit bank to track and showcase environmental initiatives.",
    image: "/sssa/ai-green-skills.png",
    tags: ["Sustainability", "Climate", "Credits"]
  },
  { 
    title: "Advocacy & Global Best Practices", 
    icon: TrendingUp,
    description: "Access to global best practices and advocacy support for implementing international standards.",
    image: "/sssa/incubation-cell.png",
    tags: ["Advocacy", "Best Practices", "Standards"]
  },
  { 
    title: "BISS Movement Participation", 
    icon: Shield,
    description: "Be part of the BISS movement bringing international standards and safety to schools nationwide.",
    image: "/sssa/safety-audit.png",
    tags: ["BISS", "Movement", "Safety"]
  }
];

const SSSA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeMovement, setActiveMovement] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const words = ['Safety', 'Standards', 'Excellence', 'Innovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>SSSA - BISS in Schools | Uniford Foundation</title>
        <meta name="description" content="Schools apply for the BISS movement - Bringing International Standards & Safety in Schools through comprehensive audits, advocacy, and transformative programs." />
      </Helmet>

      {/* Hero Section - Dark Yellow/Orange Theme like Greats */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                BISS Movement
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                SSSA
                <span className="block text-2xl md:text-3xl font-semibold text-yellow-200 mt-2">
                  School Safety & Standard Authority
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-amber-100/90 leading-relaxed">
                  Bringing <span className="text-yellow-400 font-bold">International Standards & Safety</span> in Schools
                </p>
                <p className="text-lg text-amber-200/80">
                  Transform your school with our comprehensive{' '}
                  <span className="inline-block min-w-[120px] font-bold text-yellow-400 transition-all duration-300">
                    {words[currentIndex]}
                  </span>{' '}
                  programs.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/20">
                <p className="text-amber-100 mb-2">Join the movement for educational excellence</p>
                <div className="flex flex-wrap gap-3">
                  {['13+ Movements', '500+ Schools', '50K+ Students'].map((stat, idx) => (
                    <Badge key={idx} className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                      {stat}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/apply">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right - Hero Image Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/sssa/safety-audit.png" 
                    alt="Safety Audit" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-500/30"
                  />
                  <img 
                    src="/sssa/incubation-cell.png" 
                    alt="Incubation Cell" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/sssa/teacher-training.png" 
                    alt="Teacher Training" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                  <img 
                    src="/sssa/school-cinema.png" 
                    alt="School Cinema" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-orange-500/30"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-2xl transform -rotate-3">
                <div className="text-center text-black">
                  <div className="text-2xl font-bold">FOR SCHOOLS</div>
                  <div className="text-xs">BISS Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Movements Section - Tab-based Sidebar Layout */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Our Movements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Partner <span className="text-orange-600">With Us?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Powerful movements built to simplify every step, from safety audits to recognition
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar - Movement List */}
            <div className="lg:col-span-4 space-y-2">
              {movements.map((movement, idx) => (
                <button
                  key={movement.id}
                  onClick={() => setActiveMovement(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeMovement === idx 
                      ? 'bg-yellow-500 text-black font-semibold shadow-lg' 
                      : 'bg-white hover:bg-orange-100 text-gray-700 border border-orange-100'
                  }`}
                >
                  <movement.icon className={`w-5 h-5 flex-shrink-0 ${activeMovement === idx ? 'text-black' : 'text-orange-500'}`} />
                  <span className="text-sm">{movement.title}</span>
                </button>
              ))}
            </div>

            {/* Right Content - Active Movement Details */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 min-h-[500px] relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {movements[activeMovement].title}
                    </h3>
                    <p className="text-orange-800 font-semibold mb-4">
                      {movements[activeMovement].subtitle}
                    </p>
                    <p className="text-gray-800 leading-relaxed mb-6">
                      {movements[activeMovement].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {movements[activeMovement].tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-white/60 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to="/apply">
                      <Button className="bg-black hover:bg-gray-900 text-white w-fit">
                        Join This Movement <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src={movements[activeMovement].image}
                        alt={movements[activeMovement].title}
                        className="rounded-2xl shadow-2xl max-h-[350px] object-cover border-4 border-white/50"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                        {React.createElement(movements[activeMovement].icon, { className: "w-8 h-8 text-orange-500" })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {movements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMovement(idx)}
                    className={`transition-all duration-300 ${
                      activeMovement === idx 
                        ? 'w-8 h-2 bg-yellow-500 rounded-full' 
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-4">Your Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Roadmap to a <span className="text-yellow-400">Safer & Standard</span> School
            </h2>
            <p className="text-amber-100/80 text-lg max-w-3xl mx-auto">
              Follow our proven 7-step process to transform your school into a SSSA certified institution
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 transform -translate-x-1/2" />
            
            <div className="space-y-8 lg:space-y-12">
              {roadmapSteps.map((step, idx) => (
                <div 
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                      <div className={`flex items-center gap-4 mb-3 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`bg-gradient-to-r ${step.color} p-3 rounded-xl`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-yellow-400 font-bold text-lg">Step {step.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-yellow-500/30 z-10`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section - Tab-based Sidebar Layout */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Membership Benefits</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Schools Receive with <span className="text-orange-600">SSSA Membership</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              SSSA empowers schools to achieve safety, standards & sustainability without financial burden
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar - Benefits List */}
            <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              {membershipBenefits.map((benefit, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBenefit(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeBenefit === idx 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold shadow-lg' 
                      : 'bg-white hover:bg-orange-100 text-gray-700 border border-orange-100'
                  }`}
                >
                  <benefit.icon className={`w-5 h-5 flex-shrink-0 ${activeBenefit === idx ? 'text-black' : 'text-orange-500'}`} />
                  <span className="text-sm">{benefit.title}</span>
                  {activeBenefit === idx && (
                    <CheckCircle2 className="w-5 h-5 ml-auto text-green-700" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Content - Active Benefit Details */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 min-h-[500px] relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/80 p-3 rounded-xl">
                        {React.createElement(membershipBenefits[activeBenefit].icon, { className: "w-8 h-8 text-orange-600" })}
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {membershipBenefits[activeBenefit].title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-6">
                      {membershipBenefits[activeBenefit].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {membershipBenefits[activeBenefit].tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-white/60 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                    <Link to="/apply">
                      <Button className="bg-black hover:bg-gray-900 text-white w-fit">
                        Get This Benefit <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src={membershipBenefits[activeBenefit].image}
                        alt={membershipBenefits[activeBenefit].title}
                        className="rounded-2xl shadow-2xl max-h-[350px] object-cover border-4 border-white/50"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                          <span className="text-sm font-bold text-gray-800">Included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {membershipBenefits.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBenefit(idx)}
                    className={`transition-all duration-300 ${
                      activeBenefit === idx 
                        ? 'w-8 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full' 
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-6 text-lg">
                Become a Member <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UIRAD Research Tour Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-4">Global Research</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Global Academic Research Tour by <span className="text-yellow-400">UIRAD</span>
              </h2>
              <p className="text-amber-100/90 text-lg mb-6">
                Best Practices, Strengths & Unique Attributes of Schools
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" /> That helps:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-100">SSSA Founding Member Schools to adopt & implement best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-100">Publish achievements on Greats School Cinema</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/greats">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                    <Video className="w-4 h-4 mr-2" /> View Greats Cinema
                  </Button>
                </Link>
                <Link to="/uirad">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                    <Globe className="w-4 h-4 mr-2" /> Learn About UIRAD
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/sssa/great-school-tour.png" 
                  alt="School Tour"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-500/30"
                />
                <img 
                  src="/sssa/school-cinema.png" 
                  alt="School Cinema"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <img 
                  src="/sssa/teacher-training.png" 
                  alt="Teacher Training"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <img 
                  src="/sssa/standard-audit.png" 
                  alt="Standard Audit"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-orange-500/30"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-black p-4 rounded-xl shadow-xl">
                <Globe className="w-8 h-8 mb-1" />
                <div className="text-sm font-bold">Global Research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSSA Wants Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-black/10 text-black border-black/20 mb-6">Our Vision</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              SSSA Wants
            </h2>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30">
              <p className="text-2xl md:text-3xl text-black font-medium leading-relaxed mb-8">
                Every School to Proudly <span className="font-bold">Publish their Safety & Standard Annual Report</span> & a Vision Manifesto for the Upcoming Year
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="bg-black/10 rounded-2xl p-6 flex items-center gap-4">
                  <FileText className="w-12 h-12 text-black" />
                  <div className="text-left">
                    <div className="font-bold text-black text-lg">Annual Report</div>
                    <div className="text-black/70 text-sm">Safety & Standards</div>
                  </div>
                </div>
                <div className="bg-black/10 rounded-2xl p-6 flex items-center gap-4">
                  <Target className="w-12 h-12 text-black" />
                  <div className="text-left">
                    <div className="font-bold text-black text-lg">Vision Manifesto</div>
                    <div className="text-black/70 text-sm">Future Goals</div>
                  </div>
                </div>
              </div>

              <Link to="/apply">
                <Button className="bg-black hover:bg-gray-900 text-white font-bold px-10 py-6 text-lg shadow-xl">
                  Start Your Journey <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join BISS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-4">Why Join BISS?</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Become a <span className="text-yellow-400">Certified</span> BISS School
              </h2>
              <p className="text-amber-100/80 text-lg mb-8">
                Join the movement that's transforming education across the nation. Get access to comprehensive support, international collaborations, and recognition.
              </p>

              <div className="space-y-4">
                {[
                  "International Standards Compliance",
                  "Safety Audit & Annual Reports",
                  "Teacher Training Programs",
                  "Student Development Initiatives",
                  "Helpdesk & Continuous Support",
                  "Recognition & Accreditation"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg text-amber-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/apply" className="inline-block mt-8">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-lg">
                  Apply for BISS Certification
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/sssa/sssa-international-logo.png" 
                alt="SSSA International"
                className="rounded-3xl shadow-2xl w-full bg-white p-4"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-black p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Schools Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Join the BISS movement today and become part of the global network of safe and standard schools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-6 text-lg shadow-xl">
                Apply Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/greats">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-6 text-lg">
                Explore Greats
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SSSA;
